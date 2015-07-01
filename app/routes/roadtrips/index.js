import Ember from 'ember';
export default Ember.Route.extend({
  setupController:function(controller,model){
    this._super(controller,model);
    //Action-Bar Component - enables a unique set of buttons on the homepage view
    controller.set(
      'actionsArray',
      [
        {action:"resetMap", label:"Reset Map"},
        {link:"roadtrips.new", label:"New Roadtrip"}
      ]
    );
  },
  actions:{

  }
});
