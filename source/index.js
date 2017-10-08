var util = require("util"),
my_http = require("http"),
url = require("url"),
filesys = require("fs"),
path = require("path");
var User = require("./user");
var db = require("./staticdb");

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
                console.log('body: ' + body);
            })
            db.init();

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
                                //console.log(err);
                                response.write(err + "\n");
                                response.end();
                                //console.log("fail");
                            }
                            else {
                                var coogee = {lat:-33.919981, lng:151.258340};
                                var loginUser = User.createUser("882288945281052", "Martin Hemmingsen", "martin@hemmingsens.dk", "img/MyTrackLogo.png",coogee, null);

                                console.log("friends" + db.getUsers(loginUser.getId()));

                                response.write("var map1 = createMap('map',17,unswQuadrangle);");
                                response.write('var map2 = createMap(\'mapSecond\',17,unswQuadrangle);\n' +
                                    '\n' +
                                    'var friendImage = "img/MyTrackLogo.png";\n' +
                                    '\n' +
                                    'var me = createUserMarker(' + loginUser.getLocation() + ',' + "map1);\n" +
                                    'var marker1 = createFriendMarker(tartous, map1, friendImage);\n' +
                                    'var marker2 = createFriendMarker(roseBay, map1, friendImage);\n' +
                                    'var marker3 = createFriendMarker(unswLibrary, map1, friendImage);\n' +
                                    'var marker4 = createFriendMarker(cse, map1, friendImage);\n' +
                                    'var marker5 = createFriendMarker(sydney, map1, friendImage);\n' +
                                    'var marker6 = createFriendMarker(coogee, map1, friendImage);\n' +
                                    '\n' +

                                    '\n' +
                                    'var joString = \'<div id="content">\'+\n' +
                                    '    \'<div id="siteNotice">\'+\n' +
                                    '        \'</div>\'+\n' +
                                    '    \'<h1 id="firstHeading" class="firstHeading">John Smith</h1>\'+\n' +
                                    '    \'<div id="bodyContent">\'+\n' +
                                    '        \'<p>John Smith</p>\'+\n' +
                                    '        \'<p>Location: Rose Bay, Australia</p>\'+\n' +
                                    '        \'<p>Last Seen: 12:39pm 19/09/2017</p>\'+\n' +
                                    '        \'</div>\'+\n' +
                                    '    \'</div>\';\n' +
                                    '\n' +
                                    'var boString = \'<div id="content">\'+\n' +
                                    '    \'<div id="siteNotice">\'+\n' +
                                    '        \'</div>\'+\n' +
                                    '    \'<h1 id="firstHeading" class="firstHeading">Some body</h1>\'+\n' +
                                    '    \'<div id="bodyContent">\'+\n' +
                                    '        \'<p>Some body</p>\'+\n' +
                                    '        \'<p>Location: Coogee, Australia</p>\'+\n' +
                                    '        \'<p>Last Seen: 12:39pm 19/09/2017</p>\'+\n' +
                                    '        \'</div>\'+\n' +
                                    '    \'</div>\';\n' +
                                    '\n' +
                                    'var soString = \'<div id="content">\'+\n' +
                                    '    \'<div id="siteNotice">\'+\n' +
                                    '        \'</div>\'+\n' +
                                    '    \'<h1 id="firstHeading" class="firstHeading">Eveeery body</h1>\'+\n' +
                                    '    \'<div id="bodyContent">\'+\n' +
                                    '        \'<p>Eveeery body</p>\'+\n' +
                                    '        \'<p>Location: Randwick, Australia</p>\'+\n' +
                                    '        \'<p>Last Seen: 12:39pm 19/09/2017</p>\'+\n' +
                                    '        \'</div>\'+\n' +
                                    '    \'</div>\';\n' +
                                    '\n' +
                                    'var moString = \'<div id="content">\'+\n' +
                                    '    \'<div id="siteNotice">\'+\n' +
                                    '        \'</div>\'+\n' +
                                    '    \'<h1 id="firstHeading" class="firstHeading">Eveeery body</h1>\'+\n' +
                                    '    \'<div id="bodyContent">\'+\n' +
                                    '        \'<p>Eveeery body</p>\'+\n' +
                                    '        \'<p>Location: Randwick, Australia</p>\'+\n' +
                                    '        \'<p>Last Seen: 12:39pm 19/09/2017</p>\'+\n' +
                                    '        \'</div>\'+\n' +
                                    '    \'</div>\';\n' +
                                    '\n' +
                                    'var doString = \'<div id="content">\'+\n' +
                                    '    \'<div id="siteNotice">\'+\n' +
                                    '        \'</div>\'+\n' +
                                    '    \'<h1 id="firstHeading" class="firstHeading">Any body</h1>\'+\n' +
                                    '    \'<div id="bodyContent">\'+\n' +
                                    '        \'<p>Any Body</p>\'+\n' +
                                    '        \'<p>Location: Randwick, Australia</p>\'+\n' +
                                    '        \'<p>Last Seen: 12:39pm 19/09/2017</p>\'+\n' +
                                    '        \'</div>\'+\n' +
                                    '    \'</div>\';\n' +
                                    '\n' +
                                    'var foString = \'<div id="content">\'+\n' +
                                    '    \'<div id="siteNotice">\'+\n' +
                                    '        \'</div>\'+\n' +
                                    '    \'<h1 id="firstHeading" class="firstHeading">The body</h1>\'+\n' +
                                    '    \'<div id="bodyContent">\'+\n' +
                                    '        \'<p>The body</p>\'+\n' +
                                    '        \'<p>Location: Rose Bay</p>\'+\n' +
                                    '        \'<p>Last Seen: 12:39pm 19/09/2017</p>\'+\n' +
                                    '        \'</div>\'+\n' +
                                    '    \'</div>\';' +
                                    'var infowindow0 = WindowInfo(\'' + loginUser.getText() + '\');\n' +
                                    'createPopupBox(map1,me,infowindow0);\n' +
                                    '\n' +
                                    'var infowindow1 = WindowInfo(moString);\n' +
                                    'createPopupBox(map1,marker1,infowindow1);\n' +
                                    '\n' +
                                    'var infowindow2 = WindowInfo(joString);\n' +
                                    'createPopupBox(map1,marker2,infowindow2);\n' +
                                    '\n' +
                                    'var infowindow3 = WindowInfo(doString);\n' +
                                    'createPopupBox(map1,marker3,infowindow3);\n' +
                                    '\n' +
                                    'var infowindow4 = WindowInfo(soString);\n' +
                                    'createPopupBox(map1,marker4,infowindow4);\n' +
                                    '\n' +
                                    'var infowindow5 = WindowInfo(foString);\n' +
                                    'createPopupBox(map1,marker5,infowindow5);\n' +
                                    '\n' +
                                    'var infowindow6 = WindowInfo(boString);\n' +
                                    'createPopupBox(map1,marker6,infowindow6);\n' +
                                    '\n' +
                                    'startBounce(me);\n' +
                                    'startBounce(marker1);\n' +
                                    'startBounce(marker2);\n' +
                                    'startBounce(marker3);\n' +
                                    'startBounce(marker4);\n' +
                                    'startBounce(marker5);\n' +
                                    'startBounce(marker6);');
                                //console.log("succes");
                                response.write("");
                                response.write(file, "binary");
                                response.write("test");
                                response.end();
                            }
                        });
                    }else {
                        response.end();
                    }
                }
                return response
            })
        }
    });
}).listen(8080);
console.log("Server Running on 8080");