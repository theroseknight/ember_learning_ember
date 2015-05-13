import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    resetMap: function() {

    },
    share: function() {

    },
    print: function() {

    },
    destroyResource: function() {
      var component = this;
      var controller = component.get('outerController');
      var deletedObject = controller.store.getById(component.get('idType'),component.get("id"));
      deletedObject.deleteRecord();
      deletedObject.save().then(function(){
        controller.transitionToRoute(component.get('transitionDestroy'));
      });
    }
  }
});
