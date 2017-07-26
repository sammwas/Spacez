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
      console.log("error1");
      this.sendAction('saveBooking',params);
      console.log("error2");
    }
  }
});
