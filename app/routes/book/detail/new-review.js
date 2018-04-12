import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let book = this.modelFor('book.detail');

    return {
      book,
      review: {
        user: '',
        body: '',
        book
      }
    };
  }
});
