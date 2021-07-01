//google maps
  document.addEventListener('DOMContentLoaded', (pageReady) => {
  //preventing default actions
  document.getElementById("form").addEventListener('submit', function (e) {
    // validation code here
    e.preventDefault();
  });

  //Youtube api KEY
  var apiKey = 'AIzaSyDphEohRTk4qssurKERev65mubm3J4iY8k'
  var video = '';

  //Determine if form is searching
  document.getElementById("form").addEventListener('submit', function (event) {
    event.preventDefault()
    var address = document.getElementById('search').value;
    travelTitle = document.getElementById('ytSection');
    newsTitle = document.getElementById('newsSection');
    var search = 'Travel To ' + $("#search").val();
    travelTitle.innerHTML = search.toUpperCase();
    newsTitle.innerHTML = 'COVID NEWS IN ' + address.toUpperCase();
    videos(apiKey, search, 6)
  })
// VIDEO RESULTS
  function videos(key, search, maxResults) {
    $.get('https://www.googleapis.com/youtube/v3/search?key=' + key
      + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search, function (data) {
        $("#videos").empty();
        data.items.forEach(item => {
          video = `
        <iframe width="550" height="380" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
        `
          $("#videos").append(video);
        });
      })
  }
  $(".contentBox").hide();
    
  $('h4').click(
      function(){
      $(".contentBox").hide();
      $(this).next('.contentBox').slideToggle('300');
          
  });
  getCovidNews("CA");
  // videoControl();
})

function initMap() {
  const myLatlng = { lat: 43.668055994635324, lng: -79.36120249607745 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatlng,
  });

  // Create the initial InfoWindow.
  let infoWindow = new google.maps.InfoWindow({
    content: "Your Travel Destination",
    position: myLatlng,
  });
  infoWindow.open(map);

  // Configure the click listener.
  map.addListener("click", (mapsMouseEvent) => {
    console.log('mapsMouseEvent: ', mapsMouseEvent);
    // Close the current InfoWindow.
    infoWindow.close();

    // Create a new InfoWindow.
    infoWindow = new google.maps.InfoWindow({
      position: mapsMouseEvent.latLng,
    });
    infoWindow.setContent(
      JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
    );

    infoWindow.open(map);

    map.setCenter(mapsMouseEvent.latLng);
    map.setZoom(4);
    //Marker
    marker = new google.maps.Marker({
      position: sydney,
      map: map,
    });
  });

}
// Convert search result into a lat long coordinates
function getLatLng() {
  let obj = {};

  var geocoder = new google.maps.Geocoder();
  var address = document.getElementById('search').value;

  console.log("Address to be searched - ", address);

  geocoder.geocode({
    'address': address
  }, function (results, status) {

    if (status == google.maps.GeocoderStatus.OK) {
      var latitude = results[0].geometry.location.lat();
      var longitude = results[0].geometry.location.lng();

      obj['lat'] = latitude;
      obj['lng'] = longitude;

      findPlace(obj);
    }
  });

  console.log("lat long to be returned - ", obj);

  return obj;
}
// Get country name and call getLatLng();
//convert country name into country code for news api
function getAddress() {
  console.log("Button is clicked");
  let result = document.getElementById('search').value;
  getLatLng();
  const getCountryShortName = countries[result.toLowerCase()];
  getCovidNews(getCountryShortName);
}

// Find place from Search result and set InfoWindow to country
function findPlace(latLng) {
  //var map;
  var service;
  var infowindow;

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: latLng,
  });

  var latLngObj = new google.maps.LatLng(latLng.lat, latLng.lng);

  // Create the InfoWindow.
  let infoWindow = new google.maps.InfoWindow({
    content: document.getElementById('search').value,
    position: latLngObj,
  });
  infoWindow.open(map);

  infowindow = new google.maps.InfoWindow();

  map.setCenter(latLngObj);
  map.setZoom(6);
  //Marker
  marker = new google.maps.Marker({
    position: latLngObj,
    map: map,
  });
}

// COVID NEWS after search result has been entered
function getCovidNews(result) {
  fetch('https://covid-19-news.p.rapidapi.com/v1/covid?q=covid&lang=en&country=' + result + '&media=True', {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "2d2dea647fmsh577c57bb54abd69p13249djsn06827c6f1fe8",
      "x-rapidapi-host": "covid-19-news.p.rapidapi.com"
    }
  }).then(response => response.json())
    .then(data => {

      var news = document.querySelector('.news');
      news.innerHTML = null;
      
      for (let i = 0; i < 3; i++) {
        // var input = document.forms.theForm;
        //News Data that is outputted
        const imgSrc = data.articles[i].media ? data.articles[i].media : "https://cdn.abcotvs.com/dip/images/6084268_COVID-19-LATEST.jpg?w=1600";
        var newsData = `<div class="newsSlot">
      <img src="${imgSrc}" alt="headline image from each article">
      <p>${data.articles[i].title}</p>
      <p>${data.articles[i].summary}</p>

      <a href="${data.articles[i].link}">
        Continue Reading...
      </a>
      </div>`;
      news.innerHTML += newsData;
      }
    }).catch(err => {
      console.error(err);
    });
}

// Converting Country names to Codes
const countries = {
  'mexico': 'MX',
  'india': 'IN',
  'canada': 'CA',
  'france': 'FR',
  'usa': 'US',
  'america': 'US',
  'spain': 'ES',
  'china': 'CN',
  'italy': 'IT',
  'uk': 'UK',
  'germany': 'DE',
  'jamaica': 'JM',
  'cuba': 'CU',
  'dominican republic': 'DO',
  'australia': 'AU',
  'brazil': 'BR'
}
