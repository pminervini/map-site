define(function(require) {
	var defineComponent = require('flight/lib/component')
	return defineComponent(entitiesGet);

	function entitiesGet() {
		
		this.defaultAttrs({
			messageBus : null,
			
			artisansDefault : true,
			organizationsDefault : true,
			museumsDefault : true,
			eventsDefault : true
		});
		
		this.after('initialize', function() {
			var attr = this.attr;
			
			var $bus = attr.messageBus;
			var kal = attr.kal;
			
			
			console.log("OK ", attr.museumsDefault);
			
			var $artisans = this.$node.find('.artisans');
			var $organizations = this.$node.find('.organizations');
			var $museums = this.$node.find('.museums');
			var $events = this.$node.find('.events');
			
			var f = function() {
				console.log('Triggering an api:entitiesGet ..');

				var parameters = {
					'artisans' : ($artisans.length > 0 ? $artisans[0].checked : attr.artisansDefault),
					'organizations' : ($organizations.length > 0 ? $organizations[0].checked : attr.organizationsDefault),
					'museums' : ($museums.length > 0 ? $museums[0].checked : attr.museumsDefault),
					'events' : ($events.length > 0 ? $events[0].checked : attr.eventsDefault)
				};
				console.log("OK ", parameters);
				$bus.trigger('api:entitiesGet', parameters);
			}
			
			f();
			
			$artisans.on('click', f);
			$organizations.on('click', f);
			$museums.on('click', f);
			$events.on('click', f);
		});
	}

	return entitiesGet;
});