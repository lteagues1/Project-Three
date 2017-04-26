<h3>My Google Map</h3>
    <div id="map"></div>
    <script>
      function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById, ('map')), {
	    {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
    </script>
    <script async defer
		  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBnB10orqxcRBq3AAVTYeZHFpgqrh6XD30&callback=initMap">
	 </script>
