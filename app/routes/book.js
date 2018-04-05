import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    search: {
      refreshModel: true
    }
  },

  model({ search }) {
    if (search) {
      return this.store.query('book', {
        filter: { query: search }
      });
    }

    return this.store.findAll('book');
  }
});
