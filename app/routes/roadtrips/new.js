import Ember from 'ember';
export default Ember.Route.extend({
  setupController:function(controller,model){
    var route=this;
    route._super(controller,model);
    //vendor/custom-utilities.js for input data
    model.set('yearsAvailable',yearsAvailable);
    model.set('defaultYear',"-Select a Year-");
    model.set('defaultModel',"-Select a Model-");
    model.set('defaultMake',"-Select a Make-");
  },
  actions: {
    create:function(){
      var route = this;
      var controller = route.controller;
      $.ajax({
        url:"http://localhost:3000/roadtrips",
        method:"POST",
        data:{
          "roadtrip[name]":controller.get("name"),
          "roadtrip[number_of_days]":controller.get("numberOfDays"),
          "roadtrip[hours_of_sleep]":controller.get("hoursOfSleep"),
          "roadtrip[car_year]":controller.get('currentYear'),
          "roadtrip[car_make]":controller.get('currentMake'),
          "roadtrip[car_model]":controller.get('currentModel')
        },
        success:function(data){
          $('#newroadtripModal').modal('hide');
          controller.store.push("roadtrip",controller.store.normalize("roadtrip",data.roadtrip));
          //Ensures that the new model has finshed pushing to the store and the model slider has been updated so that the user sees his new roadtrip highlighted right after creation
          Ember.run.scheduleOnce('afterRender', route, function() {
            $('#slider-button-'+data.roadtrip.id).addClass('slider-selected');
            $('#slider-button-'+data.roadtrip.id).siblings().removeClass('slider-selected');
            route.transitionTo('roadtrip', data.roadtrip.id);
          });
        },
        error:function(){
          console.log("fail");
        }
      });
    },
    currentYearChanged:function(params){
      var route=this;
      if(params!=="Other"){
        //Set the variable on the route for use in the Create action
        route.set('currentYear',params);
        //Set the list of keys that will be displayed to the user as a dropdown menu for the next step
        var makesAvailable = makesInformation[params];
        var arrayOfKeys = Object.keys(makesAvailable);
        route.controller.set('model.makesAvailable',arrayOfKeys);
        //Display the makes that are allowed for the selected year
        $("#car-make-group").removeClass('default-hidden');
        //If the user reselects a new year while other selections have already been made this code will reset things to the new year
        $("#car-model-group").addClass('default-hidden');
        route.controller.set('model.defaultMake',"-Select a Make-");
        route.controller.set('model.defaultModel',"-Select a Model-");
      }else{
        //If the user makes another selection and then selects Other this will reset. Does nothing on initial selection of Other
        $("#car-make-group").addClass('default-hidden');
        $("#car-model-group").addClass('default-hidden');
        route.controller.set('model.defaultMake',"-Select a Make-");
        route.controller.set('model.defaultModel',"-Select a Model-");
      }
    },
    currentMakeChanged:function(params){
      var route=this;
      //Set the variable on the route for use in the Create action
      route.set('currentMake',params);
      //Set the list of keys that will be displayed to the user as a dropdown menu for the next step
      var modelsAvailable = makesInformation[route.get('currentYear')][params];
      route.controller.set('model.modelsAvailable',modelsAvailable);
      //Display the makes that are allowed for the selected year
      $("#car-model-group").removeClass('default-hidden');
      //If the user reselects a new year while other selections have already been made this code will reset things to the new year
      route.controller.set('model.defaultModel',"-Select a Model-");
    },
    currentModelChanged:function(params){
      var route=this;
      //Set the variable on the route for use in the Create action
      route.set('currentModel',params);
    }
  }
});
