import Ember from 'ember';

export default Ember.Component.extend({
  markerSet:function(){
    var gmarkers= [];
    var component = this;
    var controller = component.get('outerController');
    var markers = this.get('markers')

    if(markers===undefined){

    }else{
      this.insertMap();
      var map = this.get('map');
      //this.clearMarkers();
      markers.forEach(function(marker){
        //console.log(marker)
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(marker.latitude, marker.longitude),
          map: map
        });
        gmarkers.push(marker)
      }, this);
    }
    controller.set('gmarkers',gmarkers)
    return this.get("reverseModel");
  }.property("markers.[]"),
  clearMarkers:function() {
    var gmarkers = this.get('gmarkers')
    var i = 0;
    for(i=0; i<gmarkers.length; i++){
      gmarkers[i].setMap(null);
    }
  },
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
  setMarkers: function() {
    var outerController = this.get('outerController')
    var map = this.get('map');
    var markers = this.get('markers');
    //console.log(this.get('markers'));

    if(markers===undefined){

    }else{
      markers.get('markers').forEach(function(marker){
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


//Create default map on load
//markers: [

  //{ latitude: 25.7753, longitude: -80.2089 }, // Miami
  //{ latitude: 29.6520, longitude: -82.3250}, // Gainesville
  //{ latitude: 35.5800, longitude: -82.5558}, // Asheville
  //{ latitude: 38.9047, longitude: -77.0164}, // Washington DC
  //{ latitude: 40.71356, longitude: -74.00632 }, // New York
  //{ latitude: 36.1667, longitude: -86.7833}, // Nashville
  //{ latitude: 33.7550, longitude: -84.3900},  // Atlanta
  //{ latitude: 29.6520, longitude: -82.3250}, // Gainesville
  //{ latitude: 25.7753, longitude: -80.2089 }, // Miami
  //{ latitude: 29.7604, longitude: -95.3698}, // Houston
  //{ latitude: 39.7392, longitude: -104.9903},// Denver
  //{ latitude: 29.9500, longitude: -90.0667}, // New Orleans
  //{ latitude: 35.1107, longitude: -106.6100}, // Alburquerque
  //{ latitude: 36.1215, longitude: -115.1739}, // Las Vegas
  //{ latitude: 32.7767, longitude: -96.7970}, // Dallas
//],
