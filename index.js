/*jslint node: true, vars: true, indent: 4 */
(function (module) {
    "use strict";

    var path = require("path"),
        templates = path.join(__dirname, "templates"),
        pubdir = path.join(__dirname, "public"),
        clientInit = require("./lib/client-init"),
        clientLogger = require("./lib/client-logger"),
        dispatcher = require("./lib/dispatcher");

    function addDefaults(defaults) {
        defaults.scripts.push("socket.io/socket.io.js");
        [
            "js/libs/underscore/underscore-1.4.4.js",
            "js/libs/jquery/jquery-1.11.0.js",
            "js/libs/backbone/backbone-1.0.0.js",
            "js/app-utils.js",
            "js/app-starter.js",
            "js/app-store.js",
            "js/app-middle.js",
            "js/app-backbone.js",
            "js/app-container.js",
            "js/app-async.js"
        ].forEach(function (dir) {
                defaults.trailingScripts.push(dir);
            });
        [
            {
                "name":"HandheldFriendly",
                "content":"True"
            },
            {
                "name":"viewport",
                "content":"width=device-width,initial-scale=1.0,maximum-scale=1.0"
            },
            {
                "name":"apple-mobile-web-app-capable",
                "content":"yes"
            },
            {
                "name":"apple-mobile-web-app-status-bar-style",
                "content":"black"
            }
        ].forEach(function (meta) {
                defaults.metas.push(meta);
            });
        [
            pubdir
        ].forEach(function (dir) {
                defaults["public"].unshift(dir);
            });
        defaults.htmlFiles = [
            path.join(templates, "container.html")
        ];

        defaults.links.push({
            rel:"apple-touch-startup-image",
            href:"startup.png"
        });
        defaults.useRequireJS = false;
    }

    module.exports = function (defaults, app, lopts, gopts, cb) {
        dispatcher(defaults, app, lopts, gopts, function (err, dispatcher) {
            dispatcher.on(clientLogger(app.logger));
            dispatcher.on(clientInit(app.logger));
            addDefaults(defaults);

            return cb(undefined, defaults, dispatcher);
        });
    };
})(module);