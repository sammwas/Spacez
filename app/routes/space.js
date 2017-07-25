import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('space');
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
