console.log("ember - app/routes/vacation/index.js")
import Ember from 'ember';

export default Ember.Route.extend({
  model:function(params){
    return this.modelFor('vacation');
  },
  setupController:function(controller,model){
    this._super(controller,model);
    //Action-Bar Component
    controller.set(
      'actionsArray',
      [
        {action:"resetMap", label:"Reset Map"},
        {link:"vacations.new", label:"New Vacation"},
        {link:"vacation.edit", label:"Edit Vacation"},
        {action:"destroyResource", label:"Delete Vacation"},
        {link:"legs.new",label:"New Leg"}
      ]
    );
    //Model-Slider Component - Needed because the model is only a single instance and we need the whole array for our component.
    controller.set('innerModel',this.store.find("vacation"));
    var updatedObject = controller.store.getById('vacation',model.id);
    updatedObject.set('focused',true)
    updatedObject.save()
  },
  actions:{
    focusedModel: function(params) {
      var route = this;
      var updatedObject = this.controllerFor('vacations').store.getById('vacation',params);
      updatedObject.set('focused',true)
      updatedObject.save().then(function(){
        route.transitionTo('/vacations'+ "/" + params);
      });
    },
    focusedLeg: function(params) {
      var route = this;
      console.log(params)
      var updatedObject = route.controllerFor("vacation.index").store.getById('leg',params);
      updatedObject.set('focused',false)
      updatedObject.save().then(function(){
        $('#leg-button-'+params).addClass("leg-button-focused")
        $('#leg-button-'+params).siblings().removeClass("leg-button-focused");
      });
    }
  }
});
