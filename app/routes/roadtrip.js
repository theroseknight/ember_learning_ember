import Ember from 'ember';

export default Ember.Route.extend({
  model:function(params){
    return this.store.find("roadtrip",params.roadtripId);
  },
  setupController:function(controller,model){
    this._super(controller,model);
    //Action-Bar Component
    controller.set(
      'model.actionsArray',
        [
          {action:"resetMap", label:"Reset Map"},
          {link:"roadtrips.new", label:"New Roadtrip"},
          {link:"roadtrip.edit", label:"Edit Roadtrip"},
          {action:"destroyResource", label:"Delete Roadtrip"},
          {link:"legs.new",label:"New Leg"}
        ]
    );
  },
  actions: {
    focusedLeg: function(params) {
      var route = this;
      $('#leg-button-'+params).addClass("leg-button-focused");
      $('#leg-button-'+params).siblings().removeClass("leg-button-focused");
    }
  }
});
