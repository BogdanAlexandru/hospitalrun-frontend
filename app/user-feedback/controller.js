import Ember from 'ember';

export default Ember.Controller.extend({
  writtenUserFeedback: '',

  actions: {
    cancel() {
      this.send('closeModal');
    },

    sendFeedback() {
        console.log('Feedback sent! ' + this.get('writtenUserFeedback'));
        this.set('writtenUserFeedback', '');
        this.send('closeModal');
    }
  }
});
