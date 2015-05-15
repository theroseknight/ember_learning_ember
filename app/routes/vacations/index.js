console.log("ember - app/routes/vacations/index.js")
import Ember from 'ember';
export default Ember.Route.extend({
  model: function() {
	 return this.modelFor("vacations");
	},
  setupController:function(controller,model){
    this._super(controller,model);
    //Action-Bar Component
    controller.set(
      'actionsArray',
      [
        {action:"resetMap", label:"Reset Map"},
        {link:"vacations.new", label:"New Vacation"}
      ]
    );
    console.log("here we go")
    console.log(model.get('length'))
    console.log(model.objectAt(model.get('length')-1))
    controller.set('focusModel',model.objectAt(model.get('length')-1));
  },
  actions:{
    focusedModel: function(params) {
      var route = this;
      route.transitionTo('/vacations'+ "/" + params);
    },
    focusedLeg: function(params) {
      console.log(params)
    }
  }
});
