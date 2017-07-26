import Ember from 'ember';

export default Ember.Route.extend({
    model(params){
        return this.store.findRecord('space',params.space_id)
    },
    actions:{
      saveReview(params) {
             var newReview = this.store.createRecord('review', params);
             var space = params.space;
             space.get('reviews').addObject(newReview);
             newReview.save().then(function() {
             return space.save();
           });
    },
    saveBooking(params) {
           var newReservation = this.store.createRecord('booking', params);
           var space = params.space;
           space.get('bookings').addObject(newReservation);
           newReservation.save().then(function() {
           return space.save();
         });
  },


    }
});
