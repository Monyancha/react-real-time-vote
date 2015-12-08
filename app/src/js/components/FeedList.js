var React = require('react'),
	FeedItem = require('./FeedItem');

var FeedList = React.createClass({

	render: function() {

		// List items coming from Feed
		var feedItems = this.props.items.map(function (item) {
			return <FeedItem title={item.title}
							 desc={item.desc}
							 voteCount={item.voteCount}
							 onVote={this.props.onVote}
							 key={item.key}
							 reactKey={item.key} />
		}.bind(this));

		return (
			<ul className="list-group container">
				{feedItems}
			</ul>
		);
	} 

});

module.exports = FeedList;