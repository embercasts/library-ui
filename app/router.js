import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('author', { path: '/authors' }, function() {
    this.route('detail', { path: '/:id' });
  });
});

export default Router;
