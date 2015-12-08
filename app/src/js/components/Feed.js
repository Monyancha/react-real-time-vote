var React 			= require('react');
var ShowAddButton 	= require('./ShowAddButton');
var FeedForm 		= require('./FeedForm');
var FeedList 		= require('./FeedList');
var _ 				= require('lodash');
var Firebase 		= require('firebase');

var Feed = React.createClass({

	// Load data from firebase
	loadData: function () {
		var ref = new Firebase('https://realtime-vote-demo.firebaseio.com/feed');

		// Listener on firebae
		ref.on('value', function (snapshot) {
			var items = [];
			var sorted = [];

			snapshot.forEach(function (itemSnap) {
				var item = itemSnap.val();
				item.key = itemSnap.key();
				items.push(item)
			});

			sorted = _.sortBy(items, function (item) {
				return -item.voteCount;	// Descending
			});

			this.setState({
				items:sorted 
			});
		}.bind(this));
	},

	componentDidMount: function() {
		this.loadData();
	},

	// Populate feed list
	getInitialState: function() {
		// Old before firebase
		/*var FEED_ITEMS = [
			{itemID: '1', title: 'Realtime data!', desc: 'Firebase is cool', voteCount: 49},
			{itemID: '2', title: 'Javascript is fun!', desc: 'Lexical scoping ftw', voteCount: 34},
			{itemID : '3', title: 'Fresh muttafukka pots!', desc: 'So fresh!', voteCount: 15},
		];*/
		return {
			items: [],
			formDisplayed: false
		};
	},

	// Toggling the form hide/show
	onToggleForm: function () {
		this.setState({
			formDisplayed: !this.state.formDisplayed
		});
	},

	// Callback funtion from form
	onNewItem: function (newItem) {
		var ref = new Firebase('https://realtime-vote-demo.firebaseio.com/feed');
		ref.push(newItem);	// Will trigger loadData callback()
		

		// Old code before firebase
		/*var newItems = this.state.items.concat([newItem]);
		this.setState({
			items: newItems,
			formDisplayed: false,
			itemID: this.state.items.length
		});*/
	},

	onVote: function (item) {
		var ref = new Firebase('https://realtime-vote-demo.firebaseio.com/feed').child(item.key);
		ref.update(item);

		// Old code before firebase
 		/*var items = _.uniq(this.state.items);	// Backup
 		var index = _.findIndex(items, function (feedItems) {
 			return feedItems.itemID === item.itemID;	// Callback when found
 		});
 		var oldObj = items[index];
 		var newItems = _.pull(items, oldObj);
 		newItems.push(item);
 		this.setState({
 			items: newItems 
 		});*/
	},

	render: function() {
		return (
			<div>
				<div className="container">
				    <div className="row">
				    	<ShowAddButton displayed={this.state.formDisplayed} onToggleForm={this.onToggleForm} />
				    </div>
				</div>

				<FeedForm displayed={this.state.formDisplayed} onNewItem={this.onNewItem} />

				<br/><br/>

				<FeedList items={this.state.items} onVote={this.onVote}/>
			</div>
		);
	}

});

module.exports = Feed;
