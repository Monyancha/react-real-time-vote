var React = require('react');

var FeedItem = React.createClass({

	// Callback for both vote methods to Feed
	vote: function (newCount) {
		this.props.onVote({
			key: this.props.reactKey,
			title: this.props.title,
			desc: this.props.desc,
			voteCount: newCount
		});
	},

	// Vote up button click
	voteUp: function () {
		var count = parseInt(this.props.voteCount, 10);
		var newCount = count + 1;
		this.vote(newCount);
	},

	// Vote down button click
	voteDown: function () {
		var count = parseInt(this.props.voteCount, 10);
		var newCount = count - 1;
		this.vote(newCount);
	},
 
	render: function() {

		// Toggle color on badge
		var positiveNegaviteClassName = this.props.voteCount >= 0 ?
										'badge success' :
										'badge fail';

		return (
			<li className="list-group-item padding">
                <span className={positiveNegaviteClassName}>{this.props.voteCount}</span>
                <h4>{this.props.title}</h4>
                <span>{this.props.desc}</span>
                <span className="pull-right">
                    <button id="up" className="btn btn-sm btn-primary" onClick={this.voteUp}>&uarr;</button>
                    <button id="down" className="btn btn-sm btn-primary" onClick={this.voteDown}>&darr;</button>
                </span>
                <br/>
            </li>
		);
	}

});

module.exports = FeedItem; 