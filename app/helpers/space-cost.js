import Ember from 'ember';

export function spaceCost(params/*, hash*/) {
  var spaceprice =params[0].get('price');
  if(spaceprice >= 5000){
    return '$$$$$';
  }
  else if(spaceprice >= 1000){
    return '$$$$';
  }
}

export default Ember.Helper.helper(spaceCost);
