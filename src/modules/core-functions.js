import { getData, sendData } from './api-utils.js';
import FoodList from './food-list.js';

const foodList = new FoodList();

const FOOD_API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';
const ALL_FOOD_ENDPOINT = 'filter.php?a=Jamaican';
const ALL_FOOD_API_URL = FOOD_API_BASE_URL + ALL_FOOD_ENDPOINT;

const INV_API_BASE = 'https://us-central1-involvement-api.cloudfunctions.net/'
+ 'capstoneApi/apps/';
const INV_API_KEY = 'zX9lc5HNiZeTfJrwouGw';
const LIKES_ENDPOINT = '/likes';
const COMMENT_ENDPOINT = '/comments';

const foodListWrapper = document.getElementById('home');
const commentPopup = document.getElementById('comment-popup');
const itemCounter = document.getElementById('counter');

export const getComments = (id) => new Promise((resolve) => {
  const parameter = `?item_id=${id}`;
  const COMMENT_API = INV_API_BASE + INV_API_KEY + COMMENT_ENDPOINT + parameter;
  getData(COMMENT_API).then((commentsFromAPI) => {
    if (commentsFromAPI.error) commentsFromAPI = [];
    foodList.addComments(id, commentsFromAPI);
    resolve();
  });
});

const postComment = (id, input, textarea) => {
  const ADD_COMMENT_URL = INV_API_BASE + INV_API_KEY + COMMENT_ENDPOINT;
  const data = {
    item_id: id,
    username: input.value,
    comment: textarea.value,
  };

  sendData(ADD_COMMENT_URL, data).then((res) => {
    if (res.status === 201) {
      input.value = '';
      textarea.value = '';
      const commentWrapper = document.getElementById('comments');
      commentWrapper.innerHTML += `<li class="comment">
        <h4 class="comment-author">${data.username}</h4>
        <p class="comment-message">${data.comment}</p>
        </li> `;
    }
  });
};

export const displayPopUp = (id) => {
  commentPopup.classList.add('show');
  commentPopup.innerHTML = `      <div id="close-popup-button">&times;</div>
    <div class="comment-popup-wrapper">
      <div class="info-section">
        <img id="food-image" src="${foodList.foods[id].image}" alt="" />
        <h2 id="food-title">${foodList.foods[id].title}</h2>
        <p id="food-description">...</p>
      </div>
      <div class="comments-section">
        <h3>Add Comment:</h3>
        <form id="comment-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <textarea
            name="comment"
            rows="5"
            placeholder="Your Comment"
            required
          ></textarea>
          <button id="button" type="submit">Submit</button>
        </form>

        <h3 id="comments-header">Comments:</h3>
        <ul id="comments">
        </ul>
      </div>
    </div>`;

  const commentForm = document.getElementById('comment-form');
  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    postComment(id, e.target.name, e.target.comment);
  });

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
    const commentsHeader = document.getElementById('comments-header');
    const commentWrapper = document.getElementById('comments');
    if (comments.length) {
      // add counter to comments header
      commentsHeader.innerHTML += `<span class="badge">${foodList.getCommentsCount(id)}</span>`;

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

export const likeFood = (id) => {
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
};

export const showAllFood = () => {
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
          <i class="fa fa-heart" aria-hidden="true"></i>
          <div class="likes-counter">
            ${foodList.getLikesText(foodId)}
          </div>
        </div>
      </div>
      <button class="btn comments-button">more</button>
    </div>
    `;
  });

  const commentsButtons = foodListWrapper.querySelectorAll('.comments-button');
  commentsButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      displayPopUp(btn.parentElement.id);
    });
  });

  const likeButtons = foodListWrapper.querySelectorAll('.likes');
  likeButtons.forEach((likeBtn) => {
    const foodId = likeBtn.parentElement.parentElement.id;
    likeBtn.addEventListener('click', () => {
      likeFood(foodId);
    });
  });
};

export const getAllFoodData = () => new Promise((resolve) => {
  getData(ALL_FOOD_API_URL).then((res) => {
    foodList.addFoods(res.meals);
    resolve();
  });
});

export const getAllLikes = () => new Promise((resolve) => {
  const ALL_LIKES_API_URL = INV_API_BASE + INV_API_KEY + LIKES_ENDPOINT;
  getData(ALL_LIKES_API_URL).then((likesFromAPI) => {
    likesFromAPI.forEach((likeObject) => {
      foodList.setLikes(likeObject.item_id, likeObject.likes);
    });
    resolve();
  });
});

export const displayitemCounter = () => {
  const size = foodList.getItemsCount();
  itemCounter.innerHTML = `<span class="badge">${size}<span>`;
};