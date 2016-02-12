		  function initialize() {
		    var mapCanvas = document.getElementById('pop-up');
		    var myCenter = new google.maps.LatLng(30.3137528,-97.7199112);
		    var mapOptions = {
		      center: myCenter,
		      zoom: 18,
		      mapTypeId: google.maps.MapTypeId.ROADMAP,
		      scrollwheel: false
		    }
		    var icon = { 
			    url: '/images/flightpath-logo.svg' 
			};
		    var map = new google.maps.Map(mapCanvas, mapOptions);
		    var marker = new google.maps.Marker({
			    position: myCenter,
			    map: map,
			    icon: icon
			});
		    var styles = [
			  {
			    stylers: [
			      { hue: "#FCE38A" },
			      { saturation: 50}
			    ]
			  },{
			    featureType: "road",
			    elementType: "geometry",
			    stylers: [
			      { lightness: 100 },
			      { visibility: "simplified" }
			    ]
			  },{
			    featureType: "road",
			    elementType: "labels",
			    stylers: [
			      { visibility: "on" }
			    ]
			  }
			];

			map.setOptions({styles: styles});
		  }

		  google.maps.event.addDomListener(window, 'load', initialize);

