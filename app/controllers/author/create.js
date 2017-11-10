import Controller from '@ember/controller';

export default Controller.extend({
  reset() {
    this.setProperties({
      first: '',
      last: ''
    });
  },

  actions: {
    changeFirst(value) {
      this.set('first', value);
    }
  }
});
