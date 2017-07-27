import Ember from 'ember';

export default Ember.Route.extend({
    model: function(){
    return this.store.query('space', {
       orderBy: 'price',
       equalTo: 2000,

       limitToFirst: 3


    });
  }
});
