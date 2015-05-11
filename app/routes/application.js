import Ember from 'ember';
import ENV from '../config/environment';
export default Ember.Route.extend({
  setupController:function(controller){
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
