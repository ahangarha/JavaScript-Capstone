function getData() {
  return Promise.resolve({
    meals: [
      {
        strMeal: 'item1',
        strMealThumb: 'image url',
        idMeal: '111',
      },
      {
        strMeal: 'item2',
        strMealThumb: 'image url',
        idMeal: '222',
      },
      {
        strMeal: 'item3',
        strMealThumb: 'image url',
        idMeal: '333',
      },
    ],
  });
}

exports.getData = getData;