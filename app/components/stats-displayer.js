import Ember from 'ember';

export default Ember.Component.extend({
  getFuelPrices:function(){
    var component = this;
    var site = 'https://www.fueleconomy.gov/ws/rest/fuelprices';

    var yql = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from xml where url="' + site + '"') + '&format=xml&callback=?';

    // Request that YSQL string, and run a callback function.
    // Pass a defined function to prevent cache-busting.
    $.getJSON(yql, function(data){
      var rawReturnString = data.results[0];
      var regular =rawReturnString.substring(rawReturnString.lastIndexOf("<regular>"),rawReturnString.lastIndexOf("</regular>"))
      var pricePerGallon = parseFloat(regular.slice(9,regular.length))

      var distanceInMiles = component.get('model.distanceInMiles')

      var milesPerGallon = component.get('model.carMpg')

      var gallonsRequired = distanceInMiles / milesPerGallon;

      var gasTotal = (pricePerGallon * gallonsRequired).toFixed(2)

      component.set('gasTotal',gasTotal)
    });

    console.log(this.get('model.distanceInMiles'))




  }.observes('model.distanceInMiles'),
  actions: {

  }
});
