var React = require('react');
var WebsiteData = require('../stores/website-store');
var Header = require('./header');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      lastGistUrl: ''
    };
  },
  componentDidMount: function() {
    WebsiteData.getData()
      .then(function(data){
        this.setState({username: WebsiteData.website});
      }.bind(this));
  },
  render: function() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
});