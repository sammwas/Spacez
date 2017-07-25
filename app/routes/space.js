import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      space:this.store.findAll('space'),
      reviews:this.store.findAll('review')
    });
  },

  actions:{
    saveSpace(params){
      var newSpace = this.store.createRecord('space',params);
      newSpace.save();
      this.transitionTo('space');  
    },
   delete(space){
     space.destroyRecord();
     this.transitionTo('space');
   }, 

  }
});
