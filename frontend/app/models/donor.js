import DS from 'ember-data';

export default DS.Model.extend({
  donorname: DS.attr('string'),
  joindate: DS.attr('date', { defaultValue: new Date }),
  email: DS.attr('string'),
  notes: DS.attr('string'),
  donations: DS.hasMany('donation', {async:true})

  //donorname: DS.belongsTo('donation')
});
