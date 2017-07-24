import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('space');
  this.route('about');
  this.route('contact');
  this.route('admin');
  this.route('tile',{path: '/tile/:space_id'});
});

export default Router;
