import DS from 'ember-data';
var attr=DS.attr;

export default DS.Model.extend({
  name: attr(),
  startingCity: attr(),
  startingState: attr(),
  endingCity: attr(),
  endingState: attr(),
  latitude: attr(),
  longitude: attr(),
  markerPosition: attr(),
  homeMarker: attr(),
  roadtrip:DS.belongsTo("roadtrip",{async:true}),
  focused: attr()
});
