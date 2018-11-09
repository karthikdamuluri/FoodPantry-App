
import SaveModelMixin from 'frontend/mixins/volunteers/save-model-mixin';
import Route from '@ember/routing/route';

export default Route.extend(SaveModelMixin, {
  model: function() {
    return this.store.createRecord('volunteer', {
      volnumber:12,
      lname: 'sai',
      fname: 'karthik',
      voldob: new Date('12/12/2000'),
      address: 'abc',
      city: 'omaha',
      state: 'NE',
      zipcode:'125412',
      email: 'abc@gmail.com',
      cellphone:'1245124',
      volnotes: 'best'
    });
  }
});
