var React = require('react');
var Api = require('../utils/api');
var Paper = require('./paper');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hiring</h1>
        <Paper />
      </div>
    );
  },
});
