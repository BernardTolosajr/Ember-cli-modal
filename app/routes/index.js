import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    openConfirmationModal: function() {
      this.send('openModal', 'confirmation.new');
    }
  }
});

