import Ember from 'ember';
export default Ember.Route.extend({
  model:function(){
    var route=this;
		return route.modelFor("roadtrip").get("legs");
	},
  actions: {
    create:function(){
      var route = this;
      var controller = route.controller;
      var roadtripController = route.controllerFor('roadtrip');

      //HomeMarker is a flag for the server that indicates whether to create a return trip leg or to update the return trip leg with a new starting city
      var homeMarker = null;
      if(roadtripController.get('model.legs.length')===0){
         homeMarker = true;
      }else{
         homeMarker = false;
      }

      $.ajax({
        url:"http://localhost:3000/legs",
        method:"POST",
        data:{
          "leg[roadtrip_id]":roadtripController.get("model.id"),
          "leg[starting_city]":controller.get("model.startingCity"),
          "leg[ending_city]":controller.get("model.endingCity"),
          "leg[starting_state]":controller.get("model.startingState"),
          "leg[ending_state]":controller.get("model.endingState"),
          "leg[marker_position]":controller.get('model.length'),
          "leg[home_marker]":homeMarker
        },
        success:function(data){
          $('#newLegModal').modal('hide');
          //First creation creates first leg and return trip leg.  Subsequent creations create new leg and update starting city of return trip to ending city of new leg
          data.legs.forEach(function(item){
            controller.store.push("leg",controller.store.normalize("leg",item));
          });
          route.transitionTo('roadtrip',roadtripController.get('model.id'));
        },
        error:function(){
          console.log("fail");
        }
      });
    },
  }
});
