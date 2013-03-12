var useImg = require('oldie')();

module.exports = function( root ){

	var el;


	if(isOldIE){

		el = document.createElement('img');
		el.setAttribute('src', root + '.png');

	} else {

		el = document.createElement('object');
		el.setAttribute('data', root + ".svg");
		el.setAttribute('type', 'image/svg+xml');

	}

	return el;

}