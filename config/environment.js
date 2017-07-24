/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'spaces',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },


  // Initialize Firebase
    firebase: {
    apiKey: "AIzaSyBDn9w_kH1k0VmU0SL7LBcW9t286ilAYQM",
    authDomain: "spaces-project-832d0.firebaseapp.com",
    databaseURL: "https://spaces-project-832d0.firebaseio.com",
    projectId: "spaces-project-832d0",
    storageBucket: "",
    messagingSenderId: "1038278394747"
     },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
