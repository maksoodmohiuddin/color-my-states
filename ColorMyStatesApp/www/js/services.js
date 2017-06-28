angular.module('colorMyStates.services', [])

.factory('States', function() {
  // Might use a resource here that returns a JSON array

  var states = [{
    id: 1,
    name: 'Alabama',
    capital: 'Montgomery',
    nickName: 'Yellowhammer State',
    map: 'img/alabama.gif'
  }, {
    id: 2,
    name: 'Alaska',
    capital: 'Juneau',
    nickName: 'The Last Frontier',
    map: 'img/alaska.gif'
  },  {
    id: 50,
    name: 'Wyoming',
    capital: 'Cheyenne',
    nickName: 'The Equality or Cowboy State',
    map: 'img/wyoming.gif'
  }];

  return {
    all: function() {
      return states;
    },
    get: function(stateId) {
      for (var i = 0; i < states.length; i++) {
        if (states[i].id === parseInt(stateId)) {
          return states[i];
        }
      }
      return null;
    }
  };
})

.factory('GeoLocation', function ($q, $timeout) {
  var currentPositionCache;
  return {
    getCurrentPosition: function () {
      if (!currentPositionCache) {
        var deffered = $q.defer();
        navigator.geolocation.getCurrentPosition(function (position) {
          deffered.resolve(currentPositionCache = position);
          $timeout(function () {
            currentPositionCache = undefined;
          }, 10000);
        }, function () {
          deffered.reject();
        });
        return deffered.promise;
      }
      return $q.when(currentPositionCache);
    }
  };
})



