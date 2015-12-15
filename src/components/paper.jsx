/**
 * Paper is used to contain all the written information
 * Main component that contains subcomponenets
 */

var React = require('react');
var WebsiteData = require('../stores/website-store');
var Introduction = require('./introduction');
var Resources = require('./resources');
var Hiring = require('./hiring');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="paper">
        <p>This is the containing paper</p>
      </div>
    );
  }
});