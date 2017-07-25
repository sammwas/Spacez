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
      this.transitionTo('space',space);
    }
    }
});
