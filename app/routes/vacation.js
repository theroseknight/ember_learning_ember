import Ember from 'ember';

export default Ember.Route.extend({
  model:function(params){
    return this.store.find("vacation",params.vacationId);
  },
  actions: {
    destroy:function(){
      var route = this;
      var controller = this.controllerFor('vacation');
      var deletedVacation = controller.store.getById('vacation',controller.get("model.id"))
      deletedVacation.deleteRecord();
      deletedVacation.save().then(function(){
        route.transitionTo('/');
      })


      //$.ajax({
      //  url:"http://localhost:3000/vacations/" + controller.get("model.id"),
      //  method:"DELETE",
      //  data:{
      //    "vacation[name]":controller.get("model.name"),
      //  },
      //  success:function(data){
      //
      //    //route.transitionTo('/');
      //  },
      //  error:function(){
      //    console.log("fail");
      //  }
      //});
    },
  }
});
