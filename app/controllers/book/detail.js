import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    destroy() {
      this.model.destroyRecord()
        .then(() => {
          this.transitionToRoute('book');
        });
    }
  }
});
