import Ember from 'ember';
import urlRegex from 'npm:url-regex';

const {Component, inject, RSVP, $} = Ember;

function setHeader(xhr) {
	xhr.setRequestHeader('X-Mashape-Key', 'Lwm2OwvM91mshQQto9VAU7ncFBOAp1QjD2ejsnRmrn5rUFwUCg');
	xhr.setRequestHeader('Accept', 'application/json');
}

export default Component.extend({
	ajax: inject.service(),
	url: null,

	isUrl(url) {
		return urlRegex().test(url);
	},

	findAllColors(url) {
		let host = this.get('ajax.host');
		return new RSVP.Promise((resolve, reject) => {
			$.ajax({
				// simple/w3c/precise
				// relevance/weight
				url: `${host}?url=${url}&palette=simple&sort=relevance`,
				type: 'GET',
				dataType: 'json',
				success: function (response) {
					resolve(response);
				},
				error: function (reason) {
					reject(reason);
				},
				beforeSend: setHeader
			});
		});
	},

	actions: {
		findColors(url) {
			console.log('find colors');
			console.log(url);
			// validate url
			// this.findAllColors(url);
		}
	}
});
