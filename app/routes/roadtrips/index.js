import Ember from 'ember';
export default Ember.Route.extend({
  setupController:function(controller,model){    
    this._super(controller,model);
    //Action-Bar Component
    controller.set(
      'actionsArray',
      [
        {action:"resetMap", label:"Reset Map"},
        {link:"roadtrips.new", label:"New Roadtrip"}
      ]
    );
    //Model-Slider Component
    console.log(model.objectAt(model.get('length')-1).get('legs'))
    //controller.set('focusModel',model.objectAt(model.get('length')-1));
  },
  actions:{

  }
});
