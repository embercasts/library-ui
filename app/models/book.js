import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  isbn: DS.attr(),
  publishDate: DS.attr(),
  username: DS.attr(),

  author: DS.belongsTo('author'),
  reviews: DS.hasMany('review')
});
