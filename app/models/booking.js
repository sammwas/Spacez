import DS from 'ember-data';

export default DS.Model.extend({
  reserve: DS.attr(),
  space: DS.belongsTo('space', {async: true})

});
