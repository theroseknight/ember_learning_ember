import Ember from 'ember';

export default Ember.Controller.extend({
  needs:[],
  actionsArray:
    [
      {action:"resetMap", label:"Reset Map"},
      {action:"share", label:"Share"},
      {action:"print", label:"Print"},
      {link:"vacations.new", label:"New Vacation"},
      {link:"vacation.edit", label:"Edit"},
      {action:"destroyResource", label:"Delete"}
    ],
  actions:{

  }
});
