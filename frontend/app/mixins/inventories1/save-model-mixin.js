import Mixin from '@ember/object/mixin';

export default Mixin.create({
  actions: {
    save: function() {
      var route = this;
      this.currentModel.save().then(function() {
        route.transitionTo('inventories1');
      }, function() {
        console.log('Failed to save the model');
      });
    },

    willTransition() {
      this._super(...arguments);
      const record = this.controller.get('model');
      record.rollbackAttributes();
    },
  },

});
