console.log("ember - app/routes/legs/new.js")
import Ember from 'ember';
export default Ember.Route.extend({
  model:function(params){
    var route=this;
		return route.modelFor("vacation").get("legs");
	},
  actions: {
    create:function(){
      var route = this;
      var controller = this.controllerFor('legs.new')
      var vacationController = this.controllerFor('vacation')
      var modelLength = this.get('model.length')


      if(vacationController.get('model.legs.length')===0){
        var homeMarker = true
      }else{
        var homeMarker = false
      }

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
          "leg[ending_state]":controller.get("model.endingState"),
          "leg[marker_position]":controller.get('model.length'),
          "leg[home_marker]":homeMarker
        },
        success:function(data){
          $('#newLegModal').modal('hide');
          console.log(data.legs[0])
          console.log(data.legs[0].id)
          console.log(data.legs[0].endingCity)
          console.log(vacationController.get('model.legs.length'))
          if(vacationController.get('model.legs.length')===0){
            console.log("marker true")
            console.log("here we")
            data.legs.forEach(function(item){
              controller.store.push("leg",controller.store.normalize("leg",item));
            });
          }else{
            console.log(data)
            console.log("marker false")
            controller.store.push("leg",controller.store.normalize("leg",data.legs[0]));
            var updatedObject = controller.store.getById('leg',data.legs[1].id);
            console.log(data.legs[1].id)
            //updatedObject.set('focused',true)
            //updatedObject.save().then(function(){
              //route.transitionTo('/vacations'+ "/" + params);
            //});
          }


          route.transitionTo('/vacations'+ "/" + vacationController.get('model.id'));
        },
        error:function(){
          console.log("fail");
        }
      });

    },
  }
});
