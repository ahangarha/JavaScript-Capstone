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

  setLikes(id, likes) {
    this.foods[id].likes = likes;
  }

  getLikes(id) {
    return this.foods[id].likes;
  }

  addComments(id, comments) {
    this.foods[id].comments = comments;
  }
}
