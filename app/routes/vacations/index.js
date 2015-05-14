console.log("ember - app/routes/vacations/index.js")
import Ember from 'ember';
export default Ember.Route.extend({
  model: function() {
	 return this.store.find("vacation");
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
    //Model-Slider Component
    //controller.set('model',this.modelFor('vacations'))
    //controller.set('model',this.store.find("vacation"));
  },
  actions:{

  }
});
