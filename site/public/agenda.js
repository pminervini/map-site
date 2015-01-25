require.config({
	'paths' : {
		'flight' : 'bower_components/flight',
		
		'jquery' : 'bower_components/jquery/dist/jquery.min',
		
		'jquery-ui' : 'bower_components/jquery-ui/ui/jquery-ui',
		'moment' : 'bower_components/moment/min/moment.min',
		
		'fullcalendar' : 'bower_components/fullcalendar/dist/fullcalendar.min',
		'fullcalendar.it' : 'bower_components/fullcalendar/dist/lang/it'
	},
	shim: {
		'jquery': { deps: [], exports: 'jquery' },
		
		'jquery-ui' : { deps: [ 'jquery' ], exports : 'jquery-ui' },
		'moment' : { deps: [ 'jquery' ], exports : 'moment' },
		'fullcalendar' : { deps : [ 'jquery', 'moment' ], exports : 'fullcalendar' },
		'fullcalendar.it' : { deps : [ 'jquery', 'moment', 'fullcalendar' ], exports : 'fullcalendar' }
	}
});

define(function(require) {
	require('moment');
	require('jquery-ui');
	var FullCalendar = require('fullcalendar');
	require('fullcalendar.it');
	
	var API = require('js/agenda/api');
	var EventsSearch = require('js/agenda/eventsSearch');
	var EventsShow = require('js/agenda/eventsShow');
	
/*
	$(document).ready(function() {
		$('#calendar').fullCalendar({
			lang: 'it',
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,basicWeek,basicDay'
			},
			defaultDate: '2014-06-12',
			editable: true,
			events: [
				{
					title: 'All Day Event',
					start: '2014-06-01'
				},
				{
					title: 'Long Event',
					start: '2014-06-07',
					end: '2014-06-10'
				}
			]
		});
	});
*/
	
	var $bus = $(document);
	
	API.attachTo($(document), {
		'messageBus' : $bus
	});	
	
	EventsSearch.attachTo($(document), {
		'messageBus' : $bus,
	});
	
	EventsShow.attachTo($(document), {
		'messageBus' : $bus,
	});
});