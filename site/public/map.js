require.config({
	'paths' : {
		'flight' : 'bower_components/flight',
		
		'leaflet' : 'bower_components/leaflet-dist/leaflet',
		'leaflet.awesome-markers' : 'bower_components/Leaflet.awesome-markers/dist/leaflet.awesome-markers',
		'leaflet.markercluster' : 'bower_components/leaflet.markercluster/dist/leaflet.markercluster',
	},
	shim: {
        'leaflet' : {
            exports : 'L'
        },
        'leaflet.awesome-markers' : ['leaflet'],
        'leaflet.markercluster' : {
        	deps : ['leaflet', 'leaflet.awesome-markers'],
        	exports : 'L'
        }
	}
});

define(function(require) {
	var API = require('js/xerox/api');
	
	var AddressSearch = require('js/xerox/addressSearch');
	var AddressShow = require('js/xerox/addressShow');
	
	var EntitiesSearch = require('js/xerox/entitiesSearch');
	var EntitiesShow = require('js/xerox/entitiesShow');
	
	var L = require('leaflet');
	var M = require('leaflet.awesome-markers');
	var C = require('leaflet.markercluster');
	
	var map = L.map('map').setView([ 41.125278, 16.866667 ], 8);

	L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
		maxZoom : 18,
		attribution : 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' + '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		id : 'examples.map-i86knfo3'
	}).addTo(map);

	var popup = L.popup();

	function onLocationFound(e) {
		var radius = e.accuracy / 2;
		//L.marker(e.latlng).addTo(map).bindPopup("You are within " + radius + " meters from this point").openPopup();
		//L.circle(e.latlng, radius).addTo(map);
	}

	function onLocationError(e) {
		console.warn(e.message);
	}

	map.on('locationfound', onLocationFound);
	map.on('locationerror', onLocationError);

	map.locate({
		setView : true,
		maxZoom : 12
	});

	var $bus = $(document);
	
	API.attachTo($(document), {
		'messageBus' : $bus
	});
	
	AddressSearch.attachTo('.addressSearch', {
		'messageBus' : $bus,
	});
	
	AddressShow.attachTo($(document), {
		'messageBus' : $bus,
		'map' : map
	});
	
	EntitiesSearch.attachTo($(document), {
		'messageBus' : $bus,
	});
	
	EntitiesShow.attachTo($(document), {
		'messageBus' : $bus,
		'map' : map
	});
});