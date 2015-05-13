import Ember from 'ember';
export default Ember.Route.extend({
  model: function() {
	 return this.store.find("vacation");
	},
  setupController:function(controller){
    this._super();
    //Model-Slider Component
    controller.set('model',this.store.find("vacation"));
  },
  actions:{
    focusedModel: function(params) {
      var route = this;
      route.transitionTo('/vacations'+ "/" + params);
    }
  }
});
