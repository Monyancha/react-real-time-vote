var React = require('react'),
	Feed = require('./components/Feed'),
	ReactDOM = require('react-dom');


var reactComponent = ReactDOM.render(
	<Feed />,
	document.getElementById('app'),
	function() {
		console.log('After render');
	}
);
