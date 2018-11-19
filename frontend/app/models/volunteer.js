import DS from 'ember-data';

export default DS.Model.extend({
  volnumber: DS.attr('number'),
  lname: DS.attr('string'),
  fname: DS.attr('string'),
  voldob: DS.attr('date', { defaultValue: new Date }),
  address: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  zipcode: DS.attr('string'),
  email: DS.attr('string'),
  cellphone: DS.attr('string'),
  volnotes: DS.attr('string')
});
