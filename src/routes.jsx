var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var WebSite = require('./components/main');
var Introduction = require('./components/introduction');
var Resources = require('./components/resources');
var Hiring = require('./components/hiring');

module.exports = (
  <Router history={new HashHistory}>
    <Route path="/" component={WebSite}>
      <Route path="introduction" component={Introduction} />
      <Route path="resources" component={Resources} />
      <Route path="hiring" component={Hiring} />
    </Route>
  </Router>
)
