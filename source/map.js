function initMap() {
    var sydney = {lat: -33.8688, lng: 151.2093};
    var unsw = {lat: -33.9173, lng: 151.2313};
    var tartous = {lat: 34.8959, lng: 35.8867};
    var roseBay = {lat: -33.8754, lng: 151.2656};
    var map1 = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: unsw
    });
    var map2 = new google.maps.Map(document.getElementById('mapSecond'), {
        zoom: 13,
        center: tartous
    });

    var friendImage = "img/MyTrackLogo.png";
    var me = new google.maps.Marker({
        position: unsw,
        map: map1,
        animation: google.maps.Animation.DROP,
    });
    var marker1 = new google.maps.Marker({
        position: sydney,
        map: map1,
        icon: friendImage,
        animation: google.maps.Animation.DROP,
    });
    var marker2 = new google.maps.Marker({
        position: roseBay,
        map: map1,
        icon: friendImage,
        animation: google.maps.Animation.Drop,
    });
    var marker3 = new google.maps.Marker({
        position: tartous,
        map: map2,
        icon: friendImage,
        animation: google.maps.Animation.Drop,
    });

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

    var moString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Mohamed Al Mouiee</h1>'+
        '<div id="bodyContent">'+
        '<p>Mohamed Al Mouiee</p>'+
        '<p>Location: Sydney</p>'+
        '<p>Last Seen: 12:39pm 19/09/2017</p>'+
        '</div>'+
        '</div>';

    var joString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">John Smith</h1>'+
        '<div id="bodyContent">'+
        '<p>John Smith</p>'+
        '<p>Location: Rose Bay</p>'+
        '<p>Last Seen: 12:39pm 19/09/2017</p>'+
        '</div>'+
        '</div>';

    var infowindow0 = new google.maps.InfoWindow({
        content: meString
    });

    var infowindow1 = new google.maps.InfoWindow({
        content: moString
    });
    var infowindow2 = new google.maps.InfoWindow({
        content: joString
    });

    me.addListener('click', function() {
        infowindow0.open(map1, me);
    });

    marker1.addListener('click', function() {
        infowindow1.open(map1, marker1);
    });
    marker2.addListener('click', function() {
        infowindow2.open(map1, marker2);
    });

    function toggleBounce0() {
        if (me.getAnimation() !== null) {
            me.setAnimation(null);
        } else {
            me.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

    function toggleBounce1() {
        if (marker1.getAnimation() !== null) {
            marker1.setAnimation(null);
        } else {
            marker1.setAnimation(google.maps.Animation.BOUNCE);
        }
    }
    function toggleBounce2() {
        if (marker2.getAnimation() !== null) {
            marker2.setAnimation(null);
        } else {
            marker2.setAnimation(google.maps.Animation.BOUNCE);
        }
    }
    function toggleBounce3() {
        if (marker3.getAnimation() !== null) {
            marker3.setAnimation(null);
        } else {
            marker3.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

    me.addListener('mousemove', toggleBounce0);
    marker1.addListener('click', toggleBounce1);
    marker2.addListener('click', toggleBounce2);
    marker3.addListener('click', toggleBounce3);
}