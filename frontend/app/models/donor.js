import DS from 'ember-data';

export default DS.Model.extend({
  donorname: DS.attr('string'),
  joindate: DS.attr('date', { defaultValue: new Date }),
  email: DS.attr('string'),
  notes: DS.attr('string')
});
