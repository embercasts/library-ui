import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  body: DS.attr(),
  createdAt: DS.attr(),
  book: DS.belongsTo('book'),
});
