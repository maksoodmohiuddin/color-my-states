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
  }, {
    id: 3,
    name: 'Arizona',
    capital: 'Phoenix',
    nickName: 'The Grand Canyon State',
    map: 'img/arizona.gif'
  },{
    id: 4,
    name: 'Arkansas',
    capital: 'Little Rock',
    nickName: 'The Natural State',
    map: 'img/arkansas.gif'
  },{
    id: 5,
    name: 'California',
    capital: 'Sacramento',
    nickName: 'The Golden State',
    map: 'img/california.gif'
  },{
    id: 6,
    name: 'Colorado',
    capital: 'Denver',
    nickName: 'The Centennial State',
    map: 'img/colorado.gif'
  },{
    id: 7,
    name: 'Connecticut',
    capital: 'Hartford',
    nickName: 'The Constitution State',
    map: 'img/Connecticut.gif'
  },{
    id: 8,
    name: 'Delaware',
    capital: 'Dover',
    nickName: 'The First State',
    map: 'img/delaware.gif'
  },{
    id: 9,
    name: 'Florida',
    capital: 'Tallahassee',
    nickName: 'The Sunshine State',
    map: 'img/florida.gif'
  },{
    id: 10,
    name: 'Georgia',
    capital: 'Atlanta',
    nickName: 'The Peach State',
    map: 'img/georgia.gif'
  },{
    id: 11,
    name: 'Hawaii',
    capital: 'Honolulu',
    nickName: 'The Aloha State',
    map: 'img/hawaii.gif'
  },{
    id: 12,
    name: 'Idaho',
    capital: 'Boise',
    nickName: 'The Gem State',
    map: 'img/idaho.gif'
  },{
    id: 13,
    name: 'Illinois',
    capital: 'Springfield',
    nickName: 'The Prairie State',
    map: 'img/illinois.gif'
  },{
    id: 14,
    name: 'Indiana',
    capital: 'Indianapolis',
    nickName: 'The Last Fro',
    map: 'img/indiana.gif'
  },{
    id: 15,
    name: 'Iowa',
    capital: 'Des Moines',
    nickName: 'The Hawkeye State',
    map: 'img/iowa.gif'
  },{
    id: 16,
    name: 'Kansas',
    capital: 'Topeka',
    nickName: 'The Sunflower State',
    map: 'img/kansas.gif'
  },{
    id: 17,
    name: 'Kentucky',
    capital: 'Frankfort',
    nickName: 'The Bluegrass State',
    map: 'img/kentucky.gif'
  },{
    id: 18,
    name: 'Louisiana',
    capital: 'Baton Rouge',
    nickName: 'The Pelican State',
    map: 'img/louisiana.gif'
  },{
    id: 19,
    name: 'Maine',
    capital: 'Augusta',
    nickName: 'The Pine Tree State',
    map: 'img/maine.gif'
  },{
    id: 20,
    name: 'Maryland',
    capital: 'Annapolis',
    nickName: 'The Old Line State',
    map: 'img/maryland.gif'
  },{
    id: 21,
    name: 'Massachusetts',
    capital: 'Boston',
    nickName: 'The Bay State',
    map: 'img/massachusetts.gif'
  },{
    id: 22,
    name: 'Michigan',
    capital: 'Lansing',
    nickName: 'The Great Lakes State',
    map: 'img/michigan.gif'
  },{
    id: 23,
    name: 'Minnesota',
    capital: 'St Paul',
    nickName: 'The North Star State',
    map: 'img/minnesota.gif'
  },{
    id: 24,
    name: 'Mississippi',
    capital: 'Jackson',
    nickName: 'The Magnolia State',
    map: 'img/mississippi.gif'
  },{
    id: 25,
    name: 'Missouri',
    capital: 'Jefferson City',
    nickName: 'The Shoe Me State',
    map: 'img/missouri.gif'
  },{
    id: 26,
    name: 'Montana',
    capital: 'Helena',
    nickName: 'The Treasure State',
    map: 'img/montana.gif'
  },{
    id: 27,
    name: 'Nebraska',
    capital: 'Lincoln',
    nickName: 'The Cornhusker State',
    map: 'img/nebraska.gif'
  },{
    id: 28,
    name: 'Nevada',
    capital: 'Carson City',
    nickName: 'The Silver State',
    map: 'img/nevada.gif'
  },{
    id: 29,
    name: 'New Hampshire',
    capital: 'Concord',
    nickName: 'The Granite State',
    map: 'img/new_hampshire.gif'
  },{
    id: 30,
    name: 'New Jersey',
    capital: 'Trenton',
    nickName: 'The Garden State',
    map: 'img/new_jersey.gif'
  },{
    id: 31,
    name: 'New Mexico',
    capital: 'Santa Fe',
    nickName: 'The Land of Enchantment',
    map: 'img/new_mexico.gif'
  },{
    id: 32,
    name: 'New York',
    capital: 'Albany',
    nickName: 'The Empire State',
    map: 'img/new_york.gif'
  },{
    id: 33,
    name: 'North Carolina',
    capital: 'Raleigh',
    nickName: 'The Tar Heel State',
    map: 'img/north_carolina.gif'
  },{
    id: 34,
    name: 'North Dakota',
    capital: 'Bismark',
    nickName: 'The Peach Garden State',
    map: 'img/north_dakota.gif'
  },{
    id: 35,
    name: 'Ohio',
    capital: 'Columbus',
    nickName: 'The Buckeye State',
    map: 'img/ohio.gif'
  },{
    id: 36,
    name: 'Oklahoma',
    capital: 'Oklahoma City',
    nickName: 'The Sooner State',
    map: 'img/oklahoma.gif'
  },{
    id: 37,
    name: 'Oregon',
    capital: 'Salem',
    nickName: 'The Beaver State',
    map: 'img/oregon.gif'
  },{
    id: 38,
    name: 'Pennsylvania',
    capital: 'Harrisburg',
    nickName: 'The Keystone State',
    map: 'img/pennsylvania.gif'
  },{
    id: 39,
    name: 'Rhode Island',
    capital: 'Providence',
    nickName: 'The Ocean State',
    map: 'img/rhode_island.gif'
  },{
    id: 40,
    name: 'South Carolina',
    capital: 'Columbia',
    nickName: 'The Palmetto State',
    map: 'img/south_carolina.gif'
  },{
    id: 41,
    name: 'South Dakota',
    capital: 'Pierre',
    nickName: 'The Mount Rushmore State',
    map: 'img/south_dakota.gif'
  },{
    id: 42,
    name: 'Tennessee',
    capital: 'Nashville',
    nickName: 'The Volunteer State',
    map: 'img/tennessee.gif'
  },{
    id: 43,
    name: 'Texas',
    capital: 'Austin',
    nickName: 'The Lonestate State',
    map: 'img/texas.gif'
  },{
    id: 44,
    name: 'Utah',
    capital: 'Salt Lake City',
    nickName: 'The Beehive State',
    map: 'img/utah.gif'
  },{
    id: 45,
    name: 'Vermont',
    capital: 'Montpelier',
    nickName: 'The Green Mountain State',
    map: 'img/vermont.gif'
  },{
    id: 46,
    name: 'Virginia',
    capital: 'Richmond',
    nickName: 'The Old Dominion State',
    map: 'img/virginia.gif'
  },{
    id: 47,
    name: 'Washington',
    capital: 'Olympia',
    nickName: 'The Evergreen State',
    map: 'img/washington.gif'
  },{
    id: 48,
    name: 'West Virginia',
    capital: 'Charleston',
    nickName: 'The Mountain State',
    map: 'img/west_virginia.gif'
  },{
    id: 49,
    name: 'Wisconsin',
    capital: 'Madison',
    nickName: 'The Badger State',
    map: 'img/wisconsin.gif'
  },{
    id: 50,
    name: 'Wyoming',
    capital: 'Cheyenne',
    nickName: 'The Cowboy State',
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

