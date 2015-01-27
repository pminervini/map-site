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

	var EntityRegistration = require('js/index/entityRegistration');
	var EntityRegistrationResult = require('js/index/entityRegistrationResult')

	console.log(NewsletterRegistration)
	console.log(NewsletterRegistrationResult)
	console.log(EntityRegistration)
	console.log(EntityRegistrationResult)

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

	EntityRegistration.attachTo($(document), {
		'messageBus' : $bus
	});

	EntityRegistrationResult.attachTo($(document), {
		'messageBus' : $bus
	});

});
