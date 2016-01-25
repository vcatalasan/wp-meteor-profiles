Profile = React.createClass({
  render() {
    let { user_id, firstName, lastName } = this.props.profile;
    return (
      <li><a href={"/api/profiles/user/" + user_id} target="_blank">{firstName} {lastName}</a></li>
    );
  }
});
