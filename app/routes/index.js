import Ember from 'ember';

export default Ember.Route.extend({
    model(){
    return this.store.query('space', {
       orderBy: 'price',
       equalTo: 2000,
       
    });
  },
});
