/**
 * Fetch library for Async calls
 * Source: data directory in root
 */

"use strict";

var Fetch = require('whatwg-fetch');

module.exports = {
  get: function(url){
    return fetch(url)
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        return data;
      });
  }
}