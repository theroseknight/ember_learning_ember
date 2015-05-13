console.log("ember - app/views/vacations/new.js")
import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    var view=this;
    $('#newVacationModal').modal();
    $('.btn').removeClass("active");
    $("#newVacationModal").on("hidden.bs.modal",function(){
      view.get("controller").transitionToRoute("vacations");
    });
  }
});
