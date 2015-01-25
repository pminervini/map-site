define(function(require) {
	var defineComponent = require('flight/lib/component')
	return defineComponent(api);

	function api() {
		
		this.defaultAttrs({
			messageBus : null
		});
		
		this.after('initialize', function() {
			var $bus = this.attr.messageBus;

			var $nlAlert = $('#nl-alert');
			
			$bus.on('api:newsletterRegistration', function(ev, data) {
				console.log('Received api:newsletterRegistration ' + data);
				
				var entry = {
					'email' : data.email,
					'name' : data.name,
					'city' : data.city
				};
				
				$.ajax({
					type : 'POST',
					url : '/api/map/v1/newsletter',
					data: entry,
					error: function (xhr, ajaxOptions, thrownError) {
						$nlAlert.removeClass('hidden');
						console.log('$nlAlert: ', $nlAlert);
					}
				}).done(function(data) {
					$bus.trigger('api:newsletterRegistrationResult', {
						'result' : data
					});
				});
			});
		});
	}

	return api;
});