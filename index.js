/******************************************* Constants *******************************************/

// Your Coord API key.
var COORD_API_access_key = 'HZey4MiUv8ZWVM80IBvEXiIcfen_nnlcI9T4d9vfptI';
var BIKE_API_URL = 'https://api.coord.co/v1/bike';
var Portland_CENTER = { lat: 45.512231, lng: -122.658719 };
var SEARCH_RADIUS_KM = 1;
var LEGEND_ITEMS = [
  'BiketownPDX',
];
var FREE_BIKE_LOCATION_TYPE = 'free_bike';
var SYSTEM_TO_ICON; // Mapping of system ID to icon information.const Google_Map_URL = 'https://maps.googleapis.com/maps/api/js';
const Google_Map_Key = 'AIzaSyBcdfUt038ajwHRbJEHclvnxARbQ23Lzn4';
let loc = {};
function initMap() {
  map = new google.maps.Map
    (document.getElementById('map'), {
      zoom: 13,
      center: { lat: 45.532513, lng: -122.684018 },

      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.TOP_CENTER
      },
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_CENTER
      },
      scaleControl: true,
      streetViewControl: true,
      streetViewControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP
      },
      fullscreenControl: true
    });
}
function startButton() {
  let promise = new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
  promise.then(function (results) {
    console.log(results.coords);
    loc.lat = results.coords.latitude;
    loc.lng = results.coords.longitude;
    let bikeQueryUrl = 'https://api.coord.co/v1/bike/location' + '?latitude=' + loc.lat + '&longitude=' + loc.lng + '&radius_km=0.25' + '&access_key=' + 'HZey4MiUv8ZWVM80IBvEXiIcfen_nnlcI9T4d9vfptI';
    $.getJSON(bikeQueryUrl, function (APIresult) {
      console.log(bikeQueryUrl);
      $.each(APIresult, function (i, field) {
        // $("div").append(field + " ");
        for (let i = 0; i < APIresult.features.length; i++) {
          console.log(APIresult.features[i]);
          console.log(APIresult.features[i].properties.name);
          var myLatlng = {lat: APIresult.features[i].properties.lat,lng: APIresult.features[i].properties.lon};        
          var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title:APIresult.features[i].properties.name + ' , Number of Bikes ' + APIresult.features[i].properties.num_bikes_available,
          });
        };
      });
    });
    map.setCenter(loc);
  });
}
let map;

// function renderBikeResult(data, items) {

//   for (let i = 0; i < data.items.length; i++) {
//     $('.js-output').append(`coordinates<li>${data.items[i].type.geometry.coordinates}></div>`);
//   }
// }
  // console.log(features.[i].properties.lat);

// function renderBikes() {
//   let url = 'https://api.coord.co/v1/bike/location' + '?latitude=' + loc.lat + '&longitude=' + loc.lng + '&radius_km=.1&access_key=' + 'HZey4MiUv8ZWVM80IBvEXiIcfen_nnlcI9T4d9vfptI';
//   getRequest(url).then(function(bikes) {
//     if (!bikes.features) {
//       return;
//     })
//   }
// }
