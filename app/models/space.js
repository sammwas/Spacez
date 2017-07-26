import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    location: DS.attr(),
    description: DS.attr(),
    image: DS.attr(),
    price: DS.attr('number'),
    seat: DS.attr('number'),
    reviews:DS.hasMany('review',{async:true}),
    bookings:DS.hasMany('booking',{async:true})
});
