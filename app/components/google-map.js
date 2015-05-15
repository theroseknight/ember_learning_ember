console.log("ember - app/components/google-map.js")
import Ember from 'ember';

export default Ember.Component.extend({
  //Create default map on load
  markers: [

    { latitude: 25.7753, longitude: -80.2089 }, // Miami
    { latitude: 29.6520, longitude: -82.3250}, // Gainesville
    { latitude: 35.5800, longitude: -82.5558}, // Asheville
    { latitude: 38.9047, longitude: -77.0164}, // Washington DC
    { latitude: 40.71356, longitude: -74.00632 }, // New York
    { latitude: 36.1667, longitude: -86.7833}, // Nashville
    { latitude: 33.7550, longitude: -84.3900},  // Atlanta
    { latitude: 29.6520, longitude: -82.3250}, // Gainesville
    { latitude: 25.7753, longitude: -80.2089 }, // Miami
    //{ latitude: 29.7604, longitude: -95.3698}, // Houston
    //{ latitude: 39.7392, longitude: -104.9903},// Denver
    //{ latitude: 29.9500, longitude: -90.0667}, // New Orleans
    //{ latitude: 35.1107, longitude: -106.6100}, // Alburquerque
    //{ latitude: 36.1215, longitude: -115.1739}, // Las Vegas
    //{ latitude: 32.7767, longitude: -96.7970}, // Dallas
  ],
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
    this.setMarkers();
    //this.createPolylines();
  }.on('didInsertElement'),
  setMarkers: function() {
    var outerController = this.get('outerController')
    var map = this.get('map');
    var markers = this.get('legModel');
    this.get('model.legs').forEach(function(arr){
      console.log(arr.id)
      //VICTORY START HERE WHEN YOU GET BACK
      var object = outerController.store.getById('leg',arr.id);
      console.log(object)
    })

    if(markers===undefined){
      console.log('son')
    }else{
      console.log("hello")
      markers.forEach(function(marker){
        console.log(marker)
        //console.log(marker)
        new google.maps.Marker({
          position: new google.maps.LatLng(marker.ending_lat, marker.ending_lng),
          map: map
        });
      }, this);
    }
  },
  actions: {

  }
});
