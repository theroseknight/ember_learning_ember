import Ember from 'ember';

export default Ember.Component.extend({
  createMap:function(){
    var component = this;
    var legs = component.get('legs');

    //Create a blank map if creating a new roadtrip with no legs
    if(legs.get('length')!==0){
      //Wait to create the map until all necessary information has been loaded
      if(legs.get('firstObject').get('latitude')!==undefined){
        Ember.run.scheduleOnce('afterRender', component, function() {
          var container = this.$('.map-canvas')[0];
          var options = {
            //Default map centers on the middle of the United States when no Polylines exist.  Polylines will recenter the map based on waypoints.
            center: new window.google.maps.LatLng(
              this.get('latitude'),
              this.get('longitude')
            ),
            zoom: 4
          };

          var map = new google.maps.Map(container, options)

          component.set('map', map);
          component.createMarkers();
          component.createPolylines();
        });
      }
    }else{
      Ember.run.scheduleOnce('afterRender', component, function() {
        var container = this.$('.map-canvas')[0];
        var options = {
          //Default map centers on the middle of the United States when no Polylines exist.  Polylines will recenter the map based on waypoints.
          center: new window.google.maps.LatLng(
            this.get('latitude'),
            this.get('longitude')
          ),
          zoom: 4
        };

        var map = new google.maps.Map(container, options)

        component.set('map', map);
        component.sendAction('action','newMap');
      });
    }
  }.observes("legs.[]"),
  createMarkers:function(){
    var component = this;
    var legs = component.get('legs');
    var map = component.get('map')
    legs.forEach(function(leg){
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(leg.get('latitude'), leg.get('longitude')),
        map: map
      });
    });
  },
  createPolylines:function(){
    var component = this;
    var map = component.get('map');
    var pathCoordinates = [];
    var legs = component.get('legs');

    legs.forEach(function(leg){
      var coordinate = new google.maps.LatLng(leg.get('latitude'),leg.get('longitude'));
      pathCoordinates.push(coordinate);
    });

    var finalPath = new google.maps.Polyline({
      path: pathCoordinates,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });

    if(pathCoordinates.length !== 0){
      var service = new google.maps.DirectionsService();

      var directionsDisplay = new google.maps.DirectionsRenderer();

      directionsDisplay.setMap(map);

      var waypts = [];
      var j=0;
      for(j=1;j<pathCoordinates.length-1;j++){
        waypts.push({location: pathCoordinates[j],stopover: true});
      }

      var request = {
        origin: pathCoordinates[0],
        destination: pathCoordinates[pathCoordinates.length-1],
        waypoints: waypts,
        travelMode: google.maps.DirectionsTravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.IMPERIAL
      };

      service.route(request,function(result, status) {
        if(status === google.maps.DirectionsStatus.OK){
          directionsDisplay.setDirections(result);

          var params = result.routes[0].legs;

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

          component.sendAction('action','fullMap',{distance:distance,timeInMinutes:timeInMinutes});
        }else{
          alert("Directions request failed:" +status);
        }
      });
    }else{
      console.log("No Legs Yet");
    }
  },
  actions: {

  }
});
