import Ember from 'ember';

export default Ember.View.extend({
  templateName: 'confirmation/new',
  tagName: 'div',
  classNames: 'modal'.w(),
  didInsertElement: function() {
    this.$().attr('id', 'modal')

    this.$().modal({
      keyboard: false,
      backdrop: 'static'
    });

    this.$().modal('show');
  },

  willDestroyElement: function() {
    this.$().modal('hide');
  }
});
