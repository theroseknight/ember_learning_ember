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
    //controller.set('model.innerModel',this.store.find("roadtrip"));
    var updatedObject = controller.store.getById('roadtrip',model.id);
    //updatedObject.set('focused',true);
    updatedObject.save();
    //Google_map Component

  },
  actions:{
    googleMapsActions: function(params) {
      var component=this;
      var distanceInMiles=params.distance;
      var timeInMinutes=params.timeInMinutes;

      component.modelFor('roadtrip').set('distanceInMiles',distanceInMiles);
      component.modelFor('roadtrip').set('timeInMinutes',timeInMinutes);
    },
    testAPI:function(){
      console.log("hi there mom")
    }
  }
});
