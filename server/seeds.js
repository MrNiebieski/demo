// Meteor.startup(function () {

//   if (Posts.find({}).count() === 0) {
//     Posts.insert({
//       title: Fake.sentence(),
//       body: Fake.paragraph(),
//       published: Fake.fromArray([true, false])
//     });
//   }

// });



Meteor.startup(function () {


	if (Kids.find({}).count() === 0) {
    

		Kids.insert(
		  {
		    name: Fake.sentence(),
		     age: Fake.sentence(),
		     desc: Fake.paragraph(),
		  });

    };


});



