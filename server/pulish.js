// Meteor.publish('babys', function () {
//   return Kids.find();
// });



Meteor.publish('baby', function (pid) {
  return Kids.find({_id: pid});
});


// Meteor.publish(babys, function (pid, limit) {
//   return Kids.find({_id: pid},{limit:10});
// });




Meteor.publishComposite('babys', {
    find: function() {
        // Find top ten highest scoring posts
        return Kids.find({}, { sort: { age: -1 }, limit: 3 });
        //return Kids.find();
    },
    children: 
    [
        {
            find: function(kid) {
                // Find post author. Even though we only want to return
                // one record here, we use "find" instead of "findOne"
                // since this function should return a cursor.
                return Images.find({_id: kid.picture});
                //return Images.find();
            }
        },   
    ] 
});