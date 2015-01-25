define(function(require) {
	var defineComponent = require('flight/lib/component')
	return defineComponent(entitiesSearch);

	function entitiesSearch() {
		this.after('initialize', function() {
			var $bus = this.attr.messageBus;

			var $artisans = this.$node.find('.artisans');
			var $organizations = this.$node.find('.organizations');
			var $museums = this.$node.find('.museums');
			var $events = this.$node.find('.events');

			var $startDate = this.$node.find('.startDate');
			var $endDate = this.$node.find('.endDate');
			
			console.log('Artisans is: ', $artisans);
			console.log('startDate is: ', $startDate);
			
			var f = function() {
				console.log('Triggering an api:entitiesSearch ..');
				
				console.log('startDate is: ', $startDate);
				
				$bus.trigger('api:entitiesSearch', {
					'artisans' : ($artisans[0] === undefined ? true : $artisans[0].checked),
					'organizations' : ($organizations[0] === undefined ? true : $organizations[0].checked),
					'museums' : ($museums[0] === undefined ? true : $museums[0].checked),
					'events' : ($events[0] === undefined ? true : $events[0].checked),
					
					'startDate' : ($startDate[0] === undefined ? null : $startDate[0].value),
					'endDate' : ($endDate[0] === undefined ? null : $endDate[0].value)
				});
			}
			
			f();
			
			$artisans.on('click', f);
			$organizations.on('click', f);
			$museums.on('click', f);
			$events.on('click', f);
			
			//$startDate.on('click', f);
			//$endDate.on('click', f);
			
			$startDate.keyup(function(event) {
			    if(event.keyCode == 13) {
			        f();
			    }
			});
			
			$endDate.keyup(function(event) {
			    if(event.keyCode == 13) {
			        f();
			    }
			});
		});
	}

	return entitiesSearch;
});