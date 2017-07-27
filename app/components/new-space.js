import Ember from 'ember';

export default Ember.Component.extend({
  addNewSpace: false,
  actions: {
    showSpaceForm() {
      this.set('addNewSpace', true);

    },
    saveSpace() {
      var params = {
        name: this.get('name'),
        location: this.get('location'),
        description: this.get('description'),
        image: this.get('image'),
        price: this.get('price'),
        latitude: this.get('latitude'),
        longitude: this.get('longitude'),
        seat: parseInt(this.get('seat')),
      };
      this.set('addNewSpace', false);
      this.sendAction("saveSpace", params);
    }
  }
});
