var React = require('react');
var Paper = require('./paper');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      username: 'Dennis',
      lastGistUrl: ''
    };
  },
  render: function() {
    console.log(this.state.username);
    return (
      <div>
        <h1>Introduction</h1>
        <Paper />
      </div>
    );
  },
});


