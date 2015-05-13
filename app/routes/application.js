console.log("ember - app/routes/application.js")
import Ember from 'ember';
import ENV from '../config/environment';
export default Ember.Route.extend({
  activate:function(){
    console.log("ember - app/routes/application.js activate")
  },
  deactivate:function(){
    console.log("ember - app/routes/application.js deactivate")
  },
  beforeModel:function(){
    console.log("ember - app/routes/application.js beforeModel")
  },
  afterModel:function(){
    console.log("ember - app/routes/application.js afterModel")
  },
  model:function(){
    console.log("ember - app/routes/application.js model")
  },
  redirect:function(){
    console.log("ember - app/routes/application.js redirect")
  },
  renderTemplate:function(){
    console.log("ember - app/routes/application.js renderTemplate")
    this.render('vacations', {
      outlet: 'all'
    });
  },
  resetController:function(){
    console.log("ember - app/routes/application.js resetController")
  },
  serialize:function(){
    console.log("ember - app/routes/application.js serialize")
  },
  setupController:function(controller){
    console.log("ember - app/routes/application.js setupController")
        this._super();
        controller.set("screenWidth",screen.width);
        controller.set("screenHeight",screen.height);
    controller.set("alertMessage","Welcome to the app!");
    controller.set("alertClass","alert-success");
    if(ENV.environment==="production"){
      controller.set("baseUrl","https://CHANGE_ME");
      controller.set("baseWebsocketUrl","wss://CHANGE_ME");
    }else{
      controller.set("baseUrl","http://localhost:3000");
      controller.set("baseWebsocketUrl","ws://localhost:3000");
    }
    },
  actions:{

  }
});
