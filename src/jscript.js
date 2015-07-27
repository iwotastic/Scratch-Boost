(function(ext) {
    var userHasAllowedJs = false;
	ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    ext.imp = function(url) {
        if (confirm('Scratch Boost ►►︎︎︎\nThis project wants to import a Scratch extension from the URL ' + url + '. Do you allow this?')) {
            ScratchExtensions.loadExternalJS(url);
        }
    };
    ext.exe = function(js) {
        if (userHasAllowedJs) {
            eval(js);
        }else{
            if(confirm('Scratch Boost ►►\n\nThis project uses JavaScript. Do you trust this project?')) {
                eval(js);
                userHasAllowedJs = true;
            }
        }
    };
    var descriptor = {
        blocks: [
            [' ', 'import Scratch extension from URL: %s', 'imp'],
            [' ', 'run JS %s', 'exe', 'alert("Scratch is awesome!");'],
        ],
        url: "http://Iwotastic.github.io/Scratch-Boost/index.html#javascript"
    };
    ScratchExtensions.register('Boost - JavaScript', descriptor, ext);
})({});
