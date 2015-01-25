<!DOCTYPE html>
<html>
<head>
	<title>m|app</title>

	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
	<!-- Optional theme -->
	<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap-theme.min.css">
	<link rel="stylesheet" href="bower_components/font-awesome/css/font-awesome.min.css">

	<link rel="stylesheet" href="bower_components/leaflet/dist/leaflet.css" />
	<link rel="stylesheet" href="bower_components/Leaflet.awesome-markers/dist/leaflet.awesome-markers.css">
	<link rel="stylesheet" href="bower_components/leaflet.markercluster/dist/MarkerCluster.css" />
	<link rel="stylesheet" href="bower_components/leaflet.markercluster/dist/MarkerCluster.Default.css" />

	<link rel="stylesheet" href="bower_components/L.GeoSearch/src/css/l.geosearch.css" />
	
	<link rel="stylesheet" href="bower_components/leaflet-sidebar/src/L.Control.Sidebar.css" />
	
	<link href="css/style.css" rel="stylesheet">

	<style>
		body {
			padding: 0;
			margin: 0;
			padding-top: 50px;
		}
		html, body, #map {
			height: 100%;
			width: 100%;
		}
		.navbar {
			margin-bottom: 0;
		}
		
	</style>
</head>
<body>
	
	<!--
	include('includes.header', array('type'=>'static'))
	-->

	<div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
				<span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="index"><img style="max-width:100px; margin-top: -7px;" src="img/mapp_white.svg" alt="mapp"></a>
		</div>
		
		<div class="navbar-collapse collapse">
			<form class="navbar-form navbar-right" role="search">
				<div class="form-group has-feedback navbar-right">
					<input id="searchbox" type="text" placeholder="Cerca entità" class="form-control searchbox" />
					<span id="searchicon" class="fa fa-search form-control-feedback"></span>
				</div>
			</form>
		
			<ul class="nav navbar-nav">
				<li>
					<a href="#" data-toggle="collapse" data-target=".navbar-collapse.in" data-sidebar>
						<i class="fa fa-list" style="color: white"></i>Ricerca</a>
				</li>
			</ul>
		</div>
		<!--/.navbar-collapse -->
	</div>
	
	<div id="sidebar" class="sidebar">
		<div class="row">
			<div class="col-md-12">
				<h4>Ricerca</h4>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12 col-xs-12 col-md-12 form-group">
				<input id="side-search" type="text" class="form-control side-search" placeholder="Cerca entità (per nome o indirizzo)" />
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<table class="table table-condensed table-striped" id="sidebar-table">
					<thead>
						<tr>
							<th>Attributo</th>
							<th>Descrizione</th>
						<tr>
					</thead>
					<tbody class="list"></tbody>
				</table>
			</div>
		</div>
	</div>
	<div id="map"></div>

	<script src="bower_components/es5-shim/es5-shim.min.js"></script>
	<script src="bower_components/es5-shim/es5-sham.min.js"></script>
	
	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script src="bower_components/jquery/dist/jquery.min.js"></script>
	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
	
	<script data-main="map.mobile.js" src="bower_components/requirejs/require.js"></script>
	
	<script src="js/analytics.js"></script>
</body>
</html>
