import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    setCurrentItem:function(params){
      var component=this;
      component.set('currentSelection',params)
      component.sendAction("action",params)
    }
  }
});
