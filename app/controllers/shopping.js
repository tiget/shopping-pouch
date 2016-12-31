import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveItem() {
      var item = this.store.createRecord("item", {
          name: this.get('name'),
          quantity: this.get('quantity'),
          notes: this.get('notes')
      });

      item.save();
    },

    deleteItem(item) {
      item.destroyRecord();
    }
  }
});
