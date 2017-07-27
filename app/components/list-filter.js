import Ember from 'ember';

export default Ember.Component.extend({
  filteredLocation: Ember.computed.filter("spaces",function(space){
    var newLocation=space.get('valueLocation');
    return
  })

});
