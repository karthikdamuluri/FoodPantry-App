import Route from '@ember/routing/route';
import SaveModelMixin from 'frontend/mixins/donations/save-model-mixin';
import RSVP from 'rsvp';

export default Route.extend(SaveModelMixin, {
  model: function() {
    return RSVP.hash({

      inventories: this.store.findAll('inventory'),
      donors: this.store.findAll('donor'),
      donation: this.store.createRecord('donation'),
    });
  }
});
