var React = require('react');
var Api = require('../utils/api');

module.exports = React.createClass({
  getInitialState: function() {
      return {
        username: '',
        lastGistUrl: ''
      };
    },

    componentDidMount: function() {
      Api.get('../../data/data.json').
        then(function(data){
          console.log(data.webapp);
          if (this.isMounted()) {
            this.setState({
              username: 'yolo',
              lastGistUrl: 'moreyolo'
            });
          }
        }.bind(this));
    },
    render: function() {
      return (
        <div>
          <h1>Introduction</h1>
        </div>
      );
    },
});


