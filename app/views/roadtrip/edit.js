import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    var view=this;
    var controller=view.get("controller");
    $('#updateroadtripModal').modal();
    $('.btn').removeClass("active");
    $("#updateroadtripModal").on("hidden.bs.modal",function(){
      controller.transitionToRoute("roadtrip.index");
    });
  }
});
