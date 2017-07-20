angular.module('colorMyStates.controllers', [])

.controller('ColorCtrl', function($scope, $ionicLoading, $ionicPlatform, $http, $state, $ionicPopover, $ionicPopup, $timeout, $cordovaNativeAudio, States, SessionService) {

  var width = window.innerWidth; // width of canvas
  //alert(width);
  //var height = (width * (4 / 3)); // height of canvas
  var height = window.innerHeight * (3.0/4.0);
  //alert(height);

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
  canvas.freeDrawingBrush.width = 7; // size of the drawing brush
  $scope.brushcolor = 'rgba(255, 0, 0, 0.5)'; // set brushcolor to red to begin
  canvas.freeDrawingBrush.color = 'rgba(255, 0, 0, 0.5)';

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
    height: height,
    width: width
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
    {color: "rgba(0, 0, 128, 0.5)"},
    {color: "rgba(0, 0, 255, 0.5)"},
    {color: "rgba(0, 128, 0, 0.5)"},
    {color: "rgba(0, 128, 128, 0.5)"},
    {color: "rgba(0, 255, 0, 0.5)"},
    {color: "rgba(0, 255, 255, 0.5)"},
    {color: "rgba(128, 0, 0, 0.5)"},
    {color: "rgba(128, 0, 128, 0.5)"},
    {color: "rgba(128, 128, 0, 0.5)"},
    {color: "rgba(128, 128, 128, 0.5)"},
    {color: "rgba(255, 0, 0, 0.5)"},
    {color: "rgba(255, 0, 255, 0.5)"},
  ];

  $scope.changeBrushColor = function(color) {
    canvas.freeDrawingBrush.color = color;
    $scope.brushcolor = color; // used to change the color palatte icon's color
    $scope.popover.hide(); // hide popover
  };

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

  $scope.showStop = true;
  $scope.stop = function () {
    $cordovaNativeAudio.stop('music');
    $cordovaNativeAudio.unload('music');
    $scope.showStop = false;
  };

})

.controller('StatesCtrl', function($scope, $ionicPlatform, $ionicPopover, $http, GeoLocation, States) {
// With the new view caching in Ionic, Controllers are only called
// when they are recreated or on app start, instead of every page change.
// To listen for when this page is active (for example, to refresh data),
// listen for the $ionicView.enter event:
//
//$scope.$on('$ionicView.enter', function(e) {
//});

$scope.states = States.all();

// geo location options popover
$ionicPopover.fromTemplateUrl('templates/popup-geolocation.html', {
  scope: $scope
}).then(function(popover) {
  $scope.popover = popover;
});

var ReverseGeoCoding = function () {

  var googleMapsReverseGeoCodingAPI = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + $scope.latitude + ',' + $scope.longitude + '&key=AIzaSyASXfyZ4bfzlrx9aPRa3Nupqiw4DnQBy8I';

  $http.get(googleMapsReverseGeoCodingAPI)
    .success(function (response) {
      //var location = "Howdy Ranger! You are at : " + response.results[0].formatted_address;
      $scope.geoLocationMessage = response.results[0].address_components[5].long_name;
      alert($scope.geoLocationMessage);
      $scope.state = States.getByName($scope.geoLocationMessage);

    })
    .error(function (data, status, headers, config) {
      console.log('Cannot obtain current location', reason);
      $scope.geoLocationMessage = 'Nice playing hide-and-seek, we can not find you.';
    });
};

$scope.getGeoLocation = function () {

  GeoLocation.getCurrentPosition()
    .then(
      // success
      function (position) {

        $scope.latitude = parseFloat(position.coords.latitude);
        $scope.longitude = parseFloat(position.coords.longitude);
        ReverseGeoCoding();
      },
      // failure
      function (reason) {
        console.log('Cannot obtain current location', reason);

        $scope.geoLocationMessage = 'Nice playing hide-and-seek, we can not find you.';
      });
};

$scope.openLocationPopover = function($event) {
  $scope.getGeoLocation();
  $scope.popover.show($event);
};

$scope.closeLocationPopover = function() {
  $scope.popover.hide();
};

})

.controller('StateDetailCtrl', function($scope, $stateParams, $ionicPlatform, States) {
  $scope.state = States.get($stateParams.stateId);

  $scope.utterCapital = function () {
    $scope.showCapital = true;
    $ionicPlatform.ready(function() {
        TTS.speak({
            text: 'Capital of ' + $scope.state.name + ' is ' + $scope.state.capital,
            locale: 'en-UK',
            rate: 1.5
          },
          function () {},
          function (reason) {}
        )
      })
  };

  $scope.utterNickName = function () {
    $scope.showNickName = true;
    $ionicPlatform.ready(function() {
      TTS.speak({
          text: $scope.state.name + ' also known as ' + $scope.state.nickName,
          locale: 'en-CA',
          rate: 1.3
        },
        function () {},
        function (reason) {}
      )
    })
  };

  $scope.utterBorderState = function () {
    $scope.showBorderState = true;
    $ionicPlatform.ready(function() {
      TTS.speak({
          text: $scope.state.name + ' borders ' + $scope.state.borderState,
          locale: 'en-US',
          rate: 1.3
        },
        function () {},
        function (reason) {}
      )
    })
  };

})

.controller('TrekCtrl', function($scope, $stateParams, $http, $ionicPopover, States,SessionService) {

  var init = function () {
    $scope.visitedStates = States.visited();
  };

  $scope.clearTrek = function () {
    SessionService.destroy('visited');
    // set California as a default state
    var visitedStatesNew = [];
    visitedStatesNew.push(5);
    SessionService.set('visited', visitedStatesNew);
    init();
  };

  init();
});
