Events = new Mongo.Collection('events');

Events.insert({
  name: 'Park',
  date: '2015-07-25',
});

Events.attachSchema(new SimpleSchema({
  title: {
    type: String,
    max: 200,
    autoform: {
      'label-type': 'stacked'
    }
  },
  body: {
    type: String,
    autoform: {
      rows: 10,
      'label-type': 'stacked'
    }
  },
  date: {
    type: Date,
    autoform: {
      afFieldInput: {
        type: "bootstrap-datepicker"
      }
    }
    // autoform: {
    //   rows: 10,
    //   'label-type': 'stacked'
    // }
  },
  published: {
    type: Boolean,
    defaultValue: true,
    autoform: {
      type: 'toggle'
    }
  }
}));