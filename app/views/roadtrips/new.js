import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    var view=this;
    $('#newroadtripModal').modal();
    $('.btn').removeClass("active");
    $("#newroadtripModal").on("hidden.bs.modal",function(){
      view.get("controller").transitionToRoute("roadtrips");
    });
  }
});
