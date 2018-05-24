import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service('session'),
  currentUser: service('current-user'),

  beforeModel() {
    this._super(...arguments);

    this.loadUser();
  },

  init() {
    this._super(...arguments);

    this.get('session').on('invalidationSucceeded', () => {
      window.location.replace('/login');
    });

    this.get('session').on('authenticationSucceeded', () => {
      this.loadUser();
    });
  },

  loadUser() {
    if (this.get('session.isAuthenticated')) {
      this.get('currentUser').load();
    }
  }
});
