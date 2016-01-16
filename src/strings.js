(function(ext) {
	ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: "Ready"};
    };
    ext.contains = function(text, check) {
        if (text.search(check) != -1) {
            return true;
        }else{
            return false;
        }
    };
    ext.where = function(x, y) {
        var i = y.search(x);
        return i+1;
    }
    ext.toBool = function(text) {
        var trueText = /true/i;
        var yes = /yes/i;
        if(trueText.test(text) || text == 1 || yes.test(text)){
            return true;
        }else{
            return false;
        }
    }
    ext.nton = function(x, y, text) {
        return text.slice(x-1, y);
    }
    ext.wordN = function(text) {
        var warr = text.split(" ");
        return warr.length;
    }
    ext.numOf = function(s, t) {
        var warr = t.split(s);
        return warr.length - 1;
    }
    var descriptor = {
        blocks: [
            ["b", "%s contains %s", "contains", "abc", "a"],
            ["r", "where is %s in %s", "where", "b", "abc"],
            ["r", "letters %n to %n of %s", "nton", 1, 3, "caterpillar"],
            ["b", "%s to boolean", "toBool", "true"],
            ["r", "number of words in %s", "wordN", "Scratch is awesome!"],
            ["r", "how many times is %s in %s", "numOf", "cat", "I like cats, do you like cats?"],
        ],
        url: "http://Iwotastic.github.io/Scratch-Boost/index.html#strings"
    };
    ScratchExtensions.register("Boost - Strings", descriptor, ext);
})({});
