// Global API configuration
var Api = new Restivus({
  useDefaultAuth: true,
  prettyJson: true
});

// Maps to: /api/profiles/
Api.addRoute('profiles/user/:id', {authRequired: false}, {
  get: function () {
    console.log(this.urlParams.id);
    return Profiles.findOne({user_id: parseInt(this.urlParams.id)});
  },
  delete: {
    roleRequired: ['author', 'admin'],
    action: function () {
      if (Profiles.remove(this.queryParams)) {
        return {status: 'success', data: {message: 'Profile removed'}};
      }
      return {
        statusCode: 404,
        body: {status: 'fail', message: 'Profile not found'}
      };
    }
  }
});

// Maps to: /api/profiles/:id
Api.addRoute('profiles/:id', {authRequired: false}, {
  get: function () {
    //console.log(Meteor.Collection.ObjectID(this.urlParams.id));
    return Profiles.findOne(new Meteor.Collection.ObjectID(this.urlParams.id));
  },
  delete: {
    roleRequired: ['author', 'admin'],
    action: function () {
      if (Profiles.remove(Meteor.Collection.ObjectID(this.urlParams.id))) {
        return {status: 'success', data: {message: 'Profile removed'}};
      }
      return {
        statusCode: 404,
        body: {status: 'fail', message: 'Profile not found'}
      };
    }
  }
});
