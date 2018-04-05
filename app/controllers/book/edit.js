import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    saveBook(attrs) {
      this.model.setProperties(attrs);

      this.model.save().then(() => {
        this.transitionToRoute('book.detail', this.model.id);
      });
    }
  }
});
