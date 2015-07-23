Meteor.publish('eventsList', function () {
	return Events.find({});
});

Meteor.publish('oneEvent', function (eid) {
	return Events.find({_id: eid});
});
