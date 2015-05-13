import Ember from 'ember';
export default Ember.Route.extend({
  renderTemplate: function() {
    this.render({ outlet: 'legs' });
  },
  model: function() {
	 return this.store.find("leg");
	},
  actions:{

  }
});
