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
        <a href="http://en.wikipedia.org/wiki/Linked_open_data">Linked Open data</a>, ed interrogabili utilizzando
        il linguaggio di interrogazione <a href="http://it.wikipedia.org/wiki/SPARQL">SPARQL</a>. <br />
        Interroga il <a href="/sparql">nostro SPARQL Endpoint</a>!
      </p>
    </li>

    <li>
      <p>
        <b>Free/Libre Open Source Software:</b> <br/> Tutto il software creato per il progetto M/APP, dalla base di conoscenza geo-spaziale interrogabile via API REST alla app per Android/iOS, è disponibile
        con licenza <a href="http://www.creativecommons.it/">Creative Commons</a> su <a href="https://github.com/pminervini/">GitHub</a>. <br />

        In particolare, sono disponibili i codici sorgenti per:
        <ul>
          <li><a href="https://github.com/pminervini/map-knowledgebase">map-knowledgebase</a>: il servizio REST che rende possibile consultare e modificare la base di conoscenza del progetto <b>m|app</b>.</li>
          <li><a href="https://github.com/pminervini/map-site">map-site</a>: questo sito, inclusivo della <a href="http://m-app.eu/map.mobile">mappa online</a>.</li>
          <li><a href="https://github.com/pminervini/map-android">map-android</a>: applicazione per Android per consultare da dispositivi mobili la base di conoscenza del progetto <b>m|app</b>.</li>
        </ul>

    </li>
  </ul>

</div>

</div>
@stop

@section('js')

@stop
