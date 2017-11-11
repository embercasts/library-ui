import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    saveAuthor(formValues) {
      this.model.setProperties(formValues);

      this.model.save()
        .then(() => {
          this.transitionToRoute('author');
        });
    }
  }
});
