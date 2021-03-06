import Mixin from '@ember/object/mixin';

export default Mixin.create({
  actions: {
    save: function() {
      var route = this;
      this.currentModel.donation.save().then(function() {
        route.transitionTo('donations');
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
