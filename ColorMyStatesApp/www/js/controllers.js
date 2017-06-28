angular.module('colorMyStates.controllers', [])

.controller('DashCtrl', function($scope, $ionicLoading, GeoLocation) {

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

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    disableGeolocation: false
  };
});
