import Ember from 'ember';

export default Ember.Component.extend({
  startingPosition: 0,
  endingPosition: 5,
  firstFive:function(){
    var component = this;
    var reverseModel = [];
    component.get('innerModel').forEach(function(item){
      reverseModel.push(item);
    });
    component.set('reverseModel',reverseModel.reverse());
    return component.get("reverseModel").slice(component.get('startingPosition'),component.get('endingPosition'));
  }.property("innerModel.[]","startingPosition","endingPosition"),
  actions: {
    sliderButtonFocus: function(params) {
      var component = this;
      component.sendAction('action',params);
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
