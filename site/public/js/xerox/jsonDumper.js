define(function(require) {
	var defineComponent = require('flight/lib/component')
	return defineComponent(jsonDumper);

	function jsonDumper() {
		this.after('initialize', function() {
			var $bus = this.attr.messageBus;
			var $node = this.$node;
			console.log('Bus is: ', $bus);
			$bus.on('api:addressResult', function(ev, data) {
				console.log(data);
				$node.text(JSON.stringify(data.result));
			});
		});
	}

	return jsonDumper;
});