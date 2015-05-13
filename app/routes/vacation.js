console.log("ember - app/routes/vacation.js")
import Ember from 'ember';

export default Ember.Route.extend({
  model:function(params){
    return this.store.find("vacation",params.vacationId);
  },
  actions: {

  }
});
