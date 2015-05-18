import Ember from 'ember';
export default Ember.Route.extend({
  model: function() {
    console.log("adsfalsdjk")
	 return this.store.find("leg");
	},
  actions:{

  }
});
