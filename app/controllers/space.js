import Ember from 'ember';


export default Ember.Controller.extend({

  actions:{
    filterByLocation(param){
      if (param !== '') {
        return this.get('store').query('space', { location: param });
      } else {
        return this.get('store').findAll('space');
      }
 }
  }
});
