import Ember from 'ember';
export default Ember.Route.extend({
  model: function() {
    return this.modelFor("vacation");
  },
  actions: {
    update:function(){
      var route = this;
      var controller = this.controllerFor('vacation.edit');
      $.ajax({
        url:"http://localhost:3000/vacations/" + controller.get('model.id'),
        method:"PUT",
        data:{
          "vacation[name]":controller.get("model.name"),
        },
        success:function(data){
          controller.store.push("vacation",controller.store.normalize("vacation",data.vacation));
          route.transitionTo('/vacations'+ "/" + data.vacation.id);
        },
        error:function(){
          console.log("fail");
        }
      });
    },
  }
});
