var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./components/main');
var Introduction = require('./pages/introduction');
var Resources = require('./pages/resources');
var Hiring = require('./pages/hiring');

module.exports = (
  <Router history={new HashHistory}>
    <Route path="/" component={Main}>
      <Route path="introduction" component={Introduction} />
      <Route path="resources" component={Resources} />
      <Route path="hiring" component={Hiring} />
    </Route>
  </Router>
)
