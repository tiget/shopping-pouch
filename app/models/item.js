import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  quantity: DS.attr('string'),
  notes: DS.attr('string'),
  rev: DS.attr('string')
});
