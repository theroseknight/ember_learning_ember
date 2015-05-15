console.log("ember - app/models/vacation.js")
import DS from 'ember-data';
var attr=DS.attr;

export default DS.Model.extend({
  name: attr(),
  legs:DS.hasMany("leg",{async:true}),
  focused: attr()
});
