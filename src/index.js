import getData from './modules/api-utils.js';
import FoodList from './modules/food-list.js';

import './style.css';

const foodList = new FoodList();
const INV_API_BASE = 'https://us-central1-involvement-api.cloudfunctions.net/'
  + 'capstoneApi/apps/';
const INV_API_KEY = 'zX9lc5HNiZeTfJrwouGw';
const LIKES_ENDPOINT = '/likes';
const COMMENT_ENDPOINT = '/comments';

const FOOD_API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';
const ALL_FOOD_ENDPOINT = 'filter.php?a=Jamaican';
const ALL_FOOD_API_URL = FOOD_API_BASE_URL + ALL_FOOD_ENDPOINT;

const foodListWrapper = document.getElementById('home');
const commentPopup = document.getElementById('comment-popup');

function getComments(id) {
  return new Promise((resolve) => {
    const parameter = `?item_id=${id}`;
    const COMMENT_API = INV_API_BASE + INV_API_KEY + COMMENT_ENDPOINT + parameter;
    getData(COMMENT_API).then((commentsFromAPI) => {
      if (commentsFromAPI.error) commentsFromAPI = [];
      foodList.addComments(id, commentsFromAPI);
      resolve();
    });
  });
}

const displayPopUp = (id) => {
  commentPopup.classList.add('show');
  commentPopup.innerHTML = `      <div id="close-popup-button">&times;</div>
    <div class="comment-popup-wrapper">
      <img id="food-image" src="${foodList.foods[id].image}" alt="" />
      <h2 id="food-title">${foodList.foods[id].title}</h2>
      <p id="food-description">...</p>

      <h3>Comments:</h3>
      <ul id="comments">
      </ul>

      <h3>Add Comment:</h3>
      <form id="comment-form">
        <input type="text" name="name" placeholder="Your Name" />
        <textarea
          name="comment"
          rows="5"
          placeholder="Your Comment"
        ></textarea>
        <button id="button">Submit</button>
      </form>
    </div>`;
  const closeBtn = document.getElementById('close-popup-button');
  closeBtn.addEventListener('click', () => {
    commentPopup.classList.remove('show');
  });
  // fetching more details
  const URL = `${FOOD_API_BASE_URL}lookup.php?i=${id}`;
  getData(URL).then((res) => {
    const foodItem = res.meals[0];
    const foodDescElement = document.getElementById('food-description');
    foodDescElement.innerHTML = foodItem.strInstructions;
  });
  getComments(id).then(() => {
    const { comments } = foodList.foods[id];
    const commentWrapper = document.getElementById('comments');
    if (comments.length) {
      comments.forEach((comment) => {
        commentWrapper.innerHTML += `<li class="comment">
        <h4 class="comment-author">${comment.username}</h4>
        <p class="comment-message">${comment.comment}</p>
        </li> `;
      });
    } else {
      commentWrapper.innerHTML = 'no comments';
    }
  });
};

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
          <div class="likes-counter">5 likes</div>
        </div>
      </div>
      <button class="btn comments-button">comments</button>
    </div>
    `;
  });
  const commentsButtons = foodListWrapper.querySelectorAll('.comments-button');
  commentsButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      displayPopUp(btn.parentElement.id);
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

getAllFoodData().then(() => {
  getAllLikes().then(() => {
    showAllFood();
  });
});
