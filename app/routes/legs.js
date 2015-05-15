console.log("ember - app/routes/legs.js")
import Ember from 'ember';
export default Ember.Route.extend({
  model: function() {
    console.log("adsfalsdjk")
	 return this.store.find("leg");
	},
  renderTemplate: function() {
    this.render({ outlet: 'legs' });
  },
  actions:{

  }
});
