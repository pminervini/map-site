define(function(require) {
	var defineComponent = require('flight/lib/component')
	return defineComponent(newsletterRegistration);

	function newsletterRegistration() {
		
		this.defaultAttrs({
			messageBus : null
		});
		
		this.after('initialize', function() {
			var attr = this.attr;
			var $bus = attr.messageBus;
			
			var $nome = this.$node.find('.nl-nome');
			var $citta = this.$node.find('.nl-citta');
			var $indirizzo = this.$node.find('.nl-indirizzo');
			var $invia = this.$node.find('.nl-invia');
			
			console.log('$nome is ', $nome);
			console.log('$invia is ', $invia);
			
			var f = function() {
				console.log('Triggering an api:newsletterRegistration ..');
				var parameters = {
					'name' : $nome[0].value,
					'city' : $citta[0].value,
					'email' : $indirizzo[0].value
				};
				console.log('parameters is ', parameters);	
				$bus.trigger('api:newsletterRegistration', parameters);
			}
			$invia.on('click', f);
		});
	}

	return newsletterRegistration;
});