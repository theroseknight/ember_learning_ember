import DS from 'ember-data';
var attr=DS.attr;

export default DS.Model.extend({
  //Server attributes//
  name: attr(),
  numberOfDays: attr(),
  hoursOfSleep: attr(),
  carYear:attr(),
  carMake:attr(),
  carModel:attr(),
  legs:DS.hasMany("leg",{async:true}),
  /////////////////////

  //Ember frontend only attributes//////////////////////
  distanceInMiles: attr('number', {defaultValue:null}),
  timeInMinutes: attr('number',{defaultValue:null}),
  distanceLoaded:function(){
    if(this.get('distanceInMiles')){
      return true;
    }else{
      return false;
    }
  }.property('distanceInMiles'),
  timeLoaded:function(){
    if(this.get('timeInMinutes')){
      return true;
    }else{
      return false;
    }
  }.property('timeInMinutes'),
  timeInHours:function(){
    return this.get('numberOfDays')*24;
  }.property('numberOfDays'),
  drivingTime: function(){
    var timeInMinutes = this.get('timeInMinutes');
    var danglingMinutes = timeInMinutes%60;
    var totalHours = (timeInMinutes - danglingMinutes) / 60;
    return totalHours + "h " + danglingMinutes + "m";
  }.property('timeInMinutes'),
  sleepingTime: function(){
    return this.get('hoursOfSleep') * this.get('numberOfDays') + "h 0m";
  }.property('hoursOfSleep','numberOfDays'),
  timeForFun:function(){
    var timeInMinutes = this.get('timeInMinutes');
    var danglingMinutes = timeInMinutes%60;
    var totalHours = (timeInMinutes - danglingMinutes) / 60;
    var roadtripHours = this.get('timeInHours');
    var funHours = roadtripHours - totalHours - (this.get('hoursOfSleep')*this.get('numberOfDays')) - 1;
    var funMinutes = 60 - danglingMinutes;
    return funHours + "h " + funMinutes + "m";
  }.property('timeInHours','drivingTime','hoursOfSleep','numberOfDays'),
  drivingPercent:function(){
    var timeInMinutes = this.get('timeInMinutes');
    var totalMinutes = (this.get('numberOfDays') * 24 * 60);
    var drivingPercent = (timeInMinutes / totalMinutes)*100;
    if(drivingPercent > 9.99){
      return drivingPercent.toFixed(2) + "%";
    }else{
      return "0" + drivingPercent.toFixed(2) + "%";
    }
  }.property('timeInMinutes','numberOfDays'),
  sleepingPercent:function(){
    var timeInMinutes = (this.get('hoursOfSleep') * this.get('numberOfDays')) * 60;
    var totalMinutes = (this.get('numberOfDays') * 24 * 60);
    var sleepingPercent = (timeInMinutes / totalMinutes) * 100;
    if(sleepingPercent > 9.99){
      return sleepingPercent.toFixed(2) + "%";
    }else{
      return "0" + sleepingPercent.toFixed(2) + "%";
    }
  }.property('hoursOfSleep','numberOfDays'),
  funPercent:function(){
    var originalTimeInMinutes = this.get('timeInMinutes');
    var danglingMinutes = originalTimeInMinutes%60;
    var totalHours = (originalTimeInMinutes - danglingMinutes) / 60;
    var roadtripHours = this.get('timeInHours');
    var funHours = roadtripHours - totalHours - (this.get('hoursOfSleep')*this.get('numberOfDays')) - 1;
    var timeInMinutes = (funHours * 60) + danglingMinutes;
    var totalMinutes = (this.get('numberOfDays') * 24 * 60);
    var funPercent = (timeInMinutes / totalMinutes) * 100;
    if(funPercent > 9.99){
      return funPercent.toFixed(2) + "%";
    }else{
      return "0" + funPercent.toFixed(2) + "%";
    }
  }.property('timeInHours','drivingTime','hoursOfSleep','numberOfDays')
});
