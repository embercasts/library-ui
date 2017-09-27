import Route from '@ember/routing/route';

export default Route.extend({
  model({ id }) {
    return {
      first: 'J.K.',
      last: 'Rowling',
      id: `authors-${id}`
    };
  }
});
