@extends('master')

<?php
function randomPicture($dir = 'img/sfondi/cri/')
{
    $files = glob($dir . '/*.jpg');
    $file = array_rand($files);
    return $files[$file];
}
?>

@section('content')
<!-- Carousel -->
<div id="myCarousel" class="carousel slide" data-ride="carousel" style=".carousel .carousel-control { visibility: hidden; } }">

	<ol class="carousel-indicators">
		<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
	</ol>

	<div class="carousel-inner">
		<div class="item active" style="background: url('<?=randomPicture()?>') no-repeat center center fixed; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover;">
			<div class="container">
				<div class="carousel-caption">
					<h1>Mestieri & Arte Popolare Pugliese</h1>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- /.carousel -->


<!-- Wrap the rest of the page in another container to center all the content. -->
<div class="container marketing">
	<!-- Three columns of text below the carousel -->
	<div class="row">

		<div class="col-md-4">
			<div class="feature-circle"><a href="map.mobile"><i class="fa fa-eye fa-5x"></i></a></div>
			<h2>Scopri il Progetto</h2>
			<p><b>m|app</b> si occupa di individuare e censire le attività artigianali tradizionali in Puglia. Scopri di che si tratta!</p>
		</div>

		<!-- /.col-lg-4 -->
		<div class="col-md-4">
			<!--
        <div class="feature-circle"><a href="agenda"><i class="fa fa-comment fa-5x"></i></a></div>
      -->
      <div class="feature-circle"><a href="" data-toggle="modal" data-target="#ccModal"><i class="fa fa-comment fa-5x"></i></a></div>
			<h2>Collabora con noi</h2>
			<p>Segnalaci un artigiano, una attività o un evento: farà parte del nostro progetto!</p>
		</div>

		<!-- /.col-lg-4 -->
		<div class="col-md-4">
			<div class="feature-circle"><a href="" data-toggle="modal" data-target="#newsletterModal"><i class="fa fa-edit fa-5x"></i></a></div>
			<h2>Iscriviti</h2>
			<p>Rimani aggiornato sulle nostre attività e iscriviti alla nostra associazione!</p>
		</div>
		<!-- /.col-lg-4 -->

		<!-- Newsletter Modal -->
		<div class="modal fade" id="newsletterModal" tabindex="-1" role="dialog" aria-labelledby="newsletterModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
						<h4 class="modal-title" id="newsletterModalLabel">Iscriviti alla Newsletter</h4>
					</div>
					<div class="modal-body">
						<div class="row text-center">
							<div class="col-md-12">
								<p>Iscriviti e verrai aggiornato sulle nostre attività attraverso la nostra newsletter!</p>
							</div>
						</div>
						<div class="row text-center">
							<div class="col-xs-4">
								<input type="text" class="form-control nl-nome" placeholder="Nome e Cognome">
							</div>
							<div class="col-xs-4">
								<input type="text" class="form-control nl-citta" placeholder="Città">
							</div>
							<div class="col-xs-4">
								<input type="email" class="form-control nl-indirizzo" placeholder="Indirizzo E-mail">
							</div>
						</div>
       		</div>
       		<div id="nl-alert" class="alert alert-danger hidden nl-alert">Attenzione: indirizzo E-mail non valido o già presente</div>
					<div class="modal-footer">
						<button type="submit" class="btn btn-default nl-invia">Invia</button>
        	</div>
      	</div>
    	</div>
		</div>

    <!-- Crowd Contribution Modal -->
    <div class="modal fade" id="ccModal" tabindex="-1" role="dialog" aria-labelledby="ccModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="ccModalLabel">Collabora con noi</h4>
          </div>
          <div class="modal-body">
            <div class="row text-center">
              <div class="col-md-12">
                <p>Segnalaci una Entità (Artigiano, Organizzazione o Museo) o un Evento</p>
              </div>
            </div>

            <div class="row text-left">

                <div class="form-group clearfix">
                  <label for="cc-nome">Nome della Entità o dell'Evento:</label>
                  <input type="text" class="form-control cc-nome" id="cc-nome" placeholder="Nome della Entità o dell'Evento"/>
                </div>

                <div class="form-group btn-group btn-input clearfix dropdown">
                  <label for="cc-tipo">Tipologia:</label>
                  <button type="button" class="form-control btn btn-default dropdown-toggle cc-tipo" id="cc-tipo" data-toggle="dropdown">
                    <span data-bind="label">Tipologia</span>
                    <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu cc" role="menu" aria-labelledby="cc-tipo">
                    <li><a href="#">Artigiano</a></li>
                    <li><a href="#">Organizzazione</a></li>
                    <li><a href="#">Museo</a></li>
                    <li><a href="#">Evento</a></li>
                  </ul>
                </div>

                <div class="form-group clearfix">
                  <div class="col-xs-6">
                    <label for="cc-inizio">Inizio:</label>
                    <input type="date" class="form-control cc-inizio">
                  </div>
                  <div class="col-xs-6">
                    <label for="cc-termine">Termine:</label>
                    <input type="date" class="form-control cc-termine">
                  </div>
                </div>

                <div class="form-group clearfix">
                  <label for="cc-descrizione">Descrizione:</label>
                  <textarea class="form-control cc-descrizione" id="cc-descrizione" rows="3" placeholder=""></textarea>
                </div>

                <div class="form-group clearfix">
                  <label for="cc-contributor">Contatto:</label>
                  <input type="email" class="form-control cc-contributor" id="cc-contributor" placeholder="Indirizzo E-mail">
                </div>

                <div id="cc-alert" class="alert alert-danger hidden cc-alert">Attenzione: dati non validi</div>

                <button type="submit" class="btn btn-default cc-invia">Invia</button>

            </div>
          </div>
        </div>
      </div>
    </div>

	</div>
	<!-- /.row -->
</div>
<!-- /.container -->
@stop

@section('js')
<script>
$(document.body).on('click', '.cc li', function(event) {
  var $target = $(event.currentTarget);
  $target.closest('.btn-group').find('[data-bind="label"]').text($target.text()).end().children('.dropdown-toggle').dropdown('toggle');
  if ($target[0].innerText == 'Evento') {
    console.log('hello')
  }
  return false;
});
</script>
<script data-main="index.js" src="bower_components/requirejs/require.js"></script>
@stop
