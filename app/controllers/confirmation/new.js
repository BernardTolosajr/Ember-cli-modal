import Modal from 'modal-cli/controllers/modal';

export default Modal.extend({
  actions: {
    confirm: function() {
      this.send('closeModal');
    }
  }
});

