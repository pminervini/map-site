define(function(require) {
	var defineComponent = require('flight/lib/component')
	return defineComponent(newsletterRegistrationResult);

	function newsletterRegistrationResult() {
		
		this.defaultAttrs({
			messageBus : null
		});
		
		this.after('initialize', function() {
			var attr = this.attr;
			var $bus = attr.messageBus;
		
			//var $nlAlert = $('#nl-alert');
			var $nlAlert = this.$node.find('.nl-alert');
			var $modal = this.$node.find('.modal');
			
			$bus.on('api:newsletterRegistrationResult', function(ev, data) {
				$nlAlert.addClass('hidden');
				$modal.modal('hide');
			});
		});
	}

	return newsletterRegistrationResult;
});