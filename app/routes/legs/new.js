console.log("ember - app/routes/legs/new.js")
import Ember from 'ember';
export default Ember.Route.extend({
  actions: {
    create:function(){
      var route = this;
      var controller = this.controllerFor('legs.new')
      var vacationController = this.controllerFor('vacation')
      console.log(vacationController.get('model.id'))

      var startingCity = controller.get('model.startingCity')
      var startingState = controller.get('model.startingState')
      var endingCity = controller.get('model.endingCity')
      var endingState = controller.get('model.endingState')

      $.ajax({
        url:"http://localhost:3000/legs",
        method:"POST",
        data:{
          "leg[vacation_id]":vacationController.get("model.id"),
          "leg[starting_city]":controller.get("model.startingCity"),
          "leg[ending_city]":controller.get("model.endingCity"),
          "leg[starting_state]":controller.get("model.startingState"),
          "leg[ending_state]":controller.get("model.endingState")
        },
        success:function(data){
          console.log(data)
          $('#newLegModal').modal('hide');
          controller.store.push("leg",controller.store.normalize("leg",data.leg));
          route.transitionTo('/vacations'+ "/" + vacationController.get('model.id'));
        },
        error:function(){
          console.log("fail");
        }
      });

    },
  }
});
