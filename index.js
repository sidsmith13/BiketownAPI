var COORD_API_access_key = 'HZey4MiUv8ZWVM80IBvEXiIcfen_nnlcI9T4d9vfptI';
var BIKE_API_URL = 'https://api.coord.co/v1/bike';
var Portland_CENTER = { lat: 45.512231, lng: -122.658719 };
var SEARCH_RADIUS_KM = .4;
//Bike system in Portland
var LEGEND_ITEMS = [
  'BiketownPDX',
];
var FREE_BIKE_LOCATION_TYPE = 'free_bike';
var SYSTEM_TO_ICON; // Mapping of system ID to icon information.const Google_Map_URL = 'https://maps.googleapis.com/maps/api/js';
const Google_Map_Key = 'AIzaSyBcdfUt038ajwHRbJEHclvnxARbQ23Lzn4';
let markers = [];
let loc = {};
function initMap() {
  map = new google.maps.Map
    (document.getElementById('map'), {
      zoom: 13,
      //Centered on Portland
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
      //test
      scaleControl: true,
      streetViewControl: true,
      streetViewControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP
      },
      fullscreenControl: true
    });
}
//Bagdad Theater
function brewButton() {
    //Bagdad Theater Location
    loc.lat = 45.51173;
    loc.lng = -122.62543;
    let bikeQueryUrl = 'https://api.coord.co/v1/bike/location' + '?latitude=' + loc.lat + '&longitude=' + loc.lng + '&radius_km=0.4' + '&access_key=' + 'HZey4MiUv8ZWVM80IBvEXiIcfen_nnlcI9T4d9vfptI';
    $.getJSON(bikeQueryUrl, function (APIresult) {
      while(markers.length){ markers.pop().setMap(null); };
      $.each(APIresult, function (i, field) {
        for (let i = 0; i < APIresult.features.length; i++) {
          var myLatlng = { lat: APIresult.features[i].properties.lat, lng: APIresult.features[i].properties.lon };
          var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: APIresult.features[i].properties.name + ' , Number of Bikes ' + APIresult.features[i].properties.num_bikes_available,
          });
          markers.push(marker);
        };
      });
      map.setCenter(loc);
    });
}
//Mills End Park - Smallest Park
function parkButton() {
    //Mills End Park Location
    loc.lat = 45.516282;
    loc.lng = -122.673863;
    let bikeQueryUrl = 'https://api.coord.co/v1/bike/location' + '?latitude=' + loc.lat + '&longitude=' + loc.lng + '&radius_km=0.25' + '&access_key=' + 'HZey4MiUv8ZWVM80IBvEXiIcfen_nnlcI9T4d9vfptI';
    $.getJSON(bikeQueryUrl, function (APIresult) {
      while(markers.length){ markers.pop().setMap(null); };
      $.each(APIresult, function (i, field) {
        for (let i = 0; i < APIresult.features.length; i++) {
          var myLatlng = { lat: APIresult.features[i].properties.lat, lng: APIresult.features[i].properties.lon };
          var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: APIresult.features[i].properties.name + ' , Number of Bikes ' + APIresult.features[i].properties.num_bikes_available,
          });
                 markers.push(marker);
        };
      });
      map.setCenter(loc);
    });
}
//Pose under the Keep Portland Weird Sign
function poseButton() {
    //Vicinity of the Keep Portland Weird Sign
    loc.lat = 45.522682;
    loc.lng = -122.662748;
    let bikeQueryUrl = 'https://api.coord.co/v1/bike/location' + '?latitude=' + loc.lat + '&longitude=' + loc.lng + '&radius_km=0.25' + '&access_key=' + 'HZey4MiUv8ZWVM80IBvEXiIcfen_nnlcI9T4d9vfptI';
    $.getJSON(bikeQueryUrl, function (APIresult) {
      while(markers.length){ markers.pop().setMap(null); };
      $.each(APIresult, function (i, field) {
        // $("div").append(field + " ");
        for (let i = 0; i < APIresult.features.length; i++) {
          var myLatlng = { lat: APIresult.features[i].properties.lat, lng: APIresult.features[i].properties.lon };
          var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: APIresult.features[i].properties.name + ' , Number of Bikes ' + APIresult.features[i].properties.num_bikes_available,
          });
                 markers.push(marker);
        };
      });
      map.setCenter(loc);
    });
}
//Rose Test Garden
function roseButton() {
    //Portland International Test Garden
    loc.lat = 45.519867;
    loc.lng = -122.70799;
    let bikeQueryUrl = 'https://api.coord.co/v1/bike/location' + '?latitude=' + loc.lat + '&longitude=' + loc.lng + '&radius_km=0.4' + '&access_key=' + 'HZey4MiUv8ZWVM80IBvEXiIcfen_nnlcI9T4d9vfptI';
    $.getJSON(bikeQueryUrl, function (APIresult) {
      while(markers.length){ markers.pop().setMap(null); };
      $.each(APIresult, function (i, field) {
        // $("div").append(field + " ");
        for (let i = 0; i < APIresult.features.length; i++) {
          var myLatlng = { lat: APIresult.features[i].properties.lat, lng: APIresult.features[i].properties.lon };
          var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: APIresult.features[i].properties.name + ' , Number of Bikes ' + APIresult.features[i].properties.num_bikes_available,
          });
                 markers.push(marker);
        };
      });
      map.setCenter(loc);
    });
}
let map;
