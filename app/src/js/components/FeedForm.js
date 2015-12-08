var React = require('react');

var FeedForm = React.createClass({
	
	// Handle form
	handleForm: function (e) {
		e.preventDefault(); // Prevent posting

		var newItem = {
			title: this.title.value,
			desc: this.description.value,
			voteCount: 0
		};

		// Reset form
		this.feedForm.reset();

		// Callback to Feed
		this.props.onNewItem(newItem);

	},

	render: function() {
		// Display or hide form
		var display = this.props.displayed ? 'block' : 'none';
		var styles = {
			display: display
		};

		return (
			<form ref={(ref) => this.feedForm = ref} style={styles} id="feedForm" className="container" onSubmit={this.handleForm} >
			    <div className="form-group">
			    	<div className="row">
				        <input ref={(ref) => this.title = ref} className="form-control" type="text" placeholder="Title" />
				        <input ref={(ref) => this.description = ref} className="form-control" type="text" placeholder="Description" />
				        <button type="submit" className="btn btn-primary btn-row">Add</button>
			    	</div>
			    </div>
			</form>
		);
	} 

});

module.exports = FeedForm;