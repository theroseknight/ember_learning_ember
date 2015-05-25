import Ember from 'ember';
export default Ember.Route.extend({
  model:function(){
    var route=this;
		return route.modelFor("roadtrip").get("legs");
	},
  actions: {
    create:function(){
      var route = this;
      var controller = this.controllerFor('legs.new');
      var roadtripController = this.controllerFor('roadtrip');

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
          if(roadtripController.get('model.legs.length')===0){
            data.legs.forEach(function(item){
              controller.store.push("leg",controller.store.normalize("leg",item));
            });
            route.transitionTo('/roadtrips'+ "/" + roadtripController.get('model.id'));
          }else{
            controller.store.push("leg",controller.store.normalize("leg",data.legs[0]));
            var updatedObject = controller.store.getById('leg',data.legs[1].id);
            console.log(data.legs[1].id);
            //updatedObject.set('focused',true)
            //updatedObject.save().then(function(){
              route.transitionTo('/roadtrips'+ "/" + roadtripController.get('model.id'));
            //});
          }


        },
        error:function(){
          console.log("fail");
        }
      });

    },
  }
});
