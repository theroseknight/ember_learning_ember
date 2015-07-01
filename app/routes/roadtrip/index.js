import Ember from 'ember';

export default Ember.Route.extend({
  actions:{    
    googleMapsActions: function(action,params) {
      var component=this;
      if(action=="fullMap"){
        var distance=0;
        var timeInMinutes=0;
        params.forEach(function(legObject){
          var rawDistance = legObject.distance.text
          var stringNumberDistance = rawDistance.slice(0,-3)
          var numberDistance = parseInt(stringNumberDistance)
          distance += numberDistance;

          var rawTime = legObject.duration.value
          var danglingSeconds = rawTime%60
          var roundedToNextMinute = rawTime - danglingSeconds + 60
          var innerTimeInMinutes = roundedToNextMinute / 60
          timeInMinutes += innerTimeInMinutes
        })
      }else if(action="newMap"){
        var distanceInMiles=null;
        var timeInMinutes=null;
      }

      component.modelFor('roadtrip').set('distanceInMiles',distance)
      component.modelFor('roadtrip').set('timeInMinutes',timeInMinutes)
    }
  }
});
