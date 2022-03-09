import FoodList from './food-list.js';

test('add new food', () => {
  const foodList = new FoodList();
  const id = '1';
  const title = 'the title';
  const imageUrl = 'image url';

  foodList.addFood(id, title, imageUrl);

  expect(foodList.foods[id].title).toBe(title);
  expect(foodList.foods[id].image).toBe(imageUrl);
});
