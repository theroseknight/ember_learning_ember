import Ember from 'ember';
export default Ember.Route.extend({
  model: function() {
	 return this.modelFor("roadtrips");
	},
  setupController:function(controller,model){
    this._super(controller,model);
    //Action-Bar Component
    controller.set(
      'actionsArray',
      [
        {action:"resetMap", label:"Reset Map"},
        {link:"roadtrips.new", label:"New Roadtrip"}
      ]
    );
    controller.set('focusModel',model.objectAt(model.get('length')-1));
  },
  actions:{
    focusedModel: function(params) {
      var route = this;
      route.transitionTo('/roadtrips'+ "/" + params);
    }
  }
});
