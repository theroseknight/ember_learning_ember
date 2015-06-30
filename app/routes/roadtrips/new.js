import Ember from 'ember';
export default Ember.Route.extend({
  actions: {
    create:function(){
      var route = this;
      var controller = this.controllerFor('roadtrips.new');
      $.ajax({
        url:"http://localhost:3000/roadtrips",
        method:"POST",
        data:{
          "roadtrip[name]":controller.get("name"),
          "roadtrip[number_of_days]":controller.get("numberOfDays"),
          "roadtrip[hours_of_sleep]":controller.get("hoursOfSleep")
        },
        success:function(data){
          $('#newroadtripModal').modal('hide');
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
