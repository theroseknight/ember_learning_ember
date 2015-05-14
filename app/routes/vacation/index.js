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
    //Model-Slider Component
    //controller.set('model',this.modelFor('vacations'))
    controller.set('innerModel',this.store.find("vacation"));
    controller.set('focusedModel',model.id)
  },
  actions:{

  }
});
