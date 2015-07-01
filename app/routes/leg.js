import Ember from 'ember';

export default Ember.Route.extend({
  model:function(params){
    return this.store.find("leg",params.legId);
  },
  setupController:function(controller,model){
    var route=this;
    route._super(controller,model);
    //Action-Bar Component - DIRT SHIT CODE Hacky solution to wanting unique action bar but not understanding how to have two outlets that render sepearate chunks of code from a nested resource.
    route.controllerFor('roadtrip').set(
      'model.actionsArray',
      [
        {action:"resetMap", label:"Reset Map"},
        {link:"leg.edit", label:"Edit Leg"},
        {action:"destroyResource", label:"Delete Leg"}
      ]
    );
  },
  actions: {

  }
});
