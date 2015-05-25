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
  vacation:DS.belongsTo("vacation",{async:true}),
  focused: attr()
});
