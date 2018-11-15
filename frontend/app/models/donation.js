import DS from 'ember-data';

export default DS.Model.extend({
  item: DS.delongsTo('inventory'),
  donor: DS.belongsTo('donor'),
  quantity: DS.attr('number'),
  receiveddate: DS.attr('date')
});
