import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
	 return this.store.find("roadtrip");
	},
  actions:{
    //Controls the Model-Slider which exists only at this level for entire app
    focusedModel: function(params) {
      var route = this;
      //Selected model is highlighted and all other models are unhighlighted on each user click
      $('#slider-button-'+params).addClass('slider-selected');
      $('#slider-button-'+params).siblings().removeClass('slider-selected');
      //DIRT SHIT CODE - hacky solution to wanting a unique action bar on the LEG level but needing my outlet to be where that doesn't make sense.  Learn how to implement a better solution
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
      //Enables model slider to transition among models it contains
      route.transitionTo('roadtrip', params);
    },
  }
});
