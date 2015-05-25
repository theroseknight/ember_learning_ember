import Ember from 'ember';

export default Ember.Route.extend({
  model:function(params){
    return this.modelFor('vacation');
  },
  setupController:function(controller,model){
    this._super(controller,model);
    //Action-Bar Component
    controller.set(
      'model.actionsArray',
      [
        {action:"resetMap", label:"Reset Map"},
        {link:"vacations.new", label:"New Vacation"},
        {link:"vacation.edit", label:"Edit Vacation"},
        {action:"destroyResource", label:"Delete Vacation"},
        {link:"legs.new",label:"New Leg"}
      ]
    );
    //Model-Slider Component - Needed because the model is only a single instance and we need the whole array for our component.
    controller.set('model.innerModel',this.store.find("vacation"));
    var updatedObject = controller.store.getById('vacation',model.id);
    updatedObject.set('focused',true)
    updatedObject.save()
    //Google_map Component
    
  },
  actions:{
    focusedModel: function(params) {
      var route = this;
      var updatedObject = this.store.getById('vacation',params);
      updatedObject.set('focused',true)
      updatedObject.save().then(function(){
        route.transitionTo('/vacations'+ "/" + params);
      });
    },
    focusedLeg: function(params) {
      var route = this;
      var updatedObject = route.store.getById('leg',params);
      updatedObject.set('focused',true)
      updatedObject.save().then(function(){
        $('#leg-button-'+params).addClass("leg-button-focused")
        $('#leg-button-'+params).siblings().removeClass("leg-button-focused");
      });
    }
  }
});
