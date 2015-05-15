console.log("ember - app/models/leg.js")
import DS from 'ember-data';
var attr=DS.attr;

export default DS.Model.extend({
  name: attr(),
  startingCity: attr(),
  startingState: attr(),
  endingCity: attr(),
  endingState: attr(),
  startingLat: attr(),
  startingLng: attr(),
  endingLat: attr(),
  endingLng: attr(),
  markerPosition: attr(),
  homeMarker: attr(),
  vacation:DS.belongsTo("vacation",{async:true}),
  focused: attr()
});
