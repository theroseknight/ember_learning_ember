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
      if(window.location.href!=="http://localhost:4200/"){
        route.controllerFor('roadtrip').set(
          'model.actionsArray',
          [
            {action:"resetMap", label:"Reset Map"},
            {link:"roadtrips.new", label:"New Roadtrip"},
            {link:"roadtrip.edit", label:"Edit Roadtrip"},
            {action:"destroyResource", label:"Delete Roadtrip"},
            {link:"legs.new",label:"New Leg"}
          ]
        );
      }
      route.transitionTo('/roadtrips'+ "/" + params);
    },
  }
});
