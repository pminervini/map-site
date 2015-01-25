<!DOCTYPE html>
<html lang="en" @yield('html')>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">

<!-- Mobile Metas -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<meta name="description" content="">
<meta name="author" content="">

<title>m|app</title>

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
<!-- Optional theme -->
<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap-theme.min.css">

<link rel="stylesheet" href="bower_components/font-awesome/css/font-awesome.min.css">

@yield('css')

<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
	<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
	<![endif]-->

<!-- Custom styles for this template -->
<link href="css/style.css" rel="stylesheet">
</head>
<body>

	@include('includes.header')
	
	@yield('content')
	
	@include('includes.footer')

	<script src="bower_components/es5-shim/es5-shim.min.js"></script>
	<script src="bower_components/es5-shim/es5-sham.min.js"></script>
	
	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script src="bower_components/jquery/dist/jquery.min.js"></script>
	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
	
	@yield('js')
	
	<script src="js/analytics.js"></script>
</body>
</html>
