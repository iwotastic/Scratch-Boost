(function(ext) {
    var myObjects = [];
    ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    var descriptor = {
        blocks: [
            [' ', 'alert %s', 'say', 'Hello!'],
        ]
    }; 
    ScratchExtensions.register('Boost - Objects', descriptor, ext);
})({});
