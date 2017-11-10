import Route from '@ember/routing/route';

export default Route.extend({
  // resetController(controller) {
  //   this._super(...arguments);

  //   // controller.set('first', '');
  //   // controller.set('last', '');

  //   controller.reset();
  // },

  model() {
    return {
      first: '',
      last: ''
    };
  }
});
