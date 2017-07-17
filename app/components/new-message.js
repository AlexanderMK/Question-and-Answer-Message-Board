import Ember from 'ember';

export default Ember.Component.extend({
  addNewMental: false,
  actions: {
    messageFormShow() {
      this.set('addNewMessage', true);
    },

    saveRental1() {
      var params = {
        question: this.get('question'),
        answer: this.get('answer'),
      };
      this.set('addNewMessage', false);
      this.sendAction('saveMessage2', params);
    }
  }
});
