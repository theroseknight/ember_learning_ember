import Ember from 'ember';

export default Ember.Component.extend({
  focusModel:function(){
    console.log(this.get('focusedModel'))
  }.property('focusedModel'),
  setMarkers:function(){
    console.log("here")
    var component = this;
    var legs = component.get('legs');

    Ember.run.scheduleOnce('afterRender', component, function() {
      this.insertMap();
      var map = component.get('map');

      if(legs.get('firstObject').get('latitude')!==undefined){
        legs.forEach(function(leg){
          var marker = new google.maps.Marker({
            position: new google.maps.LatLng(leg.get('latitude'), leg.get('longitude')),
            map: map
          });
        });
        this.createPolylines();
      }
    });
  }.observes("legs.[]"),
  insertMap:function(){
    //jQuery grabs the div on google-map.hbs template
    var container = this.$('.map-canvas')[0];
    var options = {
      //Default map centers on the middle of the United States when no Polylines exist.  Polylines will recenter the map based on waypoints.
      center: new window.google.maps.LatLng(
        this.get('latitude'),
        this.get('longitude')
      ),
      zoom: 4
    };
    //Create the map in the DOM and save it for use by the markers and polylines functions
    this.set('map', new google.maps.Map(container, options));
    //this.setMarkers();
    //this.createPolylines();
  }.on('didInsertElement'),
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
        travelMode: google.maps.DirectionsTravelMode.DRIVING
      };

      service.route(request,function(result, status) {
        if(status === google.maps.DirectionsStatus.OK){
          directionsDisplay.setDirections(result);
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
