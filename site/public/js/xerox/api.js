define(function(require) {
	var defineComponent = require('flight/lib/component')
	return defineComponent(api);

	function api() {
		
		this.defaultAttrs({
			messageBus : null
		});
		
		this.after('initialize', function() {
			var $bus = this.attr.messageBus;

			$bus.on('api:addressSearch', function(ev, data) {
				console.log('Received api:addressSearch ' + data);
				$.ajax({
					type : 'GET',
					url : '/api/map/v1/geoLocation/google',
					data: { 'address' : data.address },
					beforeSend : function(xhr) {
						xhr.setRequestHeader("Authorization", "Basic " + btoa("admin" + ":" + "password"));
					}
				}).done(function(data) {
					$bus.trigger('api:addressResult', {
						'result' : data
					});
				});
			});
			
			$bus.on('api:entitiesSearch', function(ev, data) {
				console.log('Received api:entitiesSearch ' + data);
				
				var map = {
					'artisans' : data.artisans,
					'organizations' : data.organizations,
					'museums' : data.museums,
					'events' : data.events
				};
				if (data.startDate != null && data.startDate) {
					map['startDate'] = data.startDate;
				}
				if (data.endDate != null && data.endDate) {
					map['endDate'] = data.endDate;
				}
				
				$.ajax({
					type : 'GET',
					url : '/api/map/v1/entity/feature',
					data: map,
					beforeSend : function(xhr) {
						xhr.setRequestHeader("Authorization", "Basic " + btoa("admin" + ":" + "password"));
					}
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