import DS from 'ember-data';

export default DS.Model.extend({
  itemcode: DS.attr('number'),
  itemname: DS.attr('string'),
  createdate: DS.attr('date', { defaultValue: new Date }),
  donations: DS.hasMany('donation')

});
