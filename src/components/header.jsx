var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
    render: function() {
      return (
        <div>
          <h1>I AM THE HEADER</h1>
          <Link to='/'>Home</Link>
          <Link to='/1'>Introduction</Link>
        </div>
      );
    }
  });