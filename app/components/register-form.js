import Component from '@ember/component';

export default Component.extend({
  didReceiveAttrs() {
    this._super(...arguments);

    this.setProperties({
      email: this.get('user.email'),
      username: this.get('user.username'),
      password: this.get('user.password'),
      passwordConfirmation: this.get('user.passwordConfirmation'),
    });
  },

  actions: {
    saveUser(ev) {
      ev.preventDefault();

      this.onsubmit({
        email: this.email,
        username: this.username,
        password: this.password,
        passwordConfirmation: this.passwordConfirmation,
      });
    }
  }
});
