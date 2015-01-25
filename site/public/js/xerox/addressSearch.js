define(function(require) {
	var defineComponent = require('flight/lib/component')
	return defineComponent(addressSearch);

	function addressSearch() {
		this.after('initialize', function() {
			var $bus = this.attr.messageBus;
			
			console.log('Bus is: ', $bus);
			
			var $input = this.$node.find('input');
			var $button = this.$node.find('.search');

			var f = function() {				
				console.log('Input is: ', $input.val());
				$bus.trigger('api:addressSearch', {
					'address' : $input.val(),
				});
			};
			
			$button.on('click', f);
			
			$input.keyup(function(event) {
			    if(event.keyCode == 13) {
			        f();
			    }
			});
		});
	}

	return addressSearch;
});
