import getData from './modules/api-utils.js';

import './style.css';

const FOOD_API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';
const ALL_FOOD_ENDPOINT = 'filter.php?a=Jamaican';

const ALL_FOOD_API_URL = FOOD_API_BASE_URL + ALL_FOOD_ENDPOINT;

const foodListWrapper = document.getElementById('home');
const commentPopup = document.getElementById('comment-popup');

function getAllFoodDataAndRender() {
  getData(ALL_FOOD_API_URL).then((res) => {
    const allFood = res.meals;

    // clear loading text
    foodListWrapper.innerHTML = '';

    allFood.forEach((food) => {
      foodListWrapper.innerHTML += `
      <div class="food-card" id="${food.idMeal}">
        <img src="${food.strMealThumb}" alt="image of meal" />
        <div class="mid-sec">
          <h3 class="food-title">${food.strMeal}</h3>
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
		commentsButtons.forEach(btn => {
			btn.addEventListener('click', () => {
				displayPopUp(btn.parentElement.id)
			})
		})
  });
}

getAllFoodDataAndRender();
