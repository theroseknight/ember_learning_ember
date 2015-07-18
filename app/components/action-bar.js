import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    resetMap:function(){
      window.location.reload(true);
    },
    share: function() {

    },
    print: function() {

    },
    destroyResource: function() {
      var component = this;
      var controller = component.get('outerController');
      var deletedObject = controller.store.getById(component.get('idType'),component.get("id"));
      //Schedule the deletion for after the transition otherwise the route will be destroyed and you cant transition off of it
      Ember.run.scheduleOnce('afterRender', component, function() {
        deletedObject.deleteRecord();
        deletedObject.save()
      });
      component.get('innerRoute').transitionTo('roadtrips')
    }
  }
});
