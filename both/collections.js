Kids = new Mongo.Collection('kids');

Kids.attachSchema(new SimpleSchema({
  name: {
    type: String,
    max: 200,
    autoform: {
      'label-type': 'stacked'
    }
  },
  age: {
    type: String,
    autoform: {
      'label-type': 'stacked'
    }
  },
  desc: {
    type: String,
    autoform: {
      rows: 6,
      'label-type': 'stacked'
    }
  },

  picture: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Images',
        label: 'Choose file'
      }
    }
  }
 
  
}));



Events = new Mongo.Collection('events');

Events.attachSchema(new SimpleSchema({
  name: {
    type: String,
    max: 200,
    autoform: {
      'label-type': 'stacked'
    }
  },

  where: {
    type: String,
    autoform: {
      'label-type': 'stacked'
    }
  },

  when: {
    type: String,
    autoform: {
      'label-type': 'stacked'
    }
  },

  details: {
    type: String,
    autoform: {
      rows: 6,
      'label-type': 'stacked'
    }
  },

  picture: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Images',
        label: 'Choose file'
      }
    }
  }
 
  
}));


