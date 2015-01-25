require.config({
	'paths' : {
		'flight' : 'bower_components/flight',
		
		'handlebars' : 'bower_components/handlebars/handlebars.min',
		
		'leaflet' : 'bower_components/leaflet-dist/leaflet',
		'leaflet.awesome-markers' : 'bower_components/Leaflet.awesome-markers/dist/leaflet.awesome-markers',
		'leaflet.markercluster' : 'bower_components/leaflet.markercluster/dist/leaflet.markercluster',
		
		'leaflet.geosearch' : 'bower_components/L.GeoSearch/src/js/l.control.geosearch',
		'leaflet.geosearch.provider' : 'bower_components/L.GeoSearch/src/js/l.geosearch.provider.google',
		
		'leaflet.sidebar' : 'bower_components/leaflet-sidebar/src/L.Control.Sidebar',
		
		'typeahead' : 'bower_components/typeahead.js/dist/typeahead.jquery.min',
		'bloodhound' : 'bower_components/typeahead.js/dist/bloodhound.min'
	},
	shim: {
		'leaflet' : {
			exports : 'L'
		},
		'leaflet.awesome-markers' : ['leaflet'],
		'leaflet.markercluster' : {
			deps : ['leaflet', 'leaflet.awesome-markers'],
			exports : 'L'
		},
		'leaflet.geosearch' : {
			deps : ['leaflet'],
			exports : 'L'
		},
		'leaflet.geosearch.provider' : {
			deps : ['leaflet', 'leaflet.geosearch'],
			exports : 'L'
		},
		'leaflet.sidebar' : {
			deps : ['leaflet'],
			exports: 'L'
		}
	}
});

define(function(require) {
	var API = require('js/map/api');
	
	var EntitiesGet = require('js/map/entitiesGet');
	var EntitiesShow = require('js/map/entitiesShow');
	
	var L = require('leaflet');
	var M = require('leaflet.awesome-markers');
	var C = require('leaflet.markercluster');
	
	var G = require('leaflet.geosearch');
	var GP = require('leaflet.geosearch.provider');
	
	var LS = require('leaflet.sidebar');
	
	var H = require('handlebars');
	
	var T = require('typeahead');
	var B = require('bloodhound');
	
	var map = L.map('map').setView([ 41.125278, 16.866667 ], 8);

	// GeoSearch
	new L.Control.GeoSearch({
		provider: new L.GeoSearch.Provider.Google({
			language : 'it',
			region : 'it'
		}),
		position : 'topcenter',
		showMarker : false,
		zoomLevel : 12,
		searchLabel : 'Indirizzo ..'
	}).addTo(map);

/*	
	L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
		maxZoom : 18,
		attribution : 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' + '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		id : 'pminervini.ieol3n3e'
	}).addTo(map);
*/

	L.tileLayer('http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
		maxZoom : 16,
		subdomains: ["otile1", "otile2", "otile3", "otile4"],
		attribution : 'Tiles courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png">. Map data (c) <a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, CC-BY-SA.',
	}).addTo(map);
	
	var popup = L.popup();

	function onLocationFound(e) {
		
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
	
	EntitiesGet.attachTo($(document), {
		'messageBus' : $bus
	});
	
	EntitiesShow.attachTo($(document), {
		'messageBus' : $bus,
		'map' : map
	});
});
