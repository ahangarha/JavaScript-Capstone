export default class FoodList {
  constructor() {
    this.foods = {};
  }

  addFood(id, title, image) {
    this.foods[id] = {
      title,
      image,
    };
  }

  addFoods(allFoods) {
    allFoods.forEach((food) => {
      this.addFood(
        food.idMeal,
        food.strMeal,
        food.strMealThumb,
      );
    });
  }

  setLikes(id, likes) {
    if (Object.keys(this.foods).includes(id)) {
      this.foods[id].likes = likes;
    }
  }

  getLikes(id) {
    return this.foods[id].likes || 0;
  }

  getLikesText(id) {
    const likes = this.getLikes(id);
    if (likes <= 1) {
      return `${likes} like`;
    }
    return `${likes} likes`;
  }

  addComments(id, comments) {
    this.foods[id].comments = comments;
  }

  getCommentsCount(id) {
    return this.foods[id].comments.length;
  }

  getItemsCount() {
    return Object.keys(this.foods).length;
  }
}
