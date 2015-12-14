var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var WebSite = require('./components/main');
var Introduction = require('./components/introduction');

module.exports = (
  <Router history={new HashHistory}>
    <Route path="/" component={WebSite}>
      <Route path="1" component={Introduction} />
    </Route>
  </Router>
)

      // <Route path="1" component={Introduction} />
      // <Route path="2" component={LearningMaterials} />
      // <Route path="3" component={InterviewQuestions} />