define(function(require) {
	var defineComponent = require('flight/lib/component')
	return defineComponent(eventsShow);

	function eventsShow() {
			
		this.after('initialize', function() {
			var $bus = this.attr.messageBus;
			var $document = $(document);
			
			console.log('Bus is: ' + $bus);
			$bus.on('api:eventsResult', function(ev, data) {
				console.log('Data: ', data);
				
				var events = [];
				for (var i = 0; i < data.result.length; i++) {
					events[i] = {};
					events[i].title = data.result[i].properties.name;
					var start = data.result[i].properties.startDate;
					var end = data.result[i].properties.endDate;
					
					events[i].start = start.split("T")[0];
					events[i].end = end.split("T")[0];
				}
				console.log('events: ', events);
				
				$document.ready(function() {
					$('#calendar').fullCalendar({
						lang: 'it',
						header: {
							left: 'prev,next today',
							center: 'title',
							right: 'month,basicWeek,basicDay'
						},
						defaultDate: '2014-06-12',
						editable: false,
						events: events,
					});
				});
				
/*
				$document.ready(function() {
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
	
			});
		});
	}

	return eventsShow;
});