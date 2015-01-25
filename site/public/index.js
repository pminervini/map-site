require.config({
	'paths' : {
		'flight' : 'bower_components/flight'
	},
	shim: {

	}
});

define(function(require) {
	var API = require('js/index/api');
	var NewsletterRegistration = require('js/index/newsletterRegistration');
	var NewsletterRegistrationResult = require('js/index/newsletterRegistrationResult');

	var $bus = $(document);
	
	API.attachTo($(document), {
		'messageBus' : $bus
	});
	
	NewsletterRegistration.attachTo($(document), {
		'messageBus' : $bus
	});
	
	NewsletterRegistrationResult.attachTo($(document), {
		'messageBus' : $bus
	});
});