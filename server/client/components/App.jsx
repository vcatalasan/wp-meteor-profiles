App = React.createClass({

  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Profiles collection and puts them on this.data.profiles
  getMeteorData() {
    return {
      profiles: Profiles.find({}, { limit: 10 }).fetch()
    };
  },

  renderProfiles() {
    // Get profiles from this.data.profiles
    return this.data.profiles.map((profile) => {
      return <Profile key={profile._id} profile={profile} />;
    });
  },

  render() {
    let formMeta = {
      "user_id": "integer",
      "user_status": "integer",
      "user_login": "text",
      "user_email": "email",
      "displayName": "text",
      "firstName": "text",
      "middleInitial": "text",
      "lastName": "text",
      "suffix": "text",
      "address1": "text",
      "city": "text",
      "state": "text",
      "zIPPostalCode": "text",
      "country": "text",
      "phone": "text",
      "email": "email"
    };

    return (
      <div className="container">
        <header>
          <h1>Profile Form</h1>
          <ProfileForm formMeta={formMeta}/>
        </header>

        <h2>Search</h2>
        <Search />
        <ul>
          {this.renderProfiles()}
        </ul>
      </div>
      );
  }
});
