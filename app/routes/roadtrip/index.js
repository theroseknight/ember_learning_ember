import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    googleMapsActions: function(params) {
      var component=this;
      var distanceInMiles=params.distance;
      var timeInMinutes=params.timeInMinutes;

      component.modelFor('roadtrip').set('distanceInMiles',distance);
      component.modelFor('roadtrip').set('timeInMinutes',timeInMinutes);
    }
  }
});
