import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  model() {
    let book = this.modelFor('book.detail');

    return {
      book,
      review: {
        user: '',
        body: '',
        book
      }
    };
  }
});
