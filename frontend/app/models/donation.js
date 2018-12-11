import DS from 'ember-data';

export default DS.Model.extend({
  item: DS.belongsTo('inventory'),
  //item: DS.attr('string'),
  donor: DS.belongsTo('donor'),
//  donor: DS.attr('string'),
  quantity: DS.attr('number'),
  receiveddate: DS.attr('date')

  //Related fields
  //donor: DS.hasMany('donor')
 //item: DS.belongsTo('inventory')
});
