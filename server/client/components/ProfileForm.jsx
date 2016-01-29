ProfileForm = React.createClass({

  componentDidMount() {
    this.view = Blaze.renderWithData(Template.quickForm, this.props, ReactDOM.findDOMNode(this.refs.container));
  },

  componentWillUnmount() {
    Blaze.remove(this.view);
  },

  render() {
    return (
      <span ref="container" />
    )
  }
});

/*
EditProfile = React.createClass({
  componentDidMount() {
    this.view = Blaze.renderWithData(Template.quickForm, { id: "profileForm", type: "insert"}, React.findDOMNode(this.refs.container));
  },

  componentWillUnmount() {
    Blaze.remove(this.view);
  },

  render() {
    return (
      <span ref="container" />
    )
  }
});
*/
