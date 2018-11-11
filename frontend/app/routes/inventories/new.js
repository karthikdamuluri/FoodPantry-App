import Route from '@ember/routing/route';
import SaveModelMixin from 'frontend/mixins/inventories/save-model-mixin';

export default Route.extend(SaveModelMixin, {
  model: function() {
    return this.store.createRecord('inventory');
  }
});
