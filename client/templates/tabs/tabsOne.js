
  Template.tabsOne.helpers({

    attachImgSrc: function () {
        var id = this.picture;
        console.log(id);
        return Images.findOne({_id: id});
    },


    // babys: function () {
    //     return Kids.find({}, { sort: { age: -1, name: 1 } });

    // }


   // events: function () {
   //    return Kids.find({}, { sort: { age: -1, name: 1 } });

   //  }





});
    



Template.tabsOne.events({
  'click [data-action=logout]': function () {
    AccountsTemplates.logout();
  }
});

     

// Template.tabsOne.onRendered(function () {
//   console.log(this);
// });