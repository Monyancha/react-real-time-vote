var React = require('react');

var ShowAddButton = React.createClass({

	render: function() {

		var classString, buttonText;

		// Button state depending on toggl show/hide
		if (this.props.displayed) {
			classString = 'btn btn-default btn-row';
			buttonText = 'Cancel';
		} else {
			classString = 'btn btn-success btn-row';
			buttonText = 'Create New item';
		}

		return (
			<button className={classString} onClick={this.props.onToggleForm}>
				{buttonText}
			</button>
		);
	}

});

module.exports = ShowAddButton; 