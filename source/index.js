var util = require("util"),
my_http = require("http"),
url = require("url"),
filesys = require("fs"),
path = require("path");
var User = require("./user");
var db = require("./staticdb");
db.init();

function mapper(fIds,fnames,firstname) {
    var string = '    var friendImage = "img/MyTrackLogo.png";\n' +
    '    if (navigator.geolocation) {\n' +
    '        navigator.geolocation.getCurrentPosition(function (position) {\n' +
    '            var pos = {\n' +
    '                lat: position.coords.latitude,\n' +
    '                lng: position.coords.longitude\n' +
    '            };\n' +
    "            loginUser.location.lat = pos.lat;\n" +
    "            loginUser.location.lng = pos.lng;\n" +
    '            map1 = createMap(\'map\',17,pos,\'panorama1\');\n' +
    '            map2 = createMap(\'mapSecond\',17,pos,\'panorama2\');\n' +
    '            map1.setCenter(pos);\n' +
    '            map2.setCenter(pos);\n' +
    '            localStorage.setItem("map1",map1);\n'+
    '            name = '+firstname+';\n' +
    '            document.getElementById("myname").value = name;' +
    '            var me = createUserMarker(pos,map1);\n'+
    '            var marker1 = createFriendMarker(tartous, map1, friendImage,"john");\n' +
    '            var marker2 = createFriendMarker(roseBay, map1, friendImage,"john");\n' +
    '            var marker3 = createFriendMarker(unswLibrary, map1, friendImage,"john");\n' +
    '            var marker4 = createFriendMarker(cse, map1, friendImage,"john");\n' +
    '            var marker5 = createFriendMarker(sydney, map1, friendImage,"john");\n' +
    '            var marker6 = createFriendMarker(coogee, map1, friendImage,"john");\n' +
                'var meString = \'<div id="content">\'+\n' +
                '    \'<div id="siteNotice">\'+\n' +
                '    \'</div>\'+\n' +
                '    \'<h1 id="firstHeading" class="firstHeading">You Are Here</h1>\'+\n' +
                '    \'<div id="bodyContent">\'+\n' +
                '    \'<p>Mohamed Al Mouiee</p>\'+\n' +
                '    \'<p>Location: Randwick, Australia</p>\'+\n' +
                '    \'<p>Currently Active</p>\'+\n' +
                '    \'</div>\'+\n' +
                '    \'</div>\';\n' +
                '\n' +
                'var joString = \'<div id="content">\'+\n' +
                '    \'<div id="siteNotice">\'+\n' +
                '    \'</div>\'+\n' +
                '    \'<h1 id="firstHeading" class="firstHeading">John Smith</h1>\'+\n' +
                '    \'<div id="bodyContent">\'+\n' +
                '    \'<p>John Smith</p>\'+\n' +
                '    \'<p>Location: Rose Bay, Australia</p>\'+\n' +
                '    \'<p>Last Seen: 12:39pm 19/09/2017</p>\'+\n' +
                '    \'</div>\'+\n' +
                '    \'</div>\';\n' +
                '\n' +
                'var boString = \'<div id="content">\'+\n' +
                '    \'<div id="siteNotice">\'+\n' +
                '    \'</div>\'+\n' +
                '    \'<h1 id="firstHeading" class="firstHeading">Some body</h1>\'+\n' +
                '    \'<div id="bodyContent">\'+\n' +
                '    \'<p>Some body</p>\'+\n' +
                '    \'<p>Location: Coogee, Australia</p>\'+\n' +
                '    \'<p>Last Seen: 12:39pm 19/09/2017</p>\'+\n' +
                '    \'</div>\'+\n' +
                '    \'</div>\';\n' +
                '\n' +
                'var soString = \'<div id="content">\'+\n' +
                '    \'<div id="siteNotice">\'+\n' +
                '    \'</div>\'+\n' +
                '    \'<h1 id="firstHeading" class="firstHeading">Every body</h1>\'+\n' +
                '    \'<div id="bodyContent">\'+\n' +
                '    \'<p>Every body</p>\'+\n' +
                '    \'<p>Location: Randwick, Australia</p>\'+\n' +
                '    \'<p>Last Seen: 12:39pm 19/09/2017</p>\'+\n' +
                '    \'</div>\'+\n' +
                '    \'</div>\';\n' +
                '\n' +
                'var moString = \'<div id="content">\'+\n' +
                '    \'<div id="siteNotice">\'+\n' +
                '    \'</div>\'+\n' +
                '    \'<h1 id="firstHeading" class="firstHeading">Every body</h1>\'+\n' +
                '    \'<div id="bodyContent">\'+\n' +
                '    \'<p>Every body</p>\'+\n' +
                '    \'<p>Location: Randwick, Australia</p>\'+\n' +
                '    \'<p>Last Seen: 12:39pm 19/09/2017</p>\'+\n' +
                '    \'</div>\'+\n' +
                '    \'</div>\';\n' +
                '\n' +
                'var doString = \'<div id="content">\'+\n' +
                '    \'<div id="siteNotice">\'+\n' +
                '    \'</div>\'+\n' +
                '    \'<h1 id="firstHeading" class="firstHeading">Any body</h1>\'+\n' +
                '    \'<div id="bodyContent">\'+\n' +
                '    \'<p>Any Body</p>\'+\n' +
                '    \'<p>Location: Randwick, Australia</p>\'+\n' +
                '    \'<p>Last Seen: 12:39pm 19/09/2017</p>\'+\n' +
                '    \'</div>\'+\n' +
                '    \'</div>\';\n' +
                '\n' +
                'var foString = \'<div id="content">\'+\n' +
                '    \'<div id="siteNotice">\'+\n' +
                '    \'</div>\'+\n' +
                '    \'<h1 id="firstHeading" class="firstHeading">The body</h1>\'+\n' +
                '    \'<div id="bodyContent">\'+\n' +
                '    \'<p>The body</p>\'+\n' +
                '    \'<p>Location: Rose Bay</p>\'+\n' +
                '    \'<p>Last Seen: 12:39pm 19/09/2017</p>\'+\n' +
                '    \'</div>\'+\n' +
                '    \'</div>\';\n' +
                '\n' +
                'var infowindow0 = new google.maps.InfoWindow({\n' +
        '          content: meString\n' +
        '        });'+
                'me.addListener(\'click\', function() {\n' +
        '         setMapOnAll(null);\n' +
        '        });'+
                'var infowindow1 = WindowInfo(moString);\n' +
                'createPopupBox(map1,marker1,infowindow1);\n' +
                'var infowindow2 = WindowInfo(joString);\n' +
                'createPopupBox(map1,marker2,infowindow2);\n' +
                'var infowindow3 = WindowInfo(doString);\n' +
                'createPopupBox(map1,marker3,infowindow3);\n' +
                'var infowindow4 = WindowInfo(soString);\n' +
                'createPopupBox(map1,marker4,infowindow4);\n' +
                'var infowindow5 = WindowInfo(foString);\n' +
                'createPopupBox(map1,marker5,infowindow5);\n' +
                'var infowindow6 = WindowInfo(boString);\n' +
                'createPopupBox(map1,marker6,infowindow6);\n';
    var data = fnames;
    if(fIds) {
        for(var i = 0; i < fIds.length; i++) {
            if(fIds[i] == data) {
                loc = fIds[i].location;
                string += 'createFriendMarker('+loc+', map1, friendImage);\n';
            }
        }
    }
    string += '            startBounce(me);\n' +
              '            startBounce(marker1);\n' +
              '            startBounce(marker2);\n' +
              '            startBounce(marker3);\n' +
              '            startBounce(marker4);\n' +
              '            startBounce(marker5);\n' +
              '            startBounce(marker6);\n' +
              '            loginUser.location.lat = pos.lat\n' +
              '            loginUser.location.lng = pos.lng\n' +
              '\n' +
              '        }, function () {\n' +
              '            handleLocationError(true, map.getCenter());\n' +
              '        });\n' +
              '\n' +
              '    } else {\n' +
              '        // Browser doesn\'t support Geolocation\n' +
              '        handleLocationError(false, map.getCenter());\n' +
              '    }\n' +
              '}';
    return string;
}

