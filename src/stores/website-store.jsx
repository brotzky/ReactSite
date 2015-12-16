/**
 * Utility file for API calls
 * Initial call for website data
 */

"use strict";

var Api = require('../utils/api');
var Reflux = require('reflux');

module.exports = Reflux.createStore({
  getData: function(){
    // using Fetch library
    return Api.get('../../data/data.json')
      .then(function(data){
        this.website = data.webapp
        this.triggerChange();
      }.bind(this));
  },
  triggerChange: function(){
    this.trigger('change', this.website)
  }
});