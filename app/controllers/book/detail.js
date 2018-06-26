import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  can: service('can'),

  actions: {
    destroy() {
      if (this.get('can').can('delete book', this.model)) {
        this.model.destroyRecord()
          .then(() => {
            this.transitionToRoute('book');
          });
      }
    }
  }
});
