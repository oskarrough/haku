import Ember from 'ember';

const {Route, inject} = Ember;

export default Route.extend({
	ajax: inject.service(),

	model(params) {
		return this.get('ajax').request(`?url=${params.url}`)
			.catch(error => {
				this.transitionTo('/');
				console.log(error);
				throw error;
			});
	}
});
