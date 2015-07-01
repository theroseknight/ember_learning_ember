import Ember from 'ember';
export default Ember.Route.extend({
  model: function() {
    return this.modelFor("roadtrip");
  },
  actions: {
    update:function(){
      var route = this;
      var controller = route.controller;
      $.ajax({
        url:"http://localhost:3000/roadtrips/" + controller.get('model.id'),
        method:"PUT",
        data:{
          "roadtrip[name]":controller.get("model.name"),
          "roadtrip[number_of_days]":controller.get("model.numberOfDays"),
          "roadtrip[hours_of_sleep]":controller.get("model.hoursOfSleep")
        },
        success:function(data){
          $('#updateroadtripModal').modal('hide');
          controller.store.push("roadtrip",controller.store.normalize("roadtrip",data.roadtrip));
          route.transitionTo('roadtrip',data.roadtrip.id);
        },
        error:function(){
          console.log("fail");
        }
      });
    },
  }
});
