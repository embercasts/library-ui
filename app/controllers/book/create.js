import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    selectAuthor(author) {
      console.log(author);
    },

    searchAuthor(query) {
      return this.store.query('author', { filter: { query } });
    }
  }
});
