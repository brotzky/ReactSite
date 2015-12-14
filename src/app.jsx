var React = require('react');
var Routes = require('./routes')
var Api = require('./utils/api');

var Introduction = React.createClass({
  render: function() {
    return <h1 className="red">
      Introduction!
    </h1>
  }
});

var LearningMaterials = React.createClass({
  render: function() {
    return <h1 className="red">
      LearningMaterials!
    </h1>
  }
});

var InterviewQuestions = React.createClass({
  render: function() {
    return <h1 className="red">
      InterviewQuestions!
    </h1>
  }
});

React.render(Routes, document.querySelector('.container'));