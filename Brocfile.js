console.log("ember - Brocfile.js")
/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.
app.import('bower_components/bootstrap/dist/css/bootstrap.css');
app.import('bower_components/components-font-awesome/css/font-awesome.css');
app.import('bower_components/bootstrap/dist/js/bootstrap.js');
app.import('app/styles/roadtrips.css');
app.import('app/styles/select-menu-dropdown-component.css')
app.import('app/styles/action-bar-component.css');
app.import('app/styles/model-slider-component.css');
app.import('app/styles/stats-displayer-component.css');
app.import('app/styles/modals.css');
app.import('app/styles/app.css');
app.import('vendor/custom-utilities.js');
app.import('vendor/vehicle-info.js');
app.import('vendor/gmaps.js');
module.exports = app.toTree();
