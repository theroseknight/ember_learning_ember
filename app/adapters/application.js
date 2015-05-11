import Ember from "ember";
import DS from "ember-data";
import ENV from '../config/environment';
 if (ENV.environment === 'development') {
   var host='http://localhost:3000';
 }else{
   var host='https://CHANGE_ME';
 }
  Ember.$.ajaxSetup({
    xhrFields: {
      withCredentials: true
    }
  });
export default DS.ActiveModelAdapter.extend({
  headers: {
    "X-CSRF-Token": Ember.$('meta[name="csrf-token"]').attr('content')
  },
  host: host,
  //namespace: 'api/printing',
  ajax: function(url, method, hash) {
    hash = hash || {};
    hash.crossDomain = true;
    hash.xhrFields = {withCredentials: true};
    return this._super(url, method, hash);
  }
});
