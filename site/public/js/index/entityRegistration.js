define(function(require) {
  var defineComponent = require('flight/lib/component')
  return defineComponent(entityRegistration);

  function entityRegistration() {

    this.defaultAttrs({
      messageBus : null
    });

    this.after('initialize', function() {
      var attr = this.attr;
      var $bus = attr.messageBus;

      var $nome = this.$node.find('.cc-nome');
      var $tipo = this.$node.find('.cc-tipo');
      var $inizio = this.$node.find('.cc-inizio');
      var $termine = this.$node.find('.cc-termine');
      var $descrizione = this.$node.find('.cc-descrizione');
      var $invia = this.$node.find('.cc-invia');

      console.log('$nome is ', $nome);
      console.log('$tipo is ', $tipo);
      console.log('$inizio is ', $inizio);
      console.log('$termine is ', $termine);
      console.log('$descrizione is ', $descrizione);

      var f = function() {
        console.log('Triggering an api:entityRegistration ..');
        var parameters = {
          'name' : $nome[0].value,
          'type' : $tipo[0].innerText,
          //'startDate' : ($inizio.length > 0 ? new Date($inizio[0].value).getTime() : null),
          //'endDate' : ($termine.length > 0 ? new Date($termine[0].value).getTime() : null),
          'description' : $descrizione[0].value
        };
        if ($inizio.length > 0) {
          num = new Date($inizio[0].value).getTime();
          if (!isNaN(num)) {
            parameters['startDate'] = num;
          }
        }
        if ($termine.length > 0) {
          num = new Date($termine[0].value).getTime();
          if (!isNaN(num)) {
            parameters['endDate'] = num;
          }
        }
        console.log('parameters is ', parameters);
        $bus.trigger('api:entityRegistration', parameters);
      }
      $invia.on('click', f);
    });
  }

  return entityRegistration;
});
