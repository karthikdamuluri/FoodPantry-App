
import SaveModelMixin from 'frontend/mixins/volunteers/save-model-mixin';
import Route from '@ember/routing/route';

export default Route.extend(SaveModelMixin, {
  model: function() {
    return this.store.createRecord('volunteer');
  }
});
