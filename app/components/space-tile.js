import Ember from 'ember';

export default Ember.Component.extend({
    actions:{
        delete(space){
            this.sendAction('delete',space);
        },
        update(space,params){
            this.sendAction('update',space,params);
        }  
    }
});
