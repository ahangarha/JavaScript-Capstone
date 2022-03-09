import getData from './modules/api-utils.js';

import './style.css';

const FOOD_API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';
const ALL_FOOD_ENDPOINT = 'filter.php?a=Jamaican';

const ALL_FOOD_API_URL = FOOD_API_BASE_URL + ALL_FOOD_ENDPOINT;

const foodListWrapper = document.getElementById('home');
const commentPopup = document.getElementById('comment-popup');

const displayPopUp = (id) => {
  const URL = `${FOOD_API_BASE_URL}lookup.php?i=${id}`;
	getData(URL).then((res) => {
		const foodItem = res.meals[0]
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
		
		const closeBtn = document.getElementById(`close-popup-button`);
		closeBtn.addEventListener('click', () => {
			commentPopup.classList.remove('show')
		})
	});
}

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
