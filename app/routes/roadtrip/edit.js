import Ember from 'ember';
export default Ember.Route.extend({
  model: function() {
    return this.modelFor("roadtrip");
  },
  actions: {
    update:function(){
      var route = this;
      var controller = this.controllerFor('roadtrip.edit');
      $.ajax({
        url:"http://localhost:3000/roadtrips/" + controller.get('model.id'),
        method:"PUT",
        data:{
          "roadtrip[name]":controller.get("model.name"),
        },
        success:function(data){
          $('#updateroadtripModal').modal('hide');
          controller.store.push("roadtrip",controller.store.normalize("roadtrip",data.roadtrip));
          route.transitionTo('/roadtrips'+ "/" + data.roadtrip.id);
        },
        error:function(){
          console.log("fail");
        }
      });
    },
  }
});
