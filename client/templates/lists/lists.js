Template.lists.helpers({
  times: function () {
    var times = [];
    _(6).times(function(n){
      times.push(n);
    });
    return times;
  }
});
