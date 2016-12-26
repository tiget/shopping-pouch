import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addTemplate() {
      var template = this.store.createRecord("template", {
        name: "synths",
        items: [
          {name: "testaroo"},
          {name: "cto"}
        ]
      });

      template.save();

    }
  }
});
