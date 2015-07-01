import Ember from 'ember';
export default Ember.Route.extend({
  actions: {
    create:function(){
      var route = this;
      var controller = route.controller;
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
          //Ensures that the new model has finshed pushing to the store and the model slider has been updated so that the user sees his new roadtrip highlighted right after creation
          Ember.run.scheduleOnce('afterRender', route, function() {
            $('#slider-button-'+data.roadtrip.id).addClass('slider-selected')
            $('#slider-button-'+data.roadtrip.id).siblings().removeClass('slider-selected')
            route.transitionTo('roadtrip', data.roadtrip.id);
          })
        },
        error:function(){
          console.log("fail");
        }
      });
    },
  }
});
