var map;
var center = new google.maps.LatLng(53.902579, 27.541974);
var myLatlng = new google.maps.LatLng(53.902579, 27.541974);
var infoboxcoord = new google.maps.LatLng(53.902579, 27.541974);
function initialize() {
  var mapOptions = {
    zoom: 15,
    center: center,
    scrollwheel: false
  };
  map = new google.maps.Map(document.getElementById('gmap'), mapOptions);
  /*var marker = new google.maps.Marker({
    'position': myLatlng
  });
  marker.setMap(map);*/
  /*var popup = new InfoBox({
    position: infoboxcoord,
    content: '<div class="gmap_info">ООО "ЭкспертЭнергоСервис"</div>',
    pixelOffset: new google.maps.Size(-300, 0),
    disableAutoPan: true,
    maxWidth: 150,
    boxStyle: {
    //background: "url('/sites/all/themes/uspeh/image/infobox.png') no-repeat",
    width: "332px",
    height: "208px"
    },
    //closeBoxMargin: "12px 12px 2px 2px",
    closeBoxURL: "",
    zIndex: null,
    //alignBottom: true,
  });
  popup.open(map);
  google.maps.event.addListener(marker, 'mouseover', function() {
    popup.open(map);
  });*/
  

  var contentString = '<div class="gmap_info">ООО "ЭкспертЭнергоСервис"</div>';
  var infowindow = new google.maps.InfoWindow({
      content: contentString,
      close: false
  });
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      //title: 'Uluru (Ayers Rock)'
  });
  /*google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
  });*/
  infowindow.open(map,marker);


  google.maps.event.addListener(map, "rightclick", function(event) {
      var lat = event.latLng.lat();
      var lng = event.latLng.lng();
      console.log("Lat=" + lat + "; Lng=" + lng);
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
