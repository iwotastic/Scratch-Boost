(function(ext) {
    ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: "Ready"};
    };
    ext.say = function(text) {
        alert(text);
    };
    ext.ask = function(text) {
        return confirm(text);
    };
    ext.write = function(text) {
        return prompt(text);
    };
    ext.setTab = function(txt) {
        $("title").text(txt);
    };
    ext.tabN = function() {
        return $("title").text();
    };
    ext.copy = function(text) {
        prompt("Copy this text with \"CTRL-C\" on Windows or \"⌘-C\" on Mac.", text)
    };
    ext.defv = function(text, val) {
        return prompt(text, val);
    };
    var descriptor = {
        blocks: [
            [" ", "alert %s", "say", "Hello!"],
            ["b", "ask %s", "ask", "Do you want to continue?"],
            ["r", "prompt %s", "write", "What is your favorite color?"],
            [" ", "show copy box %s", "copy", "Copy This!"],
            ["r", "prompt %s with default value %s", "defv", "What is your favorite color?", "Purple"],
            [" ", "set tab name to %s", "setTab", "Hey!"],
            ["r", "tab name", "tabN"],
        ],
        url: "http://Iwotastic.github.io/Scratch-Boost/index.html#browser"
    };
    ScratchExtensions.register("Boost - Browser", descriptor, ext);
})({});
