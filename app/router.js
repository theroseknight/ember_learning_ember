import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource("roadtrips",{path:'/'}, function(){
    this.route("new");
    this.resource("roadtrip",{path:'roadtrips/:roadtripId'},function(){
      this.route("edit");
      this.resource("legs",function(){
        this.route("new")
      })
    });
  });
});
