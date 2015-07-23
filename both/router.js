Router.configure({
  layoutTemplate: 'layout'
});

Meteor.startup(function () {
  if (Meteor.isClient) {
    var location = Iron.Location.get();
    if (location.queryObject.platformOverride) {
      Session.set('platformOverride', location.queryObject.platformOverride);
    }
  }
});

// Router.map(function() {
//   this.route('actionSheet');
//   this.route('backdrop');
//   this.route('forms', {
//     data: function () {
//       return {
//         post: Posts.find().fetch()[0]
//       };
//     }
//   });









Router.route('/babys/:_id', {
  waitOn: function() {
    return Meteor.subscribe('babys',this.params._id);
  },
   data: function () {
      return {
        kids: Kids.find().findOne()
      };
    },
    action: function () {
      this.render(babys);
    }
});



// Router.route('/events/:_id', {
//   name: 'details',
//   data: function() { return Events.findOne(this.params._id); }
// });



// Router.route('/', {
//   waitOn: function() {
//     return Meteor.subscribe('babys');
//   },
//    data: function () {
//       return {
//        babys : Kids.find()
//       };
//     },
//     action: function () {
//       this.render('tabsOne');
//     }
// });



Router.route('/',
  {
    waitOn: function() {
      return Meteor.subscribe('babys');
    },
    data: function () {
      return {
       babys : Kids.find()
      };
    },
    //this.render('tabsOne');
    name: 'tabsOne'
  }
);

//   this.route('headersFooters');
//   this.route('lists');
//   this.route('loading');
//   this.route('modal');
//   this.route('navigation');
//   this.route('navigation.one', {path: '/navigation/one'});
//   this.route('navigation.two', {path: '/navigation/two'});
//   this.route('navigation.three', {path: '/navigation/three'});
//   this.route('popover');
//   this.route('popup');
//   this.route('sideMenu');
//   this.route('slideBox');
Router.route('tabs.one', {
  path: '/tabs/one', 
  layoutTemplate: 'tabsLayout',

    waitOn: function() {
      Meteor.subscribe('images');
      return Meteor.subscribe('babys');
    },
    data: function () {
      return {
       babys : Kids.find()

      };
    },

});


Router.route('tabs.two', {path: '/tabs/two', layoutTemplate: 'tabsLayout'});
Router.route('tabs.three', {path: '/tabs/three', layoutTemplate: 'tabsLayout'});
Router.route('tabs.four', {path: '/tabs/four', layoutTemplate: 'tabsLayout'});
//   this.route('userAccounts');
// });
