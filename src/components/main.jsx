var React = require('react');
var Header = require('./header');
var WebsiteData = require('../stores/website-store');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      lastGistUrl: ''
    };
  },
  componentDidMount: function() {
    WebsiteData.getData()
      .then(function(){
        this.setState({username: WebsiteData});
      }.bind(this));
  },
  render: function() {
    console.log(this.state);
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
});