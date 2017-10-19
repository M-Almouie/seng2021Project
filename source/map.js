function initMap() {

    function createMap(ID, zoom, center,pano) {
        var map = new google.maps.Map(document.getElementById(ID), {
            zoom: zoom,
            center: center
        });
        var panorama = new google.maps.StreetViewPanorama(
            document.getElementById(pano), {
                position: center,
                pov: {
                    heading: 30,
                    pitch: 10
                }
            });
        map.setStreetView(panorama);
        return map;
    }

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
    }
    function createFriendMarker(position, map, icon) {
        var marker = new google.maps.Marker({
            position: position,
            map: map,
            icon: icon,
            animation: google.maps.Animation.DROP,
        });
        return marker;
    }

    function createUserMarker(position, map) {
        var marker = new google.maps.Marker({
            position: position,
            map: map,
            animation: google.maps.Animation.DROP,
        });
        return marker;
    }

    function WindowInfo(str) {
        var infowindow = new google.maps.InfoWindow({
            content: str
        });
        return infowindow;
    }
    function createPopupBox(map, marker, infowindow) {
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
    }

    function startBounce(marker) {
        marker.addListener('mousemove', function toggleBounce() {
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
            } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }
        });
    }



    var sydney = {lat: -33.8688, lng: 151.2093};
    var unsw = {lat: -33.9173, lng: 151.2313};
    var tartous = {lat: 34.8959, lng: 35.8867};
    var roseBay = {lat: -33.8754, lng: 151.2656};
    var unswLibrary = {lat:-33.917193,lng: 151.233255};
    var unswQuadrangle = {lat:-33.916999, lng:151.230279};
    var cse = {lat  : -33.918628, lng: 151.231132};
    var coogee = {lat:-33.919981, lng:151.258340};


    var friendImage = "img/MyTrackLogo.png";
    var map1;
    var map2;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            map1 = createMap('map',17,pos,'panorama1');
            map2 = createMap('mapSecond',17,pos,'panorama2');
            map1.setCenter(pos);
            map2.setCenter(pos);
            var me = createUserMarker(pos,map1);
            var marker1 = createFriendMarker(tartous, map1, friendImage);
            var marker2 = createFriendMarker(roseBay, map1, friendImage);
            var marker3 = createFriendMarker(unswLibrary, map1, friendImage);
            var marker4 = createFriendMarker(cse, map1, friendImage);
            var marker5 = createFriendMarker(sydney, map1, friendImage);
            var marker6 = createFriendMarker(coogee, map1, friendImage);

            startBounce(me);
            startBounce(marker1);
            startBounce(marker2);
            startBounce(marker3);
            startBounce(marker4);
            startBounce(marker5);
            startBounce(marker6);

        }, function () {
            handleLocationError(true, map.getCenter());
        });

    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, map.getCenter());
    }
}



