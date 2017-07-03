angular.module('colorMyStates.controllers', [])

.controller('DashCtrl', function($scope, $ionicLoading, $http, $state, GeoLocation) {

  $scope.GetGeoLocation = function () {

    console.log('Tracing current location...');
    $ionicLoading.show({
      template: 'Tracing current location...'
    });
    GeoLocation.getCurrentPosition()
      .then(
        // success
        function (position) {
        console.log('Current location found');
        console.log('Current location Latitude: ' + position.coords.latitude);
        console.log('Current location Longitude: ' + position.coords.longitude);

        $ionicLoading.hide();
        $scope.latitude = parseFloat(position.coords.latitude);
        $scope.longitude = parseFloat(position.coords.longitude);
        $scope.GetGeoLocationState();
      },
        // failure
        function (reason) {
          console.log('Cannot obtain current location', reason);

        $ionicLoading.show({
          template: 'Cannot obtain current location',
          duration: 1500
        });
      });
  };

  $scope.GetGeoLocationState = function () {
    // default to Seattle
    if (!$scope.latitude && !$scope.longitude) {
      $scope.latitude = 37.785834;
      $scope.longitude = -122.406117;
    }

    //var googleMapsReverseGeocodingAPI = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyASXfyZ4bfzlrx9aPRa3Nupqiw4DnQBy8I';

    var googleMapsReverseGeocodingAPI = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + $scope.latitude + ',' + $scope.longitude + '&key=AIzaSyASXfyZ4bfzlrx9aPRa3Nupqiw4DnQBy8I';

    $http.get(googleMapsReverseGeocodingAPI)
      .success(function (response) {
        var location = response.results[0].formatted_address;
        console.log("Your Current Location is : " + location);
        // for low-fidelity prototype:
        location = "California";
        $scope.currentLocation = location;
      })
      .error(function (data, status, headers, config) {

        if (status == 0)
          console.log("Error", "Error occured from calling Google Maps API");
        else
          console.log("Error", data);
      });
  };

  $scope.settings = {
    disableGeolocation: false
  };

  $scope.ColorYourState = function(){
    $state.go('tab.color');
  };

  // init call
  $scope.GetGeoLocation();

})

.controller('StatesCtrl', function($scope, States) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.states = States.all();
})

.controller('StateDetailCtrl', function($scope, $stateParams, States) {
  $scope.state = States.get($stateParams.stateId);
})

.controller('ColorCtrl', function($scope, $stateParams, States) {
  $scope.state = States.get(5);
});
