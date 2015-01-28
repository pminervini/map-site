<div class="navbar navbar-inverse navbar-<?= (isset($type) ? $type : "fixed") ?>-top" role="navigation">
	<div class="container" >
		<div class="navbar-header">
			<button type="button" class="navbar-toggle pull-right" data-toggle="collapse" data-target=".navbar-ex1-collapse">
				<!-- Toggle navigation -->
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" rel="home" href="index"><img style="max-width:100px; margin-top: -7px;" src="img/mapp_white.svg" alt="mapp"> {open beta}</a>
		</div>

		<div class="collapse navbar-collapse navbar-ex1-collapse" role="navigation">
			<ul class="nav navbar-nav navbar-right">
				<li> <!-- class="active" --><a href="index">Home</a></li>
				<li><a href="progetto">Progetto</a></li>

<!--
				<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Mappe</a>
					<ul class="dropdown-menu">
						<li><a href="artigiani">Artigiani</a></li>
						<li><a href="organizzazioni">Organizzazioni</a></li>
						<li><a href="musei">Musei</a></li>
						<li><a href="agenda">Eventi</a></li>
					</ul>
				</li>
-->

<!--
				<li><a href="http://blog.m-app.eu">NEWS</a></li>
-->
				<li><a href="http://blog.m-app.eu">Diario</a></li>
				<li><a href="http://mappuglia.tumblr.com">Attività</a></li>
				<li><a href="partners">Partner</a></li>
				<li><a href="contatti">Chi siamo</a></li>
				<li><a href="dev">Dev</a></li>
<!--
				<li><a href="http://old.m-app.eu">OLD SITE</a></li>
-->
			</ul>
		</div>
	</div>
</div>
