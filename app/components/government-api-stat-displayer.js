import Ember from 'ember';

export default Ember.Component.extend({
  testFunction:function(){
    console.log('hi mom')
    $.ajax({
      url:"https://www.fueleconomy.gov/ws/rest/fuelprices",
      method:"GET",
      data:{

      },
      success:function(data){
        console.log(data)
      },
      error:function(){
        console.log("fail");
      }
    });
  }.on('init'),
  actions: {

  }
});
