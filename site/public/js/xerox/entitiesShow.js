define(function(require) {
	var defineComponent = require('flight/lib/component')
	return defineComponent(entitiesShow);

	function entitiesShow() {
		
		var layer = null;
		
		function onEachFeature(feature, layer) {
		    if (feature.properties && feature.properties.name) {
		    	console.log("feature.properties is: ", feature.properties);
		    	layer.bindPopup("<br><b><big><u>Nome: " + feature.properties.name
		    			+ "</br></b></big></u><br> <b>Indirizzo:&nbsp;</b>" + feature.properties.address
		    			+ "</br></b></big></u>" + feature.properties.description
		                + " <br><br>");
		    }
		}
		
	
		function pointToLayer(feature, latlng) {
			var redMarker = L.AwesomeMarkers.icon({
				icon: 'coffee',
				markerColor: 'red'
			});
			var greenMarker = L.AwesomeMarkers.icon({
				icon: 'coffee',
				markerColor: 'green'
			});
			var marker = redMarker;
			var type = feature.properties.type;
			if (type == "event") {
				marker = greenMarker;
			}
			console.log("feature type (for icon): " + feature.properties.type);
			return L.marker(latlng, { icon: marker });
		}
		
		this.after('initialize', function() {
			console.log('Add Map Layer: ', this.attr);
			var $bus = this.attr.messageBus;
			var map = this.attr.map;
			console.log('Bus is: ' + $bus);
			$bus.on('api:entitiesResult', function(ev, data) {
				console.log('Data: ', data);

				if (layer != null) {
					console.log('Removing layer: ', layer);
					map.removeLayer(layer);
				}
				
				var l = L.geoJson(data.result, {
					onEachFeature: onEachFeature,
					pointToLayer: pointToLayer
				});
				
				layer = L.markerClusterGroup();
				layer.addLayer(l);
				
				layer.addTo(map);
			});
		});
	}

	return entitiesShow;
});
