/*global PhoneGap:false, require:false */
(function (_, app) {
    "use strict";
    app.async = app.async || {};

    app.async.parallel = app.async.parallel ||  function (call, cb) {
        var total = call.length;
        _.forEach(call, function(fn){
            fn(function(err, result){
                if(err) {
                    cb(err);
                }
                total--;
                if(total==0){
                    cb();
                }
            })
        });
    };

})(_, window["jolira-app"]);