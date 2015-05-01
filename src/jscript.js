(function(ext) {
	//Load jQuery library using plain JavaScript

     var newscript = document.createElement('script');
     newscript.type = 'text/javascript';
     newscript.async = true;
     newscript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js';
     (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(newscript);

    var userHasAllowedJs = false;
	ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    ext.imp = function(url) {
        if (confirm('Message from Scratch Boost ►►︎︎︎\nThis project wants to import a Scratch extension from the URL ' + url + '. Do you allow this?')) {
            ScratchExtensions.loadExternalJS(url);
        }
    };
    ext.exe = function(js) {
        if (userHasAllowedJs) {
            eval(js);
        }else{
            if(confirm('Message from Scratch Boost ►►\n\nThis project uses JavaScript. Do you trust this project?')) {
                eval(js);
                userHasAllowedJs = true;
            }
        }
    };

    var descriptor = {
        blocks: [
            [' ', 'import Scratch extension from URL: %s', 'imp'],
            [' ', 'run JS %s', 'exe', 'alert("Scratch is awesome!");'],
        ]
    };
    ScratchExtensions.register('Boost - JavaScript', descriptor, ext);
})({});
