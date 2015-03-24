(function(ext) {
    var userHasAllowedJs = false;
	ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    ext.pi = function(){return Math.PI;};
    };
    var descriptor = {
        blocks: [
            [' ', 'import Scratch extension from URL: %s', 'imp'],
            ['r', 'π(Pi)', 'pi'],
            [' ', 'run JS %s', 'exe', 'alert("Scratch is awesome!");'],
        ]
    };
    ScratchExtensions.register('Boost - JavaScript Math', descriptor, ext);
})({});
