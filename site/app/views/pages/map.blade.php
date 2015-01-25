@extends('master')

@section('html')
<?="class=\"mappa\""?>
@stop

@section('css')
<link rel="stylesheet" href="bower_components/leaflet/dist/leaflet.css" />
<link rel="stylesheet" href="bower_components/Leaflet.awesome-markers/dist/leaflet.awesome-markers.css">
<link rel="stylesheet" href="bower_components/leaflet.markercluster/dist/MarkerCluster.css" />
<link rel="stylesheet" href="bower_components/leaflet.markercluster/dist/MarkerCluster.Default.css" />
<link rel="stylesheet" href="bower_components/L.GeoSearch/src/css/l.geosearch.css" />
<link rel="stylesheet" href="bower_components/leaflet.fullscreen/Control.FullScreen.css" />
<link rel="stylesheet" href="bower_components/chipersoft-kalendae/build/kalendae.css" />
@stop

@section('content')
<div class="container">

	<div id="title">
		<div class="container">
			<div class="section_header">
				<h3>Map</h3>
			</div>
		</div>
	</div>

	<div class="row">
		<div class="col-md-8">
			<div id="map" style="height: 400px"></div>
		</div>

		<div class="col-md-4">
			<div class="container">
				<div class="entitiesSearch">
					<div class="row">
						<div class="checkbox">
							<label for="term"> <input type="checkbox" checked class="artisans"> Artigiani</label> <br />
							<label for="term"> <input type="checkbox" checked class="organizations"> Organizzazioni</label> <br />
							<label for="term"> <input type="checkbox" checked class="museums"> Musei</label> <br />
							<label for="term"> <input type="checkbox" checked class="events"> Eventi</label> <br />
						</div>
						</div>
						<div class="row">
							<div class="col-md-4">
							<label for="term"> Periodo </label> <input type="text" value="2/16/2012" class="interval form-control" id="interval" placeholder=".col-md-4"> <br />
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</div>
@stop

@section('js')
<script data-main="map.js" src="bower_components/requirejs/require.js"></script>
@stop
