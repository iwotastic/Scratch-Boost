(function(ext) {
	ext._shutdown = function() {}
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'}
    };
    ext.pi = function(){return Math.PI}
    ext.e = function(){return Math.E}
    ext.log = function(num){return Math.log(num)}
    var descriptor = {
        blocks: [
            ['r', 'π(Pi)', 'pi'],
            ['r', "E", 'e'],
            ['r', "log %n", 'log', '2'],
        ]
    }
    ScratchExtensions.register('Boost - JavaScript Math', descriptor, ext)
})({})
