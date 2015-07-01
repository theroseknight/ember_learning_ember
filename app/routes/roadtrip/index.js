import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    googleMapsActions: function(action,params) {
      var component=this;
      var distanceInMiles;
      var timeInMinutes;
      if(action=="fullMap"){
        distanceInMiles=params.distance;
        timeInMinutes=params.timeInMinutes;
      }else if(action="newMap"){
        distanceInMiles=null;
        timeInMinutes=null;
      }

      component.modelFor('roadtrip').set('distanceInMiles',distance)
      component.modelFor('roadtrip').set('timeInMinutes',timeInMinutes)
    }
  }
});
