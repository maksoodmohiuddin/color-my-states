angular.module('colorMyStates.controllers', [])

.controller('ColorCtrl', function($scope, $ionicLoading, $http, $state, $ionicPopover, $ionicPopup, States, SessionService) {

  var width = window.innerWidth; // width of canvas
  var height = width * (4 / 3) // height of canvas

  var canvas = new fabric.Canvas('c');

  canvas.selection = false;
  fabric.Object.prototype.selectable = false; // prevent drawing objects to be draggable or clickable

  // sets canvas height and width
  canvas.setHeight(height);
  canvas.setWidth(width);
  // sets canvas height and width
  // *** having both canvas.setHeight and canvas.width prevents errors when saving
  canvas.width = width;
  canvas.height = height;

  canvas.isDrawingMode = false;
  canvas.freeDrawingBrush.width = 24; // size of the drawing brush
  $scope.brushcolor = '#c0392b'; // set brushcolor to black to begin

  var randomState = Math.floor(Math.random() * (50-1 + 1) + 1);
  $scope.state = States.get(randomState);

  // Update Trekked States
  if (SessionService.get('visited') === null) {
    var visitedStatesNew = [];
    visitedStatesNew.push($scope.state.id);
    SessionService.set('visited', visitedStatesNew);
  } else {
    var visitedStates = SessionService.get('visited');
    visitedStates.push($scope.state.id);
    SessionService.set('visited', visitedStates);
  }

  canvas.setBackgroundImage($scope.state.map, canvas.renderAll.bind(canvas), {
    height: 680,
    width: 680
  });

  // drawing mode
  $scope.drawingMode = function() {
    // check if fabric is in drawing mode
    if (canvas.isDrawingMode == true) {
      // if fabric is in drawing mode, exit drawing mode
      $scope.showColorPaletteIcon = false; // hind color palette icon
      canvas.isDrawingMode = false;
    } else {
      // if fabric is not in drawing mode, enter drawing mode
      $scope.showColorPaletteIcon = true; // show color palette icon
      canvas.isDrawingMode = true;
    }
  }

  // color options popover
  $ionicPopover.fromTemplateUrl('templates/popup-colors.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });

  $scope.openColorsPopover = function($event) {
    $scope.popover.show($event);
  };

  $scope.closeColorsPopover = function() {
    $scope.popover.hide();
  };

  // list of colors
  $scope.colors = [
    {color: "#ecf0f1"},
    {color: "#95a5a6"},
    {color: "#bdc3c7"},
    {color: "#7f8c8d"},
    {color: "#000000"},
    {color: "#F1A9A0"},
    {color: "#D2527F"},
    {color: "#f1c40f"},
    {color: "#f39c12"},
    {color: "#e67e22"},
    {color: "#d35400"},
    {color: "#e74c3c"},
    {color: "#c0392b"},
    {color: "#6D4C41"},
    {color: "#3E2723"},
    {color: "#1abc9c"},
    {color: "#16a085"},
    {color: "#2ecc71"},
    {color: "#27ae60"},
    {color: "#3498db"},
    {color: "#2980b9"},
    {color: "#34495e"},
    {color: "#2c3e50"},
    {color: "#9b59b6"},
    {color: "#8e44ad"},
  ]

  $scope.changeBrushColor = function(color) {
    canvas.freeDrawingBrush.color = color;
    $scope.brushcolor = color; // used to change the color palatte icon's color
    $scope.popover.hide(); // hide popover
  }

  // undo last object, drawing or text
  $scope.undoLastObject = function() {
    var canvas_objects = canvas._objects;
    var last = canvas_objects[canvas_objects.length - 1];
    canvas.remove(last);
    canvas.renderAll();
  }

  $scope.addText = function() {
    // prevent user from being in drawing mode while adding text
    // this allows the user to manipulate the text object without drawing at the same time
    canvas.isDrawingMode = false; // exit drawing
    $scope.showColorPaletteIcon = false; // hide color palette icon

    $scope.data = {}

    // ionic popup used to prompt user to enter text
    var myPopup = $ionicPopup.show({
      template: '<input type="text" ng-model="data.input">',
      title: 'Enter Text',
      subTitle: '',
      scope: $scope,
      buttons: [{
        text: 'Cancel'
      }, {
        text: '<b>Save</b>',
        type: 'button-stable',
        onTap: function(e) {
          if (!$scope.data.input) {
            e.preventDefault();
          } else {
            return $scope.data.input;
          }
        }
      }]
    });
    myPopup.then(function(input) {

      // fabric js
      var t = new fabric.Text(input, {
        left: (width / 3),
        top: 100,
        fontFamily: 'Helvetica',
        fill: $scope.brushcolor, // color
        selectable: true, // draggbale

      });
      canvas.add(t); // add text to fabric.js canvas

    });
  }

  $scope.saveDrawing = function() {
    // to save the drawing
    var drawing = canvas.toDataURL();

  }

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

.controller('TrekCtrl', function($scope, $stateParams, $ionicLoading, $http, States, GeoLocation, SessionService) {

  var init = function () {
    //var visited = SessionService.get('visited');

    $scope.visitedStates = States.visited();

    if ($scope.visitedStates !== null) {
      $scope.visitedStatedName = " ";

      for (var key in $scope.visitedStates) {
        // skip loop if the property is from prototype
        if (!$scope.visitedStates.hasOwnProperty(key)) continue;

        var state = $scope.visitedStates[key];
        $scope.visitedStatedName += state.name + ' | ';
      }
    }

  };

  var ReverseGeoCoding = function () {

    var googleMapsReverseGeoCodingAPI = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + $scope.latitude + ',' + $scope.longitude + '&key=AIzaSyASXfyZ4bfzlrx9aPRa3Nupqiw4DnQBy8I';

    $http.get(googleMapsReverseGeoCodingAPI)
      .success(function (response) {
        //var location = "Howdy Ranger! You are at : " + response.results[0].formatted_address;
        var location = "Howdy Ranger! You are at : " + response.results[0].address_components[5].long_name;

        $ionicLoading.show({
          template: location,
          duration: 1500
        });
      })
      .error(function (data, status, headers, config) {
        console.log('Cannot obtain current location', reason);

        $ionicLoading.show({
          template: 'Nice  playing hide-and-seek, we can not find you.',
          duration: 1000
        });

        if (status == 0)
          console.log("Error", "Error occured from calling Google Maps API");
        else
          console.log("Error", data);
      });
  };

  $scope.GetGeoLocation = function () {

    GeoLocation.getCurrentPosition()
      .then(
        // success
        function (position) {
          console.log('Current location found');
          console.log('Current location Latitude: ' + position.coords.latitude);
          console.log('Current location Longitude: ' + position.coords.longitude);

          //$ionicLoading.hide();
          $scope.latitude = parseFloat(position.coords.latitude);
          $scope.longitude = parseFloat(position.coords.longitude);
          ReverseGeoCoding();
        },
        // failure
        function (reason) {
          console.log('Cannot obtain current location', reason);

          $ionicLoading.show({
            template: 'Nice playing hide-and-seek, we can not find you.',
            duration: 2000
          });
        });
  };

  $scope.ClearTrek = function () {
    SessionService.destroy('visited');
    // set California as a default state
    var visitedStatesNew = [];
    visitedStatesNew.push(5);
    SessionService.set('visited', visitedStatesNew);
    init();
  };

  init();
});
