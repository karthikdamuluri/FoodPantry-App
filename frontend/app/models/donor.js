import DS from 'ember-data';

export default DS.Model.extend({
  donorname: DS.hasMany('donation'),
  joindate: DS.attr('date'),
  email: DS.attr('string'),
  notes: DS.attr('string')
});
