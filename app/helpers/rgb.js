import Ember from 'ember';

// Takes an array like [220,60,50] and returns rgb(220,60,50)

export function rgb(params/*, hash*/) {
	let value = params[0];
	let rgb = `rgb(${value[0]}, ${value[1]}, ${value[2]})`;
	let reallySafe = Ember.Handlebars.Utils.escapeExpression(rgb);
	return Ember.String.htmlSafe(reallySafe);
}

export default Ember.Helper.helper(rgb);
