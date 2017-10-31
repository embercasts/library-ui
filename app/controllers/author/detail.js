import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    deleteAuthor(author) {
      console.log(author);

      window.alert('Delete Author');
    }
  }
});
