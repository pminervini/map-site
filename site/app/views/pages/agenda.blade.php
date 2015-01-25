@extends('master')

@section('html')
<?="class=\"agenda\""?>
@stop

@section('css')
<link rel="stylesheet" href="bower_components/fullcalendar/dist/fullcalendar.css" rel='stylesheet' />
<link rel="stylesheet" href="bower_components/fullcalendar/dist/fullcalendar.print.css" rel='stylesheet' media='print' />
<style>
body {
	margin: 0;
	padding: 0;
	font-family: "Lucida Grande",Helvetica,Arial,Verdana,sans-serif;
	font-size: 14px;
}
#calendar {
	width: 900px;
	margin: 40px auto;
}
</style>
@stop

@section('content')
<div class="container">

	<div id="title">
		<div class="container">
			<div class="section_header">
				<h3>Agenda Culturale</h3>
			</div>
		</div>
	</div>

	<div id='calendar'></div>
</div>
@stop

@section('js')
<!--
<script src="bower_components/moment/min/moment.min.js"></script>
<script src="bower_components/jquery-ui/ui/jquery-ui.js"></script>
<script src="bower_components/fullcalendar/dist/fullcalendar.min.js"></script>
-->
<script data-main="agenda.js" src="bower_components/requirejs/require.js"></script>
@stop
