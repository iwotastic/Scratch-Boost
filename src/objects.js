(function(ext) {
    var myObjects = [];
    ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: "Ready"};
    };
    ext.nObj = function() {
        return "{}";
    };
    ext.rObjpoObj = function(pro, obj) {
        return JSON.stringify(JSON.parse(obj)[pro.trim()]);
    };
    ext.rpoObj = function(pro, obj) {
        return JSON.parse(obj)[pro.trim()]
    };
    ext.wpoObj = function(pro, obj, val) {
        var json = JSON.parse(obj);
        json[pro.trim()] = JSON.stringify(val);
        return JSON.stringify(json);
    };
    var descriptor = {
        blocks: [
          ["r", "create object", "nObj"],
          ["r", "object %s of %s", "rObjpoObj", "Friends", null],
          ["r", "%s of %s", "rpoObj", "Name", null],
          ["r", "set %s of %s to %s", "wpoObj", "Name", null, "Billy"],
        ],
        url: "http://Iwotastic.github.io/Scratch-Boost/index.html#objects"
    };
    ScratchExtensions.register("Boost - Objects", descriptor, ext);
})({});
