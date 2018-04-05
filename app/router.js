import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('author', { path: '/authors' }, function() {
    this.route('detail', { path: '/:id' });
    this.route('create');
    this.route('edit', { path: '/:id/edit' });
  });
  this.route('book', { path: '/books' }, function() {
    this.route('create');
    this.route('detail', { path: '/:id' });
    this.route('edit', { path: '/:id/edit' });
  });
});

export default Router;
