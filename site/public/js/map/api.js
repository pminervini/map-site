define(function(require) {
	var defineComponent = require('flight/lib/component')
	return defineComponent(api);

	function api() {
		
		this.defaultAttrs({
			messageBus : null
		});
		
		this.after('initialize', function() {
			var $bus = this.attr.messageBus;

			$bus.on('api:entitiesGet', function(ev, data) {
				console.log('Received api:entitiesGet ' + data);
				
				var parameters = {
					'artisans' : data.artisans,
					'organizations' : data.organizations,
					'museums' : data.museums,
					'events' : data.events
				};
				if (data.startDate != null && data.startDate) {
					parameters['startDate'] = data.startDate;
				}
				if (data.endDate != null && data.endDate) {
					parameters['endDate'] = data.endDate;
				}
				
				$.ajax({
					type : 'GET',
					url : '/api/map/v1/entity/feature',
					data: parameters,
				}).done(function(data) {
					$bus.trigger('api:entitiesResult', {
						'result' : data
					});
				});
			});
		});
	}

	return api;
});