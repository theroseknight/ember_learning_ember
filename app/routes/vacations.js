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
        {link:"vacations.new", label:"New Vacation"},
        {action:"editVacation", label:"Edit"},
        {action:"deleteVacation", label:"Delete"}
      ]
    );
    //Model-Slider Component
    controller.set('model',this.store.find("vacation"));
    var focusedModel = this.store.find("vacation",1)
    this.set('focusedModel',focusedModel)
  },
  updateFocusedModel: function() {
    console.log("im firing")
  }.observes('focusedModel').on('init'),
  actions:{
    focusedModel: function(params) {
      console.log(params)
      var focusedModel = this.store.find("vacation",params)
      this.set('focusedModel',focusedModel)
      console.log(this.get('focusedModel'))
    }
  }
});
