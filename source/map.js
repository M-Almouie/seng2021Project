function initMap() {

    function createMap(ID, zoom, center) {
        var map = new google.maps.Map(document.getElementById(ID), {
            zoom : zoom,
            center: center
        });
        return map;
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
        marker.addListener('mousemove', function tooggleBounce() {
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

    var map1 = createMap('map',17,unswQuadrangle);
    var map2 = createMap('mapSecond',17,unswQuadrangle);

    var friendImage = "img/MyTrackLogo.png";

    var me = createUserMarker(unswQuadrangle,map1);
    var marker1 = createFriendMarker(tartous, map1, friendImage);
    var marker2 = createFriendMarker(roseBay, map1, friendImage);
    var marker3 = createFriendMarker(unswLibrary, map1, friendImage);
    var marker4 = createFriendMarker(cse, map1, friendImage);
    var marker5 = createFriendMarker(sydney, map1, friendImage);
    var marker6 = createFriendMarker(coogee, map1, friendImage);

    var meString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">You Are Here</h1>'+
        '<div id="bodyContent">'+
        '<p>Mohamed Al Mouiee</p>'+
        '<p>Location: Randwick, Australia</p>'+
        '<p>Currently Active</p>'+
        '</div>'+
        '</div>';

    var joString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">John Smith</h1>'+
        '<div id="bodyContent">'+
        '<p>John Smith</p>'+
        '<p>Location: Rose Bay, Australia</p>'+
        '<p>Last Seen: 12:39pm 19/09/2017</p>'+
        '</div>'+
        '</div>';

    var boString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Some body</h1>'+
        '<div id="bodyContent">'+
        '<p>Some body</p>'+
        '<p>Location: Coogee, Australia</p>'+
        '<p>Last Seen: 12:39pm 19/09/2017</p>'+
        '</div>'+
        '</div>';

    var soString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Every body</h1>'+
        '<div id="bodyContent">'+
        '<p>Every body</p>'+
        '<p>Location: Randwick, Australia</p>'+
        '<p>Last Seen: 12:39pm 19/09/2017</p>'+
        '</div>'+
        '</div>';

    var moString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Every body</h1>'+
        '<div id="bodyContent">'+
        '<p>Every body</p>'+
        '<p>Location: Randwick, Australia</p>'+
        '<p>Last Seen: 12:39pm 19/09/2017</p>'+
        '</div>'+
        '</div>';

    var doString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Any body</h1>'+
        '<div id="bodyContent">'+
        '<p>Any Body</p>'+
        '<p>Location: Randwick, Australia</p>'+
        '<p>Last Seen: 12:39pm 19/09/2017</p>'+
        '</div>'+
        '</div>';

    var foString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">The body</h1>'+
        '<div id="bodyContent">'+
        '<p>The body</p>'+
        '<p>Location: Rose Bay</p>'+
        '<p>Last Seen: 12:39pm 19/09/2017</p>'+
        '</div>'+
        '</div>';

    var infowindow0 = WindowInfo(meString);
    createPopupBox(map1,me,infowindow0);

    var infowindow1 = WindowInfo(moString);
    createPopupBox(map1,marker1,infowindow1);

    var infowindow2 = WindowInfo(joString);
    createPopupBox(map1,marker2,infowindow2);

    var infowindow3 = WindowInfo(doString);
    createPopupBox(map1,marker3,infowindow3);

    var infowindow4 = WindowInfo(soString);
    createPopupBox(map1,marker4,infowindow4);

    var infowindow5 = WindowInfo(foString);
    createPopupBox(map1,marker5,infowindow5);

    var infowindow6 = WindowInfo(boString);
    createPopupBox(map1,marker6,infowindow6);

    startBounce(me);
    startBounce(marker1);
    startBounce(marker2);
    startBounce(marker3);
    startBounce(marker4);
    startBounce(marker5);
    startBounce(marker6);
}