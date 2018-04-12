import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    saveReview(attrs) {
      let review = this.store.createRecord('review', attrs);

      review.save()
        .then(() => {
          this.transitionToRoute('book.detail', this.model.book.id);
        });
    }
  }
});
