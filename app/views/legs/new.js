import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    var view=this;
    $('#newLegModal').modal();
    $('.btn').removeClass("active");
    $("#newLegModal").on("hidden.bs.modal",function(){
      view.get("controller").transitionToRoute("roadtrips");
    });
  }
});
