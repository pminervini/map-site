<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">

	<!-- Mobile Metas -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
	<!-- Optional theme -->
	<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap-theme.min.css">
	<link rel="stylesheet" href="bower_components/font-awesome/css/font-awesome.min.css">
	
	<!-- Custom styles for this template -->
	<link href="css/style.css" rel="stylesheet">
	
	<style>
	.typeahead {
		background-color: #fff;
	}
	.typeahead, .tt-query, .tt-hint {
		width: 396px;
		height: 30px;
		padding: 8px 12px;
		font-size: 24px;
		line-height: 30px;
		border: 2px solid #ccc;
		-webkit-border-radius: 8px;
		-moz-border-radius: 8px;
		border-radius: 8px;
		outline: none;
	}
	.className {
		position:absolute;
		left:50%;
		top:50%;
		margin:-75px 0 0 -250px;
	}
	</style>
	
</head>
<body>

	<div class="container className">
		<div id="bloodhound">
			<input class="typeahead searchField" type="text" placeholder="Input Field">
		</div>
	</div>

	<script src="bower_components/es5-shim/es5-shim.min.js"></script>
	<script src="bower_components/es5-shim/es5-sham.min.js"></script>
	
	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script src="bower_components/jquery/dist/jquery.min.js"></script>
	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
	
	<script src="bower_components/typeahead.js/dist/typeahead.bundle.min.js"></script>
	<script src="bower_components/typeahead.js/dist/typeahead.jquery.min.js"></script>
	
	<script>
		var data = [ {
			a : 'aaa',
			b : 'bbb'
		}, {
			a : 'ccc',
			b : 'ddd'
		}, {
			a : 'eee',
			b : 'fff'
		}, {
			a : 'aaa',
			b : 'bbb'
		} ];

		function hash(datum) {
			console.log("datum: ", datum);
			return datum.a + " "  + datum.b;
		};
		
		console.log("data: ", data);
		
		var dataMap = {};
		for (i = 0; i < data.length; ++i) {
			dataMap[hash(data[i])] = data[i];
		}
		
		var bh = new Bloodhound({
			datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
			queryTokenizer : Bloodhound.tokenizers.whitespace,
			local : $.map(data, function (datum) { return { value: hash(datum) }; })
		});

		bh.initialize();

		var ta = $(document).find('.searchField') // $('#bloodhound .typeahead')
		.typeahead({
			hint : true,
			highlight : true,
			minLength : 1
		}, {
			name : 'data',
			displayKey : 'value',
			source : bh.ttAdapter()
		});
		
		ta.on('typeahead:selected', function(object, datum) {
			console.log("updater: \"" + datum.value + "\"");
			console.log("updater - dataMap: ", dataMap);
			console.log("updater - hashed: ", dataMap[datum.value]);	
		});
		
	</script>
</body>
</html>