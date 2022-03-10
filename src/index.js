import { getData, sendData } from './modules/api-utils.js';
import FoodList from './modules/food-list.js';

import './style.css';

const FOOD_API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';
const ALL_FOOD_ENDPOINT = 'filter.php?a=Jamaican';
const ALL_FOOD_API_URL = FOOD_API_BASE_URL + ALL_FOOD_ENDPOINT;

const INV_API_BASE = 'https://us-central1-involvement-api.cloudfunctions.net/'
  + 'capstoneApi/apps/';
const INV_API_KEY = 'zX9lc5HNiZeTfJrwouGw';
const LIKES_ENDPOINT = '/likes';

const foodListWrapper = document.getElementById('home');
const commentPopup = document.getElementById('comment-popup');
const itemCounter = document.getElementById('counter');

const displayPopUp = (id) => {
  const URL = `${FOOD_API_BASE_URL}lookup.php?i=${id}`;
  getData(URL).then((res) => {
    const foodItem = res.meals[0];
    commentPopup.classList.add('show');
    commentPopup.innerHTML = `      <div id="close-popup-button">&times;</div>
      <div class="comment-popup-wrapper">
        <img id="food-image" src="${foodItem.strMealThumb}" alt="" />
        <h2 id="food-title">${foodItem.strMeal}</h2>
        <p id="food-description">${foodItem.strInstructions}</p>

        <h3>Comments:</h3>
        <ul id="comments">
          <li class="comment">
            <h4 class="comment-author">#</h4>
            <p class="comment-message">#</p>
          </li>
        </ul>

        <h3>Add Comment:</h3>
        <form id="comment-form">
          <input type="text" name="name" placeholder="Your Name" />
          <textarea
            name="comment"
            rows="5"
            placeholder="Your Comment"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>`;

    const closeBtn = document.getElementById('close-popup-button');
    closeBtn.addEventListener('click', () => {
      commentPopup.classList.remove('show');
    });
  });
};

const foodList = new FoodList();

function likeFood(id) {
  const url = INV_API_BASE + INV_API_KEY + LIKES_ENDPOINT;
  const data = {
    item_id: id,
  };

  // update like counter
  sendData(url, data).then((res) => {
    if (res.status === 201) {
      const newLikes = foodList.getLikes(id) + 1;
      foodList.setLikes(id, newLikes);
      const likeWrapper = document.getElementById(id);
      const counterElement = likeWrapper.querySelector('.likes-counter');
      counterElement.innerHTML = foodList.getLikesText(id);
    }
  });
}

function showAllFood() {
  // clear loading text
  foodListWrapper.innerHTML = '';

  Object.keys(foodList.foods).forEach((foodId) => {
    const food = foodList.foods[foodId];
    foodListWrapper.innerHTML += `
    <div class="food-card" id="${foodId}">
      <img src="${food.image}" alt="image of meal" />
      <div class="mid-sec">
        <h3 class="food-title">${food.title}</h3>
        <div class="likes">
          <i class="fa fa-heart-o" aria-hidden="true"></i>
          <div class="likes-counter">
            ${foodList.getLikesText(foodId)}
          </div>
        </div>
      </div>
      <button class="btn comments-button">comments</button>
    </div>
    `;
  });
  const likeButtons = foodListWrapper.querySelectorAll('.likes');
  likeButtons.forEach((likeBtn) => {
    const foodId = likeBtn.parentElement.parentElement.id;
    likeBtn.addEventListener('click', () => {
      likeFood(foodId);
    });
  });
}

function getAllFoodData() {
  return new Promise((resolve) => {
    getData(ALL_FOOD_API_URL).then((res) => {
      const allFood = res.meals;
      allFood.forEach((food) => {
        foodList.addFood(
          food.idMeal,
          food.strMeal,
          food.strMealThumb,
        );
      });
      resolve();
    });
    const commentsButtons = foodListWrapper.querySelectorAll('.comments-button');
    commentsButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        displayPopUp(btn.parentElement.id);
      });
    });
  });
}

function getAllLikes() {
  return new Promise((resolve) => {
    const ALL_LIKES_API_URL = INV_API_BASE + INV_API_KEY + LIKES_ENDPOINT;
    getData(ALL_LIKES_API_URL).then((likesFromAPI) => {
      likesFromAPI.forEach((likeObject) => {
        foodList.setLikes(likeObject.item_id, likeObject.likes);
      });
      resolve();
    });
  });
}

function displayitemCounter() {
  const foodlistObj = foodList.foods;
  const size = Object.keys(foodlistObj).length;
  itemCounter.innerHTML = `(${size})`;
}

getAllFoodData().then(() => {
  getAllLikes().then(() => {
    showAllFood();
  }).then(() => {
    displayitemCounter();
  });
});
