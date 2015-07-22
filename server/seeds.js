Meteor.startup(function () {

  if (Events.find({}).count() === 0) {
    Events.insert({
      title: 'default Title',
      body: 'default Body',
      date: '2015-07-25',
    });
  }

});
