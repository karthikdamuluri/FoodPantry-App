import DS from 'ember-data';

export default DS.Model.extend({
  item: DS.attr('string'),
  donor: DS.attr('string'),
  quantity: DS.attr('number'),
  receiveddate: DS.attr('date')
});
