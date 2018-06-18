import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service('session'),

  actions: {
    login(attrs) {
      this.get('session').authenticate('authenticator:jwt', {
        identification: attrs.email,
        password: attrs.password
      }).catch((e) => {
        this.set('errors', e.errors);
      });
    }
  }
});
