/**
 * Paper is used to contain all the written information
 * Main component that contains subcomponenets
 */

var React = require('react');
var WebsiteData = require('../stores/website-store');
var Introduction = require('./introduction');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <p>This is the containing paper</p>
      </div>
    );
  }
});