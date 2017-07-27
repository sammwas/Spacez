import Ember from 'ember';

export default Ember.Component.extend({
  addBooking:false,
  actions:{
    toggleBooking(){
      this.set('addBooking',true);
    },
    saveBooking(){
      var params={
         reserve: this.get('reserve'),
         space: this.get('space')
      };
      this.set('addBooking',false);
      this.sendAction('saveBooking',params);
    }
  }
});
