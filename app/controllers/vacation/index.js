import Ember from 'ember';

export default Ember.Controller.extend({
  needs:[],
  actionsArray:
    [
      {action:"resetMap", label:"Reset Map"},
      {link:"vacations.new", label:"New Vacation"},
      {link:"vacation.edit", label:"Edit Vacation"},
      {action:"destroyResource", label:"Delete Vacation"},
      {link:"legs.new",label:"New Leg"}
    ],
  actions:{

  }
});
