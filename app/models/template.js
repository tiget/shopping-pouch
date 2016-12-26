import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  items: DS.attr(),
  rev: DS.attr('string')
});
