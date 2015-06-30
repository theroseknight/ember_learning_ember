import Ember from 'ember';

export default Ember.Route.extend({
  setupController:function(controller,model){
    this._super(controller,model);
    //Action-Bar Component
    controller.set(
      'model.actionsArray',
      [
        {action:"resetMap", label:"Reset Map"},
        {link:"roadtrips.new", label:"New Roadtrip"},
        {link:"roadtrip.edit", label:"Edit Roadtrip"},
        {action:"destroyResource", label:"Delete Roadtrip"},
        {link:"legs.new",label:"New Leg"}
      ]
    );
    //Model-Slider Component - Needed because the model is only a single instance and we need the whole array for our component.
    controller.set('model.innerModel',this.store.find("roadtrip"));
    var updatedObject = controller.store.getById('roadtrip',model.id);
    updatedObject.set('focused',true);
    updatedObject.save();
    //Google_map Component

  },
  actions:{
    focusedModel: function(params) {
      var route = this;
      var updatedObject = this.store.getById('roadtrip',params);
      updatedObject.set('focused',true);
      updatedObject.save().then(function(){
        route.transitionTo('/roadtrips'+ "/" + params);
      });
    },
    focusedLeg: function(params) {
      var route = this;
      var updatedObject = route.store.getById('leg',params);
      updatedObject.set('focused',true);
      updatedObject.save().then(function(){
        $('#leg-button-'+params).addClass("leg-button-focused");
        $('#leg-button-'+params).siblings().removeClass("leg-button-focused");
      });
    },
    googleMapsActions: function(action,params) {
      var component=this;
      if(action=="fullMap"){
        var distance=0;
        var timeInMinutes=0;
        params.forEach(function(legObject){
          var rawDistance = legObject.distance.text
          var stringNumberDistance = rawDistance.slice(0,-3)
          var numberDistance = parseInt(stringNumberDistance)
          distance += numberDistance;

          var rawTime = legObject.duration.value
          var danglingSeconds = rawTime%60
          var roundedToNextMinute = rawTime - danglingSeconds + 60
          var innerTimeInMinutes = roundedToNextMinute / 60
          timeInMinutes += innerTimeInMinutes
        })
      }else if(action="newMap"){
        var distanceInMiles=null;
        var timeInMinutes=null;
      }

      component.modelFor('roadtrip').set('distanceInMiles',distance)
      component.modelFor('roadtrip').set('timeInMinutes',timeInMinutes)
    }
  }
});
