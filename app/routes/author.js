import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        first: 'J.K.',
        last: 'Rowling'
      },
      {
        first: 'Tom',
        last: 'Clancy'
      }
    ];
  }
});
