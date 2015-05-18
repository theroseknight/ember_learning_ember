import Ember from 'ember';

export default Ember.Component.extend({
  startingPosition: 0,
  endingPosition: 5,
  firstFive:function(){
    var component = this;
    var controller = component.get('outerController');
    var reverseModel = [];
    this.get('innerModel').forEach(function(item){
      reverseModel.push(item);
    });
    this.set('reverseModel',reverseModel.reverse());
    return this.get("reverseModel").slice(this.get('startingPosition'),this.get('endingPosition'));
  }.property("innerModel.[]","startingPosition","endingPosition"),
  actions: {
    sliderButtonFocus: function(params) {
      var component = this;
      if(component.get('modelId')===undefined){
        component.sendAction('action',params);
      }else{
        var controller = component.get('outerController');
        var updatedObject = controller.store.getById(component.get('idType'),component.get("modelId"));
        updatedObject.set('focused',false)
        updatedObject.save().then(function(){
          component.sendAction('action',params);
        });
      }

    },
    slideLeft: function() {
      var currentStarting = this.get('startingPosition');
      var currentEnding = this.get('endingPosition');
      var arrayLength = this.get('reverseModel').length;

      if(arrayLength > 5){
        if(currentStarting === 0){
          //Build logic here if you want your bar to wrap around
        }else{
          this.set('startingPosition', currentStarting - 1);
          this.set('endingPosition',currentEnding - 1);
        }
      }
    },
    slideRight: function() {
      var currentStarting = this.get('startingPosition');
      var currentEnding = this.get('endingPosition');
      var arrayLength = this.get('reverseModel').length;

      if(arrayLength > 5){
        if(currentEnding === arrayLength){
          //Build logic here if you want your bar to wrap around
        }else{
          this.set('startingPosition', currentStarting + 1);
          this.set('endingPosition',currentEnding + 1);
        }
      }
    }
  }
});
