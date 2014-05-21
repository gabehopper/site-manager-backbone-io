/*jshint white: false, node: true, vars: true, indent: 4 */
(function (module, __dirname) {
    "use strict";
    var path = require('path'),
        templates = path.join(__dirname, "../", "templates");

    module.exports = {


        "scripts": ["socket.io/socket.io.js"],
        "trailingScripts":
            ["js/libs/underscore/underscore-1.4.4.js",
            "js/libs/jquery/jquery-1.9.1.js",
            "js/libs/backbone/backbone-1.0.0.js",
            "js/app-utils.js",
            "js/app-starter.js",
            "js/app-store.js",
            "js/app-middle.js",
            "js/app-backbone.js",
            "js/app-container.js",
            "js/app-async.js"],
        "metas": [
            {
                "name": "HandheldFriendly",
                "content": "True"
            },
            {
                "name": "viewport",
                "content": "width=device-width,initial-scale=1.0,maximum-scale=1.0"
            },
            {
                "name": "apple-mobile-web-app-capable",
                "content": "yes"
            },
            {
                "name": "apple-mobile-web-app-status-bar-style",
                "content": "black"
            }
        ],
        "htmlFiles":
            [
                path.join(templates, "container.html")
            ],
        "links": [
            {
                "rel": "apple-touch-startup-image",
                "href": "startup.png"
            }
        ],
        "useRequireJS": false


    };
})(module, __dirname);