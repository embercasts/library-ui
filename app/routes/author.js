import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return fetch('http://localhost:3000/authors')
      .then(response => response.json());
  }
});
