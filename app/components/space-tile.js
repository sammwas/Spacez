import Ember from 'ember';

export default Ember.Component.extend({
    actions:{
        delete(space){
            this.sendAction('delete',space);
        }
    }
});
