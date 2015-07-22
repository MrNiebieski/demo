Template.tabsOne.helpers({
    events: function () {
      return Events.find({}, { sort: { title: -1, body: 1 } });
    },
    // selectedName: function () {
    //   var player = Players.findOne(Session.get("selectedPlayer"));
    //   return player && player.name;
    // 
});

