import getData from './modules/api-utils.js';
import FoodList from './modules/food-list.js';

import './style.css';

const FOOD_API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';
const ALL_FOOD_ENDPOINT = 'filter.php?a=Jamaican';
const ALL_FOOD_API_URL = FOOD_API_BASE_URL + ALL_FOOD_ENDPOINT;

const foodListWrapper = document.getElementById('home');

const foodList = new FoodList();

function showAllFood() {
  // clear loading text
  foodListWrapper.innerHTML = '';

  Object.keys(foodList.foods).forEach((foodId) => {
    const food = foodList.foods[foodId];
    foodListWrapper.innerHTML += `
    <div class="food-card" id="${food.id}">
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

const INV_API_BASE = 'https://us-central1-involvement-api.cloudfunctions.net/'
  + 'capstoneApi/apps/';
const INV_API_KEY = 'zX9lc5HNiZeTfJrwouGw';
const LIKES_ENDPOINT = '/likes';

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
