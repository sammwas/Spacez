import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),
  actions: {
    showMap(space) {
      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(space.get('latitude'), space.get('longitude')),
        zoom: 15
      };
      this.get('map').findMap(container, options);
    }
  }

});
