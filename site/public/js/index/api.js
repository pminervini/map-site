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
			var $ccAlert = $('#cc-alert');

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

					data: JSON.stringify(entry),
					dataType: 'json',
					contentType: "application/json; charset=utf-8",

					//data: entry,
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

			$bus.on('api:entityRegistration', function(ev, data) {
				console.log('Received api:entityRegistration ' + data);

				var entry = {
					'name' : data.name,
					'type' : data.type,
					'startDate': data.startDate,
					'endDate': data.endDate,
					'description': data.description
				};

				$.ajax({
					type : 'POST',
					url : '/api/map/v1/crowd',

					data: JSON.stringify(entry),
					dataType: 'json',
					contentType: "application/json; charset=utf-8",

					//data: entry,
					error: function (xhr, ajaxOptions, thrownError) {
						$ccAlert.removeClass('hidden');
						console.log('$ccAlert: ', $ccAlert);
					}
				}).done(function(data) {
					$bus.trigger('api:entityRegistrationResult', {
						'result' : data
					});
				});
			});
		});
	}

	return api;
});
