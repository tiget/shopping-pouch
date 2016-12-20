import Ember from 'ember';

export default Ember.Controller.extend({




  bears: ['meme', 'memer'],

  actions: {
    saveItem() {
      var temp = this.get('quantity');
      alert(temp);
    }
  }
});
