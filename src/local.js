(function(ext) {
    ext._shutdown = function() {};
    ext._getStatus = function() {
        return {
            status: 2,
            msg: "Ready"
        };
    };
    var path = location.pathname;
    var pid = path.slice(10, path.length - 1);
    ext.makeLocalVar = function(name) {
        if (typeof(Storage) != "undefined") {
            if (localStorage.getItem("BLV" + name + pid)) {
                console.log("Variable " + name + " already exists. :O")
            } else {
                localStorage.setItem("BLV" + name + pid, "0");
                console.log("Local variables supported, variable " + name + " created. :)")
            }
        } else {
            console.log("Local variables not supported. :/");
        }
    }
    ext.getLocalVar = function(name) {
        if (typeof(Storage) != "undefined") {
            if (localStorage.getItem("BLV" + name + pid)) {
                console.log("Local variables supported, variable " + name + " has a value of " + localStorage.getItem("BLV" + name + pid));
                return localStorage.getItem("BLV" + name + pid);
            } else {
                console.log("Variable " + name + " does not exist. ;(")
            }
        } else {
            console.log("Local variables not supported. :/");
        }
    }
    ext.delLocalVar = function(name) {
        if (typeof(Storage) != "undefined") {
            if (localStorage.getItem("BLV" + name + pid)) {
                localStorage.removeItem("BLV" + name + pid);
                console.log("Local variables supported, variable " + name + " deleted. :)");
            } else {
                console.log("Variable " + name + " does not exist. ;(")
            }
        } else {
            console.log("Local variables not supported. :/");
        }
    }

    ext.setLocalVar = function(name, val) {
        if (typeof(Storage) != "undefined") {
            if (localStorage.getItem("BLV" + name + pid)) {
                localStorage.setItem("BLV" + name + pid, val);
                console.log("Local variables supported, variable " + name + " has a value of " + localStorage.getItem("BLV" + name + pid));
            } else {
                console.log("Variable " + name + " does not exist. ;(");
            }
        } else {
            console.log("Local variables not supported. :/");
        }
    }
    var descriptor = {
        blocks: [
            [" ", "create local variable %s", "makeLocalVar", "x"],
            ["r", "local variable %s", "getLocalVar", "x"],
            [" ", "set local variable %s to %s", "setLocalVar", "x", "hi"],
            [" ", "delete local variable %s", "delLocalVar", "x"]
        ],
        url: "http://Iwotastic.github.io/Scratch-Boost/index.html#local-variables"
    };
    ScratchExtensions.register("Boost - Local Variables", descriptor, ext);
})({});
