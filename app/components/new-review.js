import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },
    saveReview() {
     var params = {
       author: this.get('author'),
       rating: this.get('rating'),
       response: this.get('response'),
       space: this.get('space')
     };
     this.set('addNewReview', false);
     this.sendAction('saveReview', params);
   }
  }
})