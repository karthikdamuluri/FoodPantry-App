import DS from 'ember-data';

export default DS.Model.extend({
  itemcode: DS.attr('number'),
  itemname: DS.attr('sring'),
  createdate: DS.attr('date')
});
