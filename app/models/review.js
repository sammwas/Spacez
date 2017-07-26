import DS from 'ember-data';

export default DS.Model.extend({
      author: DS.attr(),
      response: DS.attr(),
      rating: DS.attr(),
      space:DS.belongsTo('space',{async: true})
});
