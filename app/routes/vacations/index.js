import Ember from 'ember';
export default Ember.Route.extend({
  model: function() {
	 return this.store.find("vacation");
	},
  setupController:function(controller){
    this._super();
    //Action-Bar Component
    controller.set(
      'actionsArray',
      [
        {action:"resetMap", label:"Reset Map"},
        {action:"share", label:"Share"},
        {action:"print", label:"Print"},
        {link:"vacations.new", label:"New Vacation"}
      ]
    );
  },
  actions:{

  }
});
