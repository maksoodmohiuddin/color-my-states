angular.module('colorMyStates.services', [])

.factory('States', function() {
  // Might use a resource here that returns a JSON array

  var states = [{
    id: 1,
    name: 'Alabama',
    capital: 'Montgomery',
    nickName: 'Yellowhammer State',
    stateHood: 'December 14, 1819 -  22nd State',
    stateArea: '52,423 Square Miles -  30th largest',
    borderState: 'Florida | Georgia | Mississippi | Tennessee',
    highestPoint: 'Cheaha Mountain - 2,407 feet - 35th tallest',
    visited: false,
    map: 'img/alabama.gif'
  }, {
    id: 2,
    name: 'Alaska',
    capital: 'Juneau',
    nickName: 'The Last Frontier',
    stateHood: 'January 3, 1959 - 49th State',
    stateArea: '656,425 Square Miles -  Largest State!',
    borderState: 'None!',
    highestPoint: 'Mt. McKinley - 20,320 feet - Tallest!',
    visited: false,
    map: 'img/alaska.gif'
  }, {
    id: 3,
    name: 'Arizona',
    capital: 'Phoenix',
    nickName: 'The Grand Canyon State',
    stateHood: 'February 14, 1912 - 48th State',
    stateArea: '114,0006 Square Miles - 6th largest',
    borderState: 'California | Colorado | Nevada | New Mexico | Utah',
    highestPoint: 'Humphreys Peak - 12,633 feet - 12th tallest',
    visited: false,
    map: 'img/arizona.gif'
  },{
    id: 4,
    name: 'Arkansas',
    capital: 'Little Rock',
    nickName: 'The Natural State',
    stateHood: 'June 15, 1836 - 25th State',
    stateArea: '53,182 Square Miles - 29th largest',
    borderState: 'Louisiana | Mississippi | Missouri | Oklahoma | Tennessee | Texas',
    highestPoint: 'Magazine Mountain - 2,753 feet - 34th tallest',
    visited: false,
    map: 'img/arkansas.gif'
  },{
    id: 5,
    name: 'California',
    capital: 'Sacramento',
    nickName: 'The Golden State',
    stateHood: 'September 9, 1850 - 31st State',
    stateArea: '163,707 Square Miles - 3rd largest',
    borderState: 'Arizona, Nevada and Oregon',
    highestPoint: 'Mt. Whitney - 14,494 feet - 2nd tallest',
    visited: false,
    map: 'img/california.gif'
  },{
    id: 6,
    name: 'Colorado',
    capital: 'Denver',
    nickName: 'The Centennial State',
    stateHood: 'August 1, 1876 - 38th State',
    stateArea: '104,100 Square Miles - 8th largest',
    borderState: 'Arizona | Kansas | Nebraska | New Mexico | Oklahoma | Utah | Wyoming',
    highestPoint: 'Mt. Elbert - 14,433 feet - 3rd tallest',
    visited: false,
    map: 'img/colorado.gif'
  },{
    id: 7,
    name: 'Connecticut',
    capital: 'Hartford',
    nickName: 'The Constitution State',
    stateHood: 'January 9, 1788 - 5th State',
    stateArea: '5,544 Square Miles - 48th largest',
    borderState: 'Massachusetts | New York | Rhode Island',
    highestPoint: 'Mt. Frissell - 2,380 feet -  36th tallest',
    visited: false,
    map: 'img/Connecticut.gif'
  },{
    id: 8,
    name: 'Delaware',
    capital: 'Dover',
    nickName: 'The First State',
    stateHood: 'December 7, 1787 -  1st State!',
    stateArea: '2,489 Square Miles - 49th largest',
    borderState: 'Maryland | New Jersey | Pennsylvania',
    highestPoint: 'Ebright Azimuth - 442 feet - 49th tallest',
    visited: false,
    map: 'img/delaware.gif'
  },{
    id: 9,
    name: 'Florida',
    capital: 'Tallahassee',
    nickName: 'The Sunshine State',
    stateHood: 'March 3, 1845 - 27th State',
    stateArea: ' 65,758 Square Miles - 22nd largest',
    borderState: 'Alabama | Georgia',
    highestPoint: 'Britton Hill - 345 feet - 50th tallest',
    visited: false,
    map: 'img/florida.gif'
  },{
    id: 10,
    name: 'Georgia',
    capital: 'Atlanta',
    nickName: 'The Peach State',
    stateHood: 'January 2, 1788 - 4th State',
    stateArea: '59,441 Square Miles -  24th largest',
    borderState: 'Alabama | Florida | North Carolina | South Carolina | Tennessee',
    highestPoint: 'Brasstown Bald - 4,784 feet -  25th tallest',
    visited: false,
    map: 'img/georgia.gif'
  },{
    id: 11,
    name: 'Hawaii',
    capital: 'Honolulu',
    nickName: 'The Aloha State',
    stateHood: 'August 21, 1959 - 50th State!',
    stateArea: '10,932 Square Miles - 43rd largest',
    borderState: 'None!',
    highestPoint: 'Mauna Kea - 13,803 feet -  6th tallest',
    visited: false,
    map: 'img/hawaii.gif'
  },{
    id: 12,
    name: 'Idaho',
    capital: 'Boise',
    nickName: 'The Gem State',
    stateHood: 'July 3, 1890 - 43rd State',
    stateArea: '83,574 Square Miles - 14th largest',
    borderState: 'Montana | Nevada | Oregon | Utah | Washington | Wyoming',
    highestPoint: 'Borah Peak - 12,662 feet -  11th tallest',
    visited: false,
    map: 'img/idaho.gif'
  },{
    id: 13,
    name: 'Illinois',
    capital: 'Springfield',
    nickName: 'The Prairie State',
    stateHood: 'December 3, 1818 - 21st State',
    stateArea: '57,918 Square Miles - 25th largest',
    borderState: 'Indiana | Iowa | Michigan | Kentucky | Missouri | Wisconsin',
    highestPoint: 'Charles Mound - 1,235 feet - 45th tallest',
    visited: false,
    map: 'img/illinois.gif'
  },{
    id: 14,
    name: 'Indiana',
    capital: 'Indianapolis',
    nickName: 'The Last Fro',
    stateHood: 'December 11,1816 - 19th State',
    stateArea: '36,420 Square Miles - 38th largest',
    borderState: 'Illinois | Kentucky | Michigan | Ohio',
    highestPoint: 'Hoosier Hill - 1,257 feet - 44th tallest',
    visited: false,
    map: 'img/indiana.gif'
  },{
    id: 15,
    name: 'Iowa',
    capital: 'Des Moines',
    nickName: 'The Hawkeye State',
    stateHood: 'December 28, 1846 - 29th State',
    stateArea: '56,276 Square Miles - 26th largest',
    borderState: 'Illinois | Minnesota | Missouri | Nebraska | South Dakota | Wisconsin',
    highestPoint: 'Hawkeye Point - 1,670 feet - 42nd tallest',
    visited: false,
    map: 'img/iowa.gif'
  },{
    id: 16,
    name: 'Kansas',
    capital: 'Topeka',
    nickName: 'The Sunflower State',
    stateHood: 'January 29, 1861 - 34th State',
    stateArea: '82,282 Square Miles - 15th largest',
    borderState: 'Colorado | Missouri | Nebraska | Oklahoma',
    highestPoint: 'Mt. Sunflower - 4,039 feet - 28th tallest',
    visited: false,
    map: 'img/kansas.gif'
  },{
    id: 17,
    name: 'Kentucky',
    capital: 'Frankfort',
    nickName: 'The Bluegrass State',
    stateHood: 'June 1, 1792 - 15th State',
    stateArea: '40,411 Square Miles - 37th largest',
    borderState: 'Illinois | Indiana | Missouri | Ohio | Tennessee | Virginia | West Virginia',
    highestPoint: 'Black Mountain - 4,145 feet - 27th tallest',
    visited: false,
    map: 'img/kentucky.gif'
  },{
    id: 18,
    name: 'Louisiana',
    capital: 'Baton Rouge',
    nickName: 'The Pelican State',
    stateHood: 'April 30, 1812 - 18th State',
    stateArea: '51,843 Square Miles - 31st largest',
    borderState: 'Arkansas | Mississippi | Texas',
    highestPoint: 'Driskill Mountain - 535 feet - 48th tallest',
    visited: false,
    map: 'img/louisiana.gif'
  },{
    id: 19,
    name: 'Maine',
    capital: 'Augusta',
    nickName: 'The Pine Tree State',
    stateHood: 'March 15, 1820 - 23rd State',
    stateArea: '35,387 Square Miles - 39th largest',
    borderState: 'New Hampshire',
    highestPoint: 'Katahdin Mountain - 5,268 feet - 22nd tallest',
    visited: false,
    map: 'img/maine.gif'
  },{
    id: 20,
    name: 'Maryland',
    capital: 'Annapolis',
    nickName: 'The Old Line State',
    stateHood: 'April 28, 1788 - 7th State',
    stateArea: '12,407 Square Miles - 42nd largest',
    borderState: 'Delaware | Pennsylvania | Virginia | West Virginia',
    highestPoint: 'Backbone Mountain - 3,360 feet - 32nd tallest',
    visited: false,
    map: 'img/maryland.gif'
  },{
    id: 21,
    name: 'Massachusetts',
    capital: 'Boston',
    nickName: 'The Bay State',
    stateHood: 'February 6, 1788 - 6th State',
    stateArea: '10,555 Square Miles - 44th largest',
    borderState: 'Connecticut | New Hampshire | New York | Rhode Island | Vermont',
    highestPoint: 'Mt. Greylock - 3,491 feet - 31st tallest',
    visited: false,
    map: 'img/massachusetts.gif'
  },{
    id: 22,
    name: 'Michigan',
    capital: 'Lansing',
    nickName: 'The Great Lakes State',
    stateHood: 'January 26, 1837 - 26th State',
    stateArea: '96,810 sq.mi - 11th largest',
    borderState: 'Illinois | Indiana | Minnesota | Ohio | Wisconsin',
    highestPoint: 'Mt. Arvon - 1,980 feet - 38th tallest',
    visited: false,
    map: 'img/michigan.gif'
  },{
    id: 23,
    name: 'Minnesota',
    capital: 'St Paul',
    nickName: 'The North Star State',
    stateHood: 'May 11, 1858 - 32nd State',
    stateArea: '86,943 Square Miles - 12th largest',
    borderState: 'Iowa | Michigan | North Dakota | South Dakota | Wisconsin',
    highestPoint: 'Eagle Mountain - 2,301 feet - 37th tallest',
    visited: false,
    map: 'img/minnesota.gif'
  },{
    id: 24,
    name: 'Mississippi',
    capital: 'Jackson',
    nickName: 'The Magnolia State',
    stateHood: 'December 10, 1817 - 20th State',
    stateArea: '48,434 Square Miles -  32nd largest',
    borderState: 'Alabama | Arkansas | Louisiana | Tennessee',
    highestPoint: 'Woodall Mountain - 806 feet - 47th tallest',
    visited: false,
    map: 'img/mississippi.gif'
  },{
    id: 25,
    name: 'Missouri',
    capital: 'Jefferson City',
    nickName: 'The Shoe Me State',
    stateHood: 'August 10, 1821 - 24th State',
    stateArea: '69,709 Square Miles - 21st largest',
    borderState: 'Arkansas | Illinois | Iowa | Kansas | Kentucky | Nebraska | Oklahoma | Tennessee',
    highestPoint: 'Taum Sauk Mountain - 1,772 feet - 41st tallest',
    visited: false,
    map: 'img/missouri.gif'
  },{
    id: 26,
    name: 'Montana',
    capital: 'Helena',
    nickName: 'The Treasure State',
    stateHood: 'November 8,1889 - 41st State',
    stateArea: '147,046 Square Miles - 4th largest',
    borderState: 'Idaho | North Dakota | South Dakota | Wyoming',
    highestPoint: 'Granite Peak - 12,799 feet - 10th tallest',
    visited: false,
    map: 'img/montana.gif'
  },{
    id: 27,
    name: 'Nebraska',
    capital: 'Lincoln',
    nickName: 'The Cornhusker State',
    stateHood: 'March 1, 1867 - 37th State',
    stateArea: '77,358 Suare Miles - 16th largest',
    borderState: 'Colorado | Iowa | Kansas | Missouri | South Dakota | Wyoming',
    highestPoint: 'Panorama Point - 5,424 feet - 20th tallest',
    visited: false,
    map: 'img/nebraska.gif'
  },{
    id: 28,
    name: 'Nevada',
    capital: 'Carson City',
    nickName: 'The Silver State',
    stateHood: 'October 31, 1864 - 36th State',
    stateArea: '110,567 Square Miles - 7th largest',
    borderState: 'Arizona | California | Idaho | Oregon | Utah',
    highestPoint: 'Boundary Peak - 13,143 feet -  9th tallest',
    visited: false,
    map: 'img/nevada.gif'
  },{
    id: 29,
    name: 'New Hampshire',
    capital: 'Concord',
    nickName: 'The Granite State',
    stateHood: 'June 21, 1788 - 9th State',
    stateArea: '9,351 Suare Miles - 46th largest',
    borderState: 'Maine | Massachusetts | Vermont',
    highestPoint: 'Mt. Washington - 6,288 feet - 18th tallest',
    visited: false,
    map: 'img/new_hampshire.gif'
  },{
    id: 30,
    name: 'New Jersey',
    capital: 'Trenton',
    nickName: 'The Garden State',
    stateHood: 'December 18, 1787 - 3rd State',
    stateArea: '8,722 sq.mi - 47th largest',
    borderState: 'Delaware | New York | Pennsylvania',
    highestPoint: 'CHigh Point - 1,803 feet - 40th tallest',
    visited: false,
    map: 'img/new_jersey.gif'
  },{
    id: 31,
    name: 'New Mexico',
    capital: 'Santa Fe',
    nickName: 'The Land of Enchantment',
    stateHood: 'January 6, 1912 - 47th State',
    stateArea: '121,593 Square Miles - 5th largest',
    borderState: 'Arizona | Colorado | Oklahoma | Texas | Utah',
    highestPoint: 'Wheeler Peak - 13,161 feet - 8th tallest',
    visited: false,
    map: 'img/new_mexico.gif'
  },{
    id: 32,
    name: 'New York',
    capital: 'Albany',
    nickName: 'The Empire State',
    stateHood: 'July 26, 1788 - 11th State',
    stateArea: '54,475 Square Miles - 27th largest',
    borderState: 'Connecticut | Massachusetts | New Jersey | Pennsylvania | Rhode Island | Vermont',
    highestPoint: 'Mt. Marcy - 5,344 feet - 21st tallest',
    visited: false,
    map: 'img/new_york.gif'
  },{
    id: 33,
    name: 'North Carolina',
    capital: 'Raleigh',
    nickName: 'The Tar Heel State',
    stateHood: 'November 21, 1789 - 12th State',
    stateArea: '53,821 Square Miles - 28th largest',
    borderState: 'Georgia | South Carolina | Tennessee | Virginia',
    highestPoint: 'Mt. Mitchell - 6,684 feet - 16th tallest',
    visited: false,
    map: 'img/north_carolina.gif'
  },{
    id: 34,
    name: 'North Dakota',
    capital: 'Bismark',
    nickName: 'The Peach Garden State',
    stateHood: 'November 2,1889 - 40th State',
    stateArea: '70,704 sq.mi (183,123 sq.km.), 19th largest',
    borderState: 'Minnesota | Montana | South Dakota',
    highestPoint: 'White Butte - 3,506 feet - 30th tallest',
    visited: false,
    map: 'img/north_dakota.gif'
  },{
    id: 35,
    name: 'Ohio',
    capital: 'Columbus',
    nickName: 'The Buckeye State',
    stateHood: 'March 1, 1803 - 17th State',
    stateArea: '44,828 Square Miles - 34th largest',
    borderState: 'Indiana | Kentucky | Michigan | Pennsylvania | West Virginia',
    highestPoint: 'Campbell Hill - 1,550 feet - 43rd tallest',
    visited: false,
    map: 'img/ohio.gif'
  },{
    id: 36,
    name: 'Oklahoma',
    capital: 'Oklahoma City',
    nickName: 'The Sooner State',
    stateHood: 'November 16, 1907 (46th State)',
    stateArea: '69,903 sq.mi (181,048 sq.km.), 20th',
    borderState: 'Arkansas | Colorado | Kansas | Missouri | New Mexico | Texas',
    highestPoint: 'Black Mesa - 4,973 feet - 23rd tallest',
    visited: false,
    map: 'img/oklahoma.gif'
  },{
    id: 37,
    name: 'Oregon',
    capital: 'Salem',
    nickName: 'The Beaver State',
    stateHood: 'February 14, 1859 - 33rd State',
    stateArea: '98,386 Square Miles - 9th largest',
    borderState: 'California | Idaho | Nevada | Washington',
    highestPoint: 'Mount Hood - 11,239 feet - 13th tallest',
    visited: false,
    map: 'img/oregon.gif'
  },{
    id: 38,
    name: 'Pennsylvania',
    capital: 'Harrisburg',
    nickName: 'The Keystone State',
    stateHood: 'December 12, 1787 - 2nd State',
    stateArea: '46,058 Square Miles - 33rd largest',
    borderState: 'Delaware | Maryland | New Jersey | New York | Ohio | West Virginia',
    highestPoint: 'Mt. Davis - 3,213 feet - 33rd tallest',
    visited: false,
    map: 'img/pennsylvania.gif'
  },{
    id: 39,
    name: 'Rhode Island',
    capital: 'Providence',
    nickName: 'The Ocean State',
    stateHood: 'May 29, 1790 - 13th State',
    stateArea: ' 1,545 sq.mi - Smallest State!',
    borderState: 'Connecticut | Massachusetts | New York',
    highestPoint: 'Jerimoth Hill - 812 feet - 46th tallest',
    visited: false,
    map: 'img/rhode_island.gif'
  },{
    id: 40,
    name: 'South Carolina',
    capital: 'Columbia',
    nickName: 'The Palmetto State',
    stateHood: 'May 23, 1788 - 8th State',
    stateArea: '32,007 Square Miles - 40th largest',
    borderState: 'Georgia | North Carolina',
    highestPoint: 'Sassafras Mountain - 3,560 feet - 29th tallest',
    visited: false,
    map: 'img/south_carolina.gif'
  },{
    id: 41,
    name: 'South Dakota',
    capital: 'Pierre',
    nickName: 'The Mount Rushmore State',
    stateHood: 'November 2, 1889 - 40th State',
    stateArea: '77,121 Suare Miles - 17th largest',
    borderState: 'Iowa | Minnesota | Montana | Nebraska | North Dakota | Wyoming',
    highestPoint: 'Harney Peak - 7,242 feet - 15th tallest',
    visited: false,
    map: 'img/south_dakota.gif'
  },{
    id: 42,
    name: 'Tennessee',
    capital: 'Nashville',
    nickName: 'The Volunteer State',
    stateHood: 'June 1, 1796 - 16th State',
    stateArea: '42,146 Square Miles - 26th largest',
    borderState: 'Alabama | Arkansas | Georgia | Kentucky | Mississippi | Missouri | North Carolina | Virginia',
    highestPoint: 'Clingmans Dome - 6,643 feet - 17th tallest',
    visited: false,
    map: 'img/tennessee.gif'
  },{
    id: 43,
    name: 'Texas',
    capital: 'Austin',
    nickName: 'The Lonestate State',
    stateHood: 'December 29, 1845 - 28th State',
    stateArea: '268,601 Square Miles - 2nd largest',
    borderState: 'Arkansas | Louisiana | New Mexico | Oklahoma',
    highestPoint: 'Guadalupe Peak - 8,749 feet - 14th tallest',
    visited: false,
    map: 'img/texas.gif'
  },{
    id: 44,
    name: 'Utah',
    capital: 'Salt Lake City',
    nickName: 'The Beehive State',
    stateHood: 'January 4, 1896 - 45th State',
    stateArea: '84,904 Square Miles - 13th largest',
    borderState: 'Arizona | Colorado | Idaho | Nevada | New Mexico | Wyoming',
    highestPoint: 'Kings Peak - 13,528 feet - 7th tallest',
    visited: false,
    map: 'img/utah.gif'
  },{
    id: 45,
    name: 'Vermont',
    capital: 'Montpelier',
    nickName: 'The Green Mountain State',
    stateHood: 'March 4, 1791 - 14th State',
    stateArea: '9,615 Square Miles - 45th largest',
    borderState: 'Massachusetts | New Hampshire | New York',
    highestPoint: 'CMt. Mansfield - 4,393 feet - 26th tallest',
    visited: false,
    map: 'img/vermont.gif'
  },{
    id: 46,
    name: 'Virginia',
    capital: 'Richmond',
    nickName: 'The Old Dominion State',
    stateHood: 'June 25, 1788 - 10th State',
    stateArea: '42,769 Square Miles - 35th largest',
    borderState: 'Kentucky | Maryland | North Carolina | Tennessee | West Virginia',
    highestPoint: 'Mt. Rogers - 5,729 feet - 19th tallest',
    visited: false,
    map: 'img/virginia.gif'
  },{
    id: 47,
    name: 'Washington',
    capital: 'Olympia',
    nickName: 'The Evergreen State',
    stateHood: 'November 11, 1889 - 42nd State',
    stateArea: ' 71,303 Square Miles - 18th largest',
    borderState: 'Idaho | Oregon',
    highestPoint: 'Mt. Rainier - 14,410 feet - 4th tallest',
    visited: false,
    map: 'img/washington.gif'
  },{
    id: 48,
    name: 'West Virginia',
    capital: 'Charleston',
    nickName: 'The Mountain State',
    stateHood: 'June 20, 1863 - 35th State',
    stateArea: '24,231 Square Miles - 41st largest',
    borderState: 'Kentucky | Maryland | Ohio | Pennsylvania | Virginia',
    highestPoint: 'Spruce Knob - 4,863 feet - 24th tallest',
    visited: false,
    map: 'img/west_virginia.gif'
  },{
    id: 49,
    name: 'Wisconsin',
    capital: 'Madison',
    nickName: 'The Badger State',
    stateHood: 'May 29, 1848 - 30th State',
    stateArea: ' 65,503 Square Miles - 23rd largest',
    borderState: 'Illinois | Iowa | Michigan | Minnesota',
    highestPoint: 'Timms Hill - 1,951 feet - 39th tallest',
    visited: false,
    map: 'img/wisconsin.gif'
  },{
    id: 50,
    name: 'Wyoming',
    capital: 'Cheyenne',
    nickName: 'The Cowboy State',
    stateHood: 'July 10, 1890 - 44th State',
    stateArea: '97,818 Square Miles - 10th largest',
    borderState: 'Colorado | Idaho | Montana | Nebraska | South Dakota | Utah',
    highestPoint: 'Gannett Peak - 13,804 feet 5th tallest',
    visited: false,
    map: 'img/wyoming.gif'
  }];

  return {
    all: function() {
      return states;
    },
    visited: function() {
      var visitedKeys = localStorage.getItem('visited');
      var statesVisited = [];
      for (var i = 0; i < states.length; i++) {
        if (visitedKeys.indexOf(states[i].id) > -1) {
          states[i].visited = true;
          statesVisited.push(states[i]);
        }
      }
      return statesVisited;
    },
    get: function(stateId) {
      for (var i = 0; i < states.length; i++) {
        if (states[i].id === parseInt(stateId)) {
          return states[i];
        }
      }
      return null;
    },
    getByName: function(stateName) {
      for (var i = 0; i < states.length; i++) {
        if (states[i].name === parseInt(stateName)) {
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

.factory('SessionService',['$http',function($http){
  return {
    set:function(key,value){
      return localStorage.setItem(key,JSON.stringify(value));
    },
    get:function(key){
      return JSON.parse(localStorage.getItem(key));
    },
    destroy:function(key){
      return localStorage.removeItem(key);
    },
  };
}])
