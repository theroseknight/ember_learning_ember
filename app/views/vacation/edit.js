console.log("ember - app/views/vacation/edit.js")
import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    var view=this;
    var controller=view.get("controller");
    $('#updateVacationModal').modal();
    $('.btn').removeClass("active");
    $("#updateVacationModal").on("hidden.bs.modal",function(){
      controller.transitionToRoute("vacation.index");
    });
  }
});
