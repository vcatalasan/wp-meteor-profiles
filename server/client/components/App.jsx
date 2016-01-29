App = React.createClass({

  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Profiles collection and puts them on this.data.profiles
  getMeteorData() {
    return {
      profiles: Profiles.find({}, { limit: 10 }).fetch()
    };
  },

  handleSubmit(doc) {
      // Find the text field via the React ref
      var text = 'handleSubmit';
      console.log(doc);
      alert(text);
      return false;
  },

  renderProfiles() {
    // Get profiles from this.data.profiles
    return this.data.profiles.map((profile) => {
      return <Profile key={profile._id} profile={profile} />;
    });
  },

  render() {
    var Schemas = {};
    Schemas.Profile = new SimpleSchema({
      user_id: {
        type: Number,
        optional: false,
        label: "User ID"
      },
      user_status: {
        type: Number,
        optional: true,
        label: "User Status"
      },
      user_login: {
        type: String,
        label: "User Login"
      },
      user_email: {
        type: String,
        label: "User Email"
      },
      displayName: {
        type: String,
        optional: false,
        label: "Display Name"
      },
      firstName: {
        type: String,
        optional: false,
        label: "First Name"
      },
      //"middleInitial": "text",
      lastName: {
        type: String,
        optional: false,
        label: "Last name"
      }
      //"suffix": "text",
      //"address1": "text",
      ///"city": "text",
      //"state": "text",
      //"zIPPostalCode": "text",
      //"country": "text",
      //"phone": "text",
      //"email": "email"
    });

    return (
      <div className="container">
        <header>
          <h1>Profile Form</h1>
          <ProfileForm id="editProfileForm" schema={Schemas.Profile}  action="/api/profiles/user" method="post" onsubmit={this.handleSubmit} />
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
