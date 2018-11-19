import Route from '@ember/routing/route';
import SaveModelMixin from 'frontend/mixins/donations/save-model-mixin';
import RSVP from 'rsvp';

export default Route.extend(SaveModelMixin, {
  model: function() {
    return RSVP.hash({
      donations: this.store.createRecord('donation'),
      inventories: this.store.findAll('inventory')
    });
  }
});
