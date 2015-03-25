(function(ext) {
	ext._shutdown = function() {}
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'}
    };
    ext.pi = function(){return Math.PI}
    ext.e = function(){return Math.E}
    ext.exp = function(num1,num2){return Math.pow(num1,num2)}
    var descriptor = {
        blocks: [
            ['r', 'π(Pi)', 'pi'],
            ['r', "E", 'e'],
            ['r', "%n ^ %n", 'exp','2','4'],
        ]
    }
    ScratchExtensions.register('Boost - JavaScript Math', descriptor, ext)
})({})
