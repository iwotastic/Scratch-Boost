(function(ext) {
	ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    ext.pi = function(){return Math.PI;};
    ext.e = function(){return Math.E;};
    ext.e = function(num){return Math.Log(num);};
    var descriptor = {
        blocks: [
            ['r', 'π(Pi)', 'pi'],
            ['r', "E", 'e'],
            ['r', "log %n", 'log', '2'],
        ]
    };
    ScratchExtensions.register('Boost - JavaScript Math', descriptor, ext);
})({});
