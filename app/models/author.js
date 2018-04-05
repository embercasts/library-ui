import DS from 'ember-data';

export default DS.Model.extend({
  first: DS.attr(),
  last: DS.attr(),

  books: DS.hasMany('book')
});
