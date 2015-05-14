console.log("ember - app/routes/vacations.js")
import Ember from 'ember';
export default Ember.Route.extend({
  model: function() {
	 return this.store.find("vacation");
	},
  setupController:function(controller){
    this._super();    
  },
  actions:{
    focusedModel: function(params) {
      var route = this;
      route.transitionTo('/vacations'+ "/" + params);
    }
  }
});
