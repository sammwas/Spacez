import Ember from 'ember';

export default Ember.Route.extend({
        model(params){
        return this.store.findRecord('space',params.space_id)
    },
    actions:{
        update(model){
            var params={
                name: this.controller.get('name'),
                location: this.controller.get('location'),
                description: this.controller.get('description'),
                image: this.controller.get('image'),
                price: this.controller.get('price'),
            };
            Object.keys(params, model).forEach(function(key){
                if(params[key]!==undefined){
                   model.set(key,params[key]);
                }
            });
           
            model.save();
            this.transitionTo('space');         
        }
    }
});
