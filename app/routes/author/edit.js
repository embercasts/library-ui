import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { inject as service } from '@ember/service';

export default Route.extend(AuthenticatedRouteMixin, {
  can: service('can'),


  model({ id }) {
    return this.store.findRecord('author', id);
  },

  afterModel(model) {
    if (!this.get('can').can('edit author', model)) {
      return this.transitionTo('author.detail', model.id);
    }
  }
});
