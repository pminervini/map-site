define(function(require) {
	var defineComponent = require('flight/lib/component')
	return defineComponent(entitiesShow);

	function entitiesShow() {
		
		this.defaultAttrs({
			messageBus : null
		});
		
		var typeMarkersMap = {
			'artisan' : {
				'name' : 'Artigiani',
				'color' : 'darkpurple',
				'icon' : 'certificate'
			}, 'organization' : {
				'name' : 'Organizzazioni',
				'color' : 'cadetblue',
				'icon' : 'cogs'
			}, 'event' : {
				'name' : 'Eventi',
				'color' : 'darkgreen',
				'icon' : 'paper-plane-o'
			},	'museum' : {
				'name' : 'Musei',
				'color' : 'darkred',
				'icon' : 'university' //'certificate'
			}
		};
		
		var featurePopupMap = null;
		
		function onEachFeature(feature, layer) {
			if (feature.properties && feature.properties.name) {
				//console.log("feature.properties is: ", feature.properties);
				var popup = layer.bindPopup("<br><b><big><u>Nome: " + feature.properties.name
					+ "</br></b></big></u><br> <b>Indirizzo:&nbsp;</b>" + feature.properties.address
					+ "</br></b></big></u>" + feature.properties.description
					+ " <br><br>", { maxWidth: 300, minWidth: 250, maxHeight: 200, autoPan: true, closeButton: true, autoPanPadding: [5, 5] });
				console.log('popup: ', popup);
				
				var key = feature.properties.type + ' ' + feature.properties.id;
				
				featurePopupMap[key] = popup;
			}
		}

		function pointToLayer(feature, latlng) {
			var type = feature.properties.type;
			
			// 'red', 'darkred', 'orange', 'green', 'darkgreen', 'blue', 'purple', 'darkpuple', 'cadetblue'
			var color = 'red', icon = 'coffee';
			if (type in typeMarkersMap) {
				color = typeMarkersMap[type].color;
				icon = typeMarkersMap[type].icon;
			}
			
			console.log('icon is: ', icon);
			
			var marker = L.AwesomeMarkers.icon({
				icon: icon,
				markerColor: color,
				prefix: 'fa'
			});
			
			var m = L.marker(latlng, { icon: marker });
			return m;
		}
		
		this.after('initialize', function() {
			console.log('Add Map Layer: ', this.attr);
			var $bus = this.attr.messageBus;
			var map = this.attr.map;
			
			console.log('Bus is: ' + $bus);
			
			var $searchbox = this.$node.find('.searchbox');
			var $sidesearch = this.$node.find('.side-search');
			
			var sidebar = L.control.sidebar('sidebar', {
				closeButton: true,
				position: 'left'
			});
			
			map.addControl(sidebar);

			this.$node.delegate('a[data-sidebar]', 'click', function (event) {
				event.preventDefault();
				sidebar.toggle();
			});
			
			$bus.on('api:entitiesResult', function(ev, data) {
				console.log('Data: ', data);
				
				featurePopupMap = {};

				if (layerGroups != null) {
					for (var type in layerGroups) {
						var layer = layerGroups[type];
						console.log('Removing layer: ', layer);
						map.removeLayer(layer);
					}
				}
				
				var results = data.result;
				console.log('results is ', results);
				
				var typeResults = {};
				for (var i = 0; i < results.length; ++i) {
					var result = results[i], feature = result;
					
					// let's enrich features a bit ..
					feature.name = feature.properties.name;
					feature.address = "";
					if (feature.properties.address) {
						feature.address = feature.properties.address;
					}
					feature.value = feature.name + ' ' + feature.address;
					
					var type = result.properties.type;
					if (!(type in typeResults)) {
						typeResults[type] = [];
					}
					
					// let's show only geolocalized entities 
					if (feature.properties.address) {
						typeResults[type].push(result);
					}
				}
				
				console.log('typeResults is ', typeResults);
				
				var layerGroups = {};
				var clusterGroup = L.markerClusterGroup({
					spiderfyOnMaxZoom: true,
					showCoverageOnHover: false,
					zoomToBoundsOnClick: true,
					//disableClusteringAtZoom: 16
				});
				
				var utilityMap = {};
				var groupedOverlays = [];
				
				for (var type in typeResults) {
					var results = typeResults[type];
					
					var layer = L.geoJson(results, {
						onEachFeature: onEachFeature,
						pointToLayer: pointToLayer
					});
					
					// Create an empty layer instead
					var emptyLayer = L.layerGroup([]);
					
					var legend = '<i class="fa fa-' + typeMarkersMap[type].icon + ' fa-1x"> ' + typeMarkersMap[type].name + '</i>';
					
					layerGroups[legend] = emptyLayer;
					emptyLayer.domainType = type; // Information on the original type (not the shown one) was lost
					
					map.addLayer(emptyLayer);

					// Let's add the real layer to the clusterGroup
					clusterGroup.addLayer(layer);
					utilityMap[type] = layer;
				}
				
				var isCollapsed = false;
				
				// Larger screens get expanded layer control
				if (document.body.clientWidth <= 767) {
					isCollapsed = true;
				}
				
				L.control.layers(null, layerGroups, {
					'position' : 'topright',
					'collapsed' : isCollapsed,
					'autoZIndex' : true
				}).addTo(map);

				// Add the clusterGroup to the map
				map.addLayer(clusterGroup);
				
				map.on("overlayadd", function(e) {
					console.log('e: ', e);
					clusterGroup.addLayer(utilityMap[e.layer.domainType]);
				});

				map.on("overlayremove", function(e) {
					console.log('e: ', e);
					clusterGroup.removeLayer(utilityMap[e.layer.domainType]);
				});
				
				console.log('local: ', typeResults[type]);
				
				var typeBHMap = {};
				var sources = [];
				
				for (type in typeResults) {
					
					// One of the data sources
					var bh = new Bloodhound({
						name: typeMarkersMap[type].name,
						datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
						queryTokenizer: Bloodhound.tokenizers.whitespace,
						local: typeResults[type],
						limit: 10
					});
				
					bh.initialize();
					typeBHMap[type] = bh;
					
					var source = {
						name: typeMarkersMap[type].name,
						displayKey: 'value',
						source: bh.ttAdapter(),
						templates: {
							header: "<h4 class='typeahead-header'>" + typeMarkersMap[type].name + "</h4>",
							suggestion: Handlebars.compile(["{{name}}<br>&nbsp;<small>{{address}}</small>"].join(""))
						}
					};
					
					sources.push(source);
				}
				
				$searchbox.typeahead({
					minLength: 1,
					highlight: true,
					hint: false
				}, sources).on("typeahead:selected", function (obj, feature) {
					if (feature && feature.geometry) {
						var key = feature.properties.type + ' ' + feature.properties.id;
						var coord = feature.geometry.coordinates;
						popup = featurePopupMap[key];          
						if (popup) { 
							map.setView([ coord[1], coord[0] ], 17);
							popup.openPopup();
						}
					}
					$searchbox.val('');
				});

				$sidesearch.typeahead({
					minLength: 1,
					highlight: true,
					hint: false
				}, sources).on("typeahead:selected", function (obj, feature) {
					if (feature && feature.geometry) {
						var key = feature.properties.type + ' ' + feature.properties.id;
						var coord = feature.geometry.coordinates;
						popup = featurePopupMap[key];          
						if (popup) {
							map.setView([ coord[1], coord[0] ], 17);
							console.log("popup: ", popup);
							$("#sidebar-table tbody").empty();
							$("#sidebar-table tbody").append('<tr><td>Nome</td><td>' + feature.name + '</td></tr>');
							$("#sidebar-table tbody").append('<tr><td>Indirizzo</td><td>' + feature.address + '</td></tr>');
							$("#sidebar-table tbody").append('<tr><td>Descrizione</td><td>' + feature.properties.description + '</td></tr>');
						}
					}
					$sidesearch.val('');
				});
				
				
			});
		});
	}

	return entitiesShow;
});
