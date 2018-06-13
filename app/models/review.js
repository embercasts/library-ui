import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  body: DS.attr(),
  createdAt: DS.attr(),
  book: DS.belongsTo('book'),
});
