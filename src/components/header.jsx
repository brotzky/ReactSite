var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
    return (
      <div className="header">
        <Link classNameActive="active" to='/'>1. guide</Link>
        <Link classNameActive="active" to='/resources'>2. resources</Link>
      </div>
    );
  }
});