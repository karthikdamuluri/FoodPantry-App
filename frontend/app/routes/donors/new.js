import Route from '@ember/routing/route';
import SaveModelMixin from 'frontend/mixins/donors/save-model-mixin';

export default Route.extend(SaveModelMixin, {
  model: function() {
    return this.store.createRecord('donor');
  }
});
