request = require("requestretry");

var DEFAULT_MAX_ATTEMPTS = 3;
var DEFAULT_TIMEOUT = 10 * 1000;
var Drift;
var request;

Drift = (function() {
  function Drift(token) {
    this.token = token;
    this.timeout = DEFAULT_TIMEOUT;
    this.maxAttempts = DEFAULT_MAX_ATTEMPTS;
    this.url = 'https://driftapi.com/'
  }

  Drift.prototype.getAllContacts = function(callback) {
    if (typeof callback === "function") {
      let request_arg = {
        url: 'https://driftapi.com/contacts/',
        headers: {
          'User-Agent': 'request',
          'Authorization': 'Bearer ' + this.token,
        }
      };
      request(request_arg, function(err, response, body) {
        if (err) {
          callback(err)
        } else {
          let parsedResponse;
          try {
            parsedResponse = JSON.parse(body);
          } catch (error) {
            callback(error)
          }
          if (typeof callback === "function") {
            callback(err, response.statusCode, parsedResponse);
          } else {
            return new Promise((resolve, reject) => {
              if(err){
                return reject(err);
              }
              resolve(parsedResponse);
            })
          }
        }
      });
      return this;
    }
  };

  Drift.prototype.getContact = function(id, options, callback) {
    if (options == null) {
      options = {};
    }
    if (typeof options === "function") {
      callback = options;
      options = {};
    }
    let request_arg = {
      url: 'https://driftapi.com/contacts/' + id,
      headers: {
        'User-Agent': 'request',
        'Authorization': 'Bearer ' + this.token,
      }
    };
    request(request_arg, function(err, response, body) {
      if (err) {
        callback(err)
      } else {
        let parsedResponse;
        try {
          parsedResponse = JSON.parse(body);
        } catch (error) {
          callback(error)
        }
        if (typeof callback === "function") {
          callback(err, response.statusCode, parsedResponse);
        } else {
          return new Promise((resolve, reject) => {
            if(err){
              return reject(err);
            }
            resolve(parsedResponse);
          })
        }
      }
    });
    return this;
  };


  Drift.prototype.getConvo = function(message, options, callback) {
    if (options == null) {
      options = {};
    }
    if (typeof options === "function") {
      callback = options;
      options = {};
    }
    let request_arg = {
      url: 'https://driftapi.com/v1/conversations/' + message.body.data.conversationId.toString() + '/messages',
      headers: {
        'User-Agent': 'request',
        'Authorization': 'Bearer ' + this.token,
      }
    };
    request(request_arg, function(err, response, body) {
      if (err) {
        callback(err)
      } else {
        let parsedResponse;
        try {
          parsedResponse = JSON.parse(body);
        } catch (error) {
          callback(error)
        }
        if (typeof callback === "function") {
          callback(err, response.statusCode, parsedResponse);
        } else {
          return new Promise((resolve, reject) => {
            if(err){
              return reject(err);
            }
            resolve(parsedResponse);
          })
        }
      }
    });
    return this;
  };

  Drift.prototype.postMessage = function(message, options, callback) {

    if(!options.orgId){
      options.orgId = message.body.orgId
    }

    let request_arg = {
      method: 'POST',
      url: 'https://driftapi.com/v1/conversations/' + message.body.data.conversationId.toString() + '/messages',
      body: options,
      json: true,
      headers: {
        'User-Agent': 'request',
        'Authorization': 'Bearer ' + this.token,
      }
    };
    request(request_arg, function(err, response, body) {
      if (err) {
        callback(err)
      } else {
        let parsedResponse;
        try {
          parsedResponse = JSON.parse(body);
        } catch (error) {
          callback(error)
        }
        if (typeof callback === "function") {
          callback(err, response.statusCode, parsedResponse);
        } else {
          return new Promise((resolve, reject) => {
            if(err){
              return reject(err);
            }
            resolve(parsedResponse);
          })
        }
      }
    });
    return this;
  };

  return Drift;
})();

module.exports = Drift;