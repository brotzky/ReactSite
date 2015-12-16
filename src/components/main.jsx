var React = require('react');
var Reflux = require('reflux');
var WebsiteData = require('../stores/website-store');
var Header = require('./header');
var GuideContent = require('./guide-content');

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(WebsiteData, 'onChage')
  ],
  getInitialState: function() {
    return {
      username: [],
    };
  },
  componentDidMount: function() {
    WebsiteData.getData();
  },
  content: function() {
    if(this.props.children) {
     return this.props.children
    } else {
      return (
        <div className="paper-writing">
          <h1 className="paper-main-heading">Front End Developer<br/>Interview Prep</h1>
          <div className="paper-break-g"></div>
          <GuideContent />
        </div>
      );
    }
  },
  onChage: function(event, website){
    this.setState({username: website.items})
  },
  renderData: function() {
    return this.state.username.map(function(item){
        return <div><li>{item}</li></div>
      });
  },
  render: function() {
    return (
      <div className="paper">
        <Header />
        {this.content()}
      </div>
    );
  }
});
