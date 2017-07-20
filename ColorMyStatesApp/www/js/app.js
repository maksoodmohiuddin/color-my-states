// ColorMyStates Ionic App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'colorMyStates' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'colorMyStates.services' is found in services.js
// 'colorMyStates.controllers' is found in controllers.js
angular.module('colorMyStates', ['ionic', 'ngCordova', 'colorMyStates.controllers', 'colorMyStates.services'])

.run(function($ionicPlatform, $cordovaNativeAudio) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    $ionicPlatform.ready(function() {
      $cordovaNativeAudio
        .preloadComplex('music', 'audio/ColorMyStatesSoundTrack.m4a', 1, 1, 5)
        .then(function (msg) {
          $cordovaNativeAudio.play('music');
          console.log(msg);
        }, function (error) {
          console.error(error);
        });
    });

  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.color', {
    url: '/color',
    views: {
      'tab-color': {
        templateUrl: 'templates/tab-color.html',
        controller: 'ColorCtrl'
      }
    }
  })

  .state('tab.states', {
      url: '/states',
      views: {
        'tab-states': {
          templateUrl: 'templates/tab-states.html',
          controller: 'StatesCtrl'
        }
      }
    })
    .state('tab.state-detail', {
      url: '/states/:stateId',
      views: {
        'tab-states': {
          templateUrl: 'templates/state-detail.html',
          controller: 'StateDetailCtrl'
        }
      }
    })

  .state('tab.trek', {
    url: '/trek',
    views: {
      'tab-trek': {
        templateUrl: 'templates/tab-trek.html',
        controller: 'TrekCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/color');

});