my_http.createServer(function(request,response){
    var my_path = url.parse(request.url).pathname;
    var full_path = path.join(process.cwd(),my_path);
    filesys.exists(full_path,function(exists){
        if(!exists){
            response.writeHeader(404, {"Content-Type": "text/plain"});
            response.write("404 Not Found\n");
            response.end();
        }
        else{
            var body = "";
            request.on('data', function(chunk) {
                body+= chunk;
            });
            request.on('end', function() {
                if (my_path == "/mp1.html") {
                    console.log('body: ' + body);
                }
            });

            filesys.readFile(full_path, "binary", function (err, file) {
                if (err) {
                    response.writeHeader(500, {"Content-Type": "text/plain"});
                    response.write(err + "\n");
                    //response.end();
                }
                else {
                    response.writeHeader(200);
                    response.write(file, "binary");
                    if (my_path == "/mp1.html") {
                        mp2path = path.join(process.cwd(),"mp2.html");
                        filesys.readFile(mp2path, "binary", function (err, file) {
                            if (err) {
                                response.write(err + "\n");
                                response.end();
                            }
                            else {
                                //TODO parse info from post (is in var "body") and populate loginUser with this information
                                var coogee = {lat:-33.919981, lng:151.258340};
                                var loginInfo = body.replace(/ids=.+/,"");
                                var userInfo = loginInfo.match(/=.*?&/g);
                                loginInfo = "";
                                for(var i = 0; i < userInfo.length; i++) {
                                    userInfo[i] = userInfo[i].replace(/=/g," ");
                                    userInfo[i] = userInfo[i].replace(/&/g,"");
                                    loginInfo = loginInfo.concat(userInfo[i]);
                                }
                                var id = userInfo[0];
                                console.log("id :" + id);
                                var firstName = userInfo[1];
                                firstName = firstName.replace(/^.*? /,"");
                                var lastName = userInfo[2];
                                lastName = lastName.replace(/^.*? /,"");
                                lastName = lastName.replace(/\+/," ");
                                var email = userInfo[3];
                                email = email.replace(/^.*? /,"");
                                email = email.replace(/%[0-9]+/,"@");
                                console.log('LoginUser: ' + loginInfo);
                                var loginUser = User.createUser(id,firstName+lastName,email,"img/MyTrackLogo.png",coogee);
                                //console.log("friends" + db.getUsers(loginUser.getId()));
                                //TODO: instead of following content get users from static db and use that information
                                body += "&";
                                var friendsInfo = body.replace(/^.*friendids=/,"friendsids=");
                                var friends = friendsInfo.match(/=.*?&/g);
                                console.log("friends are:" +friends[0]);
                                var fids = friends[0];
                                fids = fids.replace(/%\w{2}/,",");
                                fids = fids.replace(/=/,"");
                                fids = fids.replace(/&/,"");
                                var fIds = fids.match(/\w+,?/);
                                var fnames = friends[1];
                                fnames = fnames.replace(/%\w{2}/,",");
                                fnames = fnames.replace(/=/,"");
                                fnames = fnames.replace(/&/,"");
                                var fNames = fnames.match(/\w+,?/);
                                console.log("first friend is: " +fNames[0]);
                                var variable = mapper(fIds,fnames,firstName);
                                response.write(variable)
                            }
                                console.log("user is at : "+loginUser.location.lat+", "+loginUser.location.lng);
                                response.write(file, "binary");
                                response.end();
                        });
                    }else {
                        response.end();
                    }
                }
            })
        }
    });
}).listen(8080);
console.log("Server Running on 8080");