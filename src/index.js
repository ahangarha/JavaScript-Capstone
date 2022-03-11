import {
  showAllFood,
  getAllFoodData,
  getAllLikes,
  displayitemCounter,
} from './modules/core-functions.js';

import './style.css';

getAllFoodData().then(() => {
  getAllLikes().then(() => {
    showAllFood();
  }).then(() => {
    displayitemCounter();
  });
});
