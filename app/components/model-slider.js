console.log("ember - app/components/model-slider.js")
import Ember from 'ember';

export default Ember.Component.extend({
  startingPosition: 0,
  endingPosition: 5,
  didInsertElement:function(params){
    console.log(this.get("innerModel"))
    var modelId = this.get('focusedModel')
    $("#slider-button-"+modelId).addClass("slider-selected").siblings().removeClass("slider-selected");
    console.log("wtf")
  },
  modelDidChange: function(){
    var reverseModel = [];
    this.get('innerModel').forEach(function(item){
      reverseModel.push(item);
    });
    this.set('reverseModel',reverseModel.reverse());
    this.set('displayModel',reverseModel.slice(this.get('startingPosition'),this.get('endingPosition')));
  }.observes("innerModel.@each","startingPosition","endingPosition"),
  firstFive:function(){
    return this.get("innerModel").slice(this.get('startingPosition'),this.get('endingPosition'));
  }.property("innerModel.[]","startingPosition","endingPosition"),
  actions: {
    sliderButtonFocus: function(params) {
      this.sendAction('action',params);
      $("#slider-button-"+params).addClass("slider-selected").siblings().removeClass("slider-selected");
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
