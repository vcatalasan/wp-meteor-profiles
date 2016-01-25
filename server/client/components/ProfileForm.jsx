ProfileForm = React.createClass({
  handleSubmit(event) {
      event.preventDefault();
      // Find the text field via the React ref
      var text = this.refs.firstName.value;
      console.log(this.refs);
      alert(text);
  },


  render() {
    return (
        <form className="form-profile" onSubmit={this.handleSubmit} >
          <input type="text" ref="user_id" placeholder="Type user id" />
          <input type="text" ref="firstName" placeholder="Type first name" />
          <input type="text" ref="lastName" placeholder="Type last name" />
          <input type="submit" value="Save Profile" />
        </form>
        );
  }
});
