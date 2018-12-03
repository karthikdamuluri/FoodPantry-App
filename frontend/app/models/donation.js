import DS from 'ember-data';

export default DS.Model.extend({
  item: DS.attr('string'),
  donor: DS.belongsTo('donor'),
  quantity: DS.attr('number'),
  receiveddate: DS.attr('date')

  //Related fields
  //donor: DS.hasMany('donor')
 //item: DS.belongsTo('inventory')
});
