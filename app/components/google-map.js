console.log("ember - app/components/google-map.js")
import Ember from 'ember';

export default Ember.Component.extend({
  //Create default map on load
  markers: [
    Ember.Object.create({ latitude: 40.71356, longitude: -74.00632 }), // New York
    Ember.Object.create({ latitude: 25.7753, longitude: -80.2089 }), // Miami
    Ember.Object.create({ latitude: 29.7604, longitude: -95.3698}), // Houston
    Ember.Object.create({ latitude: 39.7392, longitude: -104.9903}),// Denver
    Ember.Object.create({ latitude: 29.9500, longitude: -90.0667}), // New Orleans
    Ember.Object.create({ latitude: 35.1107, longitude: -106.6100}), // Alburquerque
    Ember.Object.create({ latitude: 36.1215, longitude: -115.1739}), // Las Vegas
    Ember.Object.create({ latitude: 32.7767, longitude: -96.7970}), // Dallas
    Ember.Object.create({ latitude: 29.6520, longitude: -82.3250}), // Gainesville
    Ember.Object.create({ latitude: 35.5800, longitude: -82.5558}), // Asheville
    Ember.Object.create({ latitude: 38.9047, longitude: -77.0164}), // Washington DC
    Ember.Object.create({ latitude: 36.1667, longitude: -86.7833}), // Nashville
    Ember.Object.create({ latitude: 33.7550, longitude: -84.3900})  // Atlanta
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
    var map = this.get('map');
    var markers = this.get('markers');
    this.get('legModel').then(
      console.log(this.get('legModel'))
    )

    if(markers===undefined){
      console.log('son')
    }else{
      console.log("hello")
      markers.forEach(function(marker){
        //console.log(marker)
        new google.maps.Marker({
          position: new google.maps.LatLng(marker.latitude, marker.longitude),
          map: map
        });
      }, this);
    }
  },
  actions: {

  }
});
