import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  can: service('can'),

  actions: {
    deleteAuthor(author) {
      if (this.get('can').can('delete author', author)) {
        author.destroyRecord().then(() => {
          this.transitionToRoute('author.index');
        });
      }
    }
  }
});
