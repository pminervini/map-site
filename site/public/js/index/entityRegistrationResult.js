define(function(require) {
  var defineComponent = require('flight/lib/component')
  return defineComponent(entityRegistrationResult);

  function entityRegistrationResult() {

    this.defaultAttrs({
      messageBus : null
    });

    this.after('initialize', function() {
      var attr = this.attr;
      var $bus = attr.messageBus;

      var $ccAlert = this.$node.find('.cc-alert');
      var $modal = this.$node.find('.modal');

      $bus.on('api:entityRegistrationResult', function(ev, data) {
        $ccAlert.addClass('hidden');
        $modal.modal('hide');
      });
    });
  }

  return entityRegistrationResult;
});
