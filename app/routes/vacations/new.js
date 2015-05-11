import Ember from 'ember';
export default Ember.Route.extend({
  actions: {
    create:function(){
      var route = this;
      var controller = this.controllerFor('vacations.new')
      $.ajax({
        url:"http://localhost:3000/vacations",
        method:"POST",
        data:{
          "vacation[name]":controller.get("name"),
        },
        success:function(data){
          controller.store.push("vacation",controller.store.normalize("vacation",data.vacation));
          route.transitionTo('/vacation'+ "/" + data.vacation.id)
        },
        error:function(){
          console.log("fail");
        }
      });
    },
  }
});
