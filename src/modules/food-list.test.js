import FoodList from './food-list.js';

describe('Get likes', () => {
  const foodList = new FoodList();

  test('add new food', () => {
    const id = '1';
    const title = 'the title';
    const imageUrl = 'image url';

    foodList.addFood(id, title, imageUrl);

    expect(foodList.foods[id].title).toBe(title);
    expect(foodList.foods[id].image).toBe(imageUrl);
  });

  test('add extra food', () => {
    foodList.addFood('2', 'second food', 'second image');
    const numberOfFood = Object.keys(foodList.foods).length;

    expect(numberOfFood).toBe(2);
    expect(foodList.foods['2'].title).toBe('second food');
  });
});

describe('Get likes', () => {
  const foodList = new FoodList();
  foodList.addFood('11', '', '');

  test('no like returns 0', () => {
    expect(foodList.getLikes('11')).toBe(0);
  });

  test('five likes', () => {
    foodList.foods['11'].likes = 5;
    expect(foodList.getLikes('11')).toBe(5);
  });
});
