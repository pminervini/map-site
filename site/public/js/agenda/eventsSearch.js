define(function(require) {
	var defineComponent = require('flight/lib/component')
	return defineComponent(eventsSearch);

	function eventsSearch() {
		
		this.after('initialize', function() {
			var $bus = this.attr.messageBus;
			var f = function() {
				console.log('Sending api:eventsSearch ..');
				$bus.trigger('api:eventsSearch', {
					'events' : true,
				});
			}
			
			f();
		});
	}

	return eventsSearch;
});