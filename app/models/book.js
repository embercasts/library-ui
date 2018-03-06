import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  isbn: DS.attr(),
  publishDate: DS.attr(),

  author: DS.belongsTo('author')
});
