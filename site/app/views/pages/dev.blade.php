@extends('master')

@section('css')

@stop

@section('content')
<div class="container">

  <div id="title">
    <div class="container">
      <div class="section_header">
      <h2>Sviluppatori</h2>
    </div>
  </div>
</div>

<div class="row">

  <ul>

    <li>
      <p>
        <b>Linked Open Data:</b> <br/> Tutti i dati della knowledge base del progetto M/APP sono fruibili come
        <a href="http://en.wikipedia.org/wiki/Linked_open_data">Linked Open data</a>.
        Interroga il nostro <a href="/sparql">SPARQL Endpoint</a>!
      </p>
    </li>

    <li>
      <p>
        <b>Free/Open Source:</b> <br/> Tutto il software creato per il progetto M/APP, dalla base di conoscenza geo-spaziale interrogabile via API REST alla app per Android/iOS, è disponibile
        con licenza <a href="http://www.creativecommons.it/">Creative Commons</a> su <a href="https://github.com/pminervini/">GitHub</a>.
    </li>
  </ul>

</div>

</div>
@stop

@section('js')

@stop
