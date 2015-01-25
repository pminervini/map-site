define(function(require) {
	var defineComponent = require('flight/lib/component')
	return defineComponent(addressShow);

	function addressShow() {
		
		
		this.after('initialize', function() {
			console.log('Add Map Layer: ', this.attr);
			var $bus = this.attr.messageBus;
			var map = this.attr.map;
			console.log('Bus is: ' + $bus);
			$bus.on('api:addressResult', function(ev, data) {
				var $point = data.result[0].point;
				console.log($point);
				//L.geoJson($point).addTo(map);
				map.setView(new L.LatLng($point.coordinates[1], $point.coordinates[0]), 14);
			});
		});
		
		
	}

	return addressShow;
});