@extends('master')

@section('css')

@stop

@section('content')
<div class="container">

  <div id="title">
    <div class="container">
      <div class="section_header">
        <h2>Progetto</h2>
      </div>
    </div>
  </div>

  <div class="row">

    <p>
      Il progetto m|app, vincitore del bando <a href='content/Graduatoria_Principi_Attivi.pdf'>Principi Attivi 2012</a> scaturisce
      dal riconoscimento di una tradizione di valorizzazione e recupero delle <b>arti</b> e dei <b>mestieri tipici</b> della cultura pugliese
      attiva sul territorio, e dalla volontà di mettere a sistema e raccogliere questi episodi che si sviluppano in maniera puntuale,
      definendo una vera e propria rete a scala regionale. Il riconoscimento dell’identità territoriale e la promozione delle tradizioni
      ‘che costituiscono risorsa da tramandare alle future generazioni’ rappresenta infatti uno dei principali indirizzi delle politiche
      della Regione Puglia, laddove la componente rurale e storico-culturale viene intesa come una delle declinazioni del ‘bene’ territorio
      al pari degli aspetti paesaggistici e ambientali e, in quanto tale, suscettibile di tutela.
    </p>

    <p>
      Obiettivo materiale del progetto è pervenire alla realizzazione di una <b>mappa</b> delle attività tradizionali, declinata in chiave <b>smart</b>
      attraverso la costruzione di un dispositivo fruibile dagli abitanti quanto dai turisti, che concretizzi non solo una modalità avanzata
      di coinvolgimento ma un vero e proprio progetto di riconoscimento e monitoraggio delle tradizioni e delle iniziative in corso sul
      territorio. A partire dalla mappatura su una carta interattiva delle realtà già presenti ma non in contatto tra loro, e delle relative
      iniziative culturali riconducibili a volontà individuali o limitate nel tempo, il progetto avrà il ruolo di strutturare queste informazioni
      in una base di conoscenza condivisa, fruibile attraverso una piattaforma Web e applicazioni per smartphone e tablet che consenta di
      conoscere in tempo reale localizzazione, caratteristiche e ogni genere di informazione utile per partecipare e conoscere l’attività
      d’interesse.
    </p>

    <p>
      Alla fase ‘online’ del progetto si accompagna una parte ‘offline’ didattico-pratica di divulgazione dell’attività, mediante l’attivazione
      di workshop, intervallati da incontri/dibattiti con personalità della scena pugliese, organizzate in partnership con le associazioni e le
      istituzioni già presenti sul territorio e cadenzate rispetto alla stagionalità delle attività, sintetizzando i quattro ambiti principali
      della vita dell’individuo: <b>i mestieri, l’abitazione, il cibo e il tempo libero</b>. Il progetto prevede inoltre l’attivazione di processi
      collettivi di coesione e cooperazione rivolti ad Istituti Scolastici e/o di assistenza sociale, per favorire la sperimentazione didattica
      e l’integrazione di minori, anziani, diversamente abili, attraverso attività laboratoriali organizzate sui temi delle tradizioni locali.
    </p>

<!--
    <p>
      La mappa è disponibile a <a href="/map">questo link</a>. <br />
      Scarica la nostra app per dispositivi Android! <br /> <br />
      <a href="https://play.google.com/store/apps/details?id=com.neuralnoise.mapp">
        <img alt="Get it on Google Play"
        srcx="https://developer.android.com/images/brand/en_generic_rgb_wo_45.png"
        src="img/app/play.png"/>
      </a>
    </p>
-->

    <p>
      La mappa è disponibile a <a href="/map">questo link</a>. <br />
      Scarica la nostra app per dispositivi Android e iOS! <br /> <br />
      <!--
      <a href="https://play.google.com/store/apps/details?id=com.neuralnoise.mapp">
        <img alt="Get it on Google Play"
        srcx="https://developer.android.com/images/brand/en_generic_rgb_wo_45.png"
        src="img/app/play.png"/>
      </a>
      <a href="https://itunes.apple.com/it/app/id961449269">
        <img alt="Get it on iTunes"
        src="img/app/iTunes.png"/>
      </a>
      -->
      <a class="android" href="https://play.google.com/store/apps/details?id=com.neuralnoise.mapp"><i class="fa fa-android fa-3x"></i> </a>
      &nbsp;
      <a class="apple" href="https://itunes.apple.com/it/app/id961449269"><i class="fa fa-apple fa-3x"></i> </a>
    </p>

  </div>

</div>
@stop

@section('js')

@stop
