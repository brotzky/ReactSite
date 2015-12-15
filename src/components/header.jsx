var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
    return (
      <div className="header">
        <Link to='/'>Home</Link>
        <Link to='/introduction'>Introduction</Link>
        <Link to='/resources'>Resources</Link>
        <Link to='/hiring'>Hiring</Link>
      </div>
    );
  }
});