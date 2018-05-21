import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service('session'),

  init() {
    this._super(...arguments);

    this.get('session').on('invalidationSucceeded', () => {
      window.location.replace('/login');
    });
  }
});
