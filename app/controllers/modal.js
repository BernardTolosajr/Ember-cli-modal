import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    cancel: function() {
      console.log('cancel');
      if (this.get('content')) {
        this.get('content').rollback();
      }

      this.send('closeModal');
    }
  }
});
