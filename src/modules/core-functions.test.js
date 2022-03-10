/**
 * @jest-environment jsdom
 */

import { getAllFoodData } from './core-functions.js';
import FoodList from './food-list.js';

jest.mock('./api-utils.js');

test('Get correct number of items by calling food API', () => {
  // arrange
  const foodList = new FoodList();

  // act
  getAllFoodData().then(() => {
    expect(foodList.getItemsCount()).toBe(3);
  });
});