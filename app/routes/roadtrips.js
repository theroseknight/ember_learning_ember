import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
	 return this.store.find("roadtrip");
	},
  actions:{
    focusedModel: function(params) {
      var route = this;
      $('#slider-button-'+params).addClass('slider-selected')
      $('#slider-button-'+params).siblings().removeClass('slider-selected')
      route.transitionTo('/roadtrips'+ "/" + params);
    },
  }
});
