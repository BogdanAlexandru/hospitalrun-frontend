import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        onUserFeedbackOffered: function () {
            this.sendAction('openModal', 'user-feedback');
        }
    }
});
