import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource("vacations",{path:'/'}, function(){
    this.route("new");
    this.resource("vacation",{path:'vacations/:vacationId'},function(){
      this.route("edit");

    })
  });
});
