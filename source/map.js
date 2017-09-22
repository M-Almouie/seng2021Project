function initMap() {
    var sydney = {lat: -33.8688, lng: 151.2093};
    var unsw = {lat: -33.9173, lng: 151.2313};
    var tartous = {lat: 34.8959, lng: 35.8867};
    var roseBay = {lat: -33.8754, lng: 151.2656};
    var unswLibrary = {lat:-33.917193,lng: 151.233255};
    var unswQuadrangle = {lat:-33.916999, lng:151.230279};
    var cse = {lat  : -33.918628, lng: 151.231132};
    var coogee = {lat:-33.919981, lng:151.258340};
    var map1 = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: unswQuadrangle
    });
    var map2 = new google.maps.Map(document.getElementById('mapSecond'), {
        zoom: 17,
        center: unswQuadrangle
    });

    var friendImage = "img/MyTrackLogo.png";
    var me = new google.maps.Marker({
        position: unswQuadrangle,
        map: map1,
        animation: google.maps.Animation.DROP,
    });
    var marker1 = new google.maps.Marker({
        position: tartous,
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
        position: unswLibrary,
        map: map1,
        icon: friendImage,
        animation: google.maps.Animation.Drop,
    });

    var marker4 = new google.maps.Marker({
        position: cse,
        map: map1,
        icon: friendImage,
        animation: google.maps.Animation.Drop,
    });

    var marker5 = new google.maps.Marker({
        position: sydney,
        map: map1,
        icon: friendImage,
        animation: google.maps.Animation.Drop,
    });

    var marker6 = new google.maps.Marker({
        position: coogee,
        map: map1,
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
        '<h1 id="firstHeading" class="firstHeading">No body</h1>'+
        '<div id="bodyContent">'+
        '<p>No Body</p>'+
        '<p>Location: tartous</p>'+
        '<p>Last Seen: 12:39pm 19/09/2017</p>'+
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

    var infowindow0 = new google.maps.InfoWindow({
        content: meString
    });

    var infowindow1 = new google.maps.InfoWindow({
        content: moString
    });
    var infowindow2 = new google.maps.InfoWindow({
        content: joString
    });

    var infowindow3 = new google.maps.InfoWindow({
        content: doString
    });

    var infowindow4 = new google.maps.InfoWindow({
        content: soString
    });

    var infowindow5 = new google.maps.InfoWindow({
        content: foString
    });

    var infowindow6 = new google.maps.InfoWindow({
        content: boString
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

    marker3.addListener('click', function() {
        infowindow3.open(map1, marker3);
    });

    marker4.addListener('click', function() {
        infowindow4.open(map1, marker4);
    });

    marker5.addListener('click', function() {
        infowindow5.open(map1, marker5);
    });

    marker6.addListener('click', function() {
        infowindow6.open(map1, marker6);
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

    function toggleBounce4() {
        if (marker4.getAnimation() !== null) {
            marker4.setAnimation(null);
        } else {
            marker4.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

    function toggleBounce5() {
        if (marker5.getAnimation() !== null) {
            marker5.setAnimation(null);
        } else {
            marker5.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

    function toggleBounce6() {
        if (marker6.getAnimation() !== null) {
            marker6.setAnimation(null);
        } else {
            marker6.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

    me.addListener('mousemove', toggleBounce0);
    marker1.addListener('mousemove', toggleBounce1);
    marker2.addListener('mousemove', toggleBounce2);
    marker3.addListener('mousemove', toggleBounce3);
    marker4.addListener('mousemove', toggleBounce4);
    marker5.addListener('mousemove', toggleBounce5);
    marker6.addListener('mousemove', toggleBounce6);
}