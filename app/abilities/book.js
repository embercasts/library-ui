import { Ability } from 'ember-can';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';

export default Ability.extend({
  currentUser: service('current-user'),
  session: service('session'),

  canCreate: alias('session.isAuthenticated'),

  canEdit: computed('currentUser.user.username', 'model.username', function() {
    return this.get('currentUser.user.username') === this.get('model.username');
  }),

  canDelete: alias('canEdit')
});
