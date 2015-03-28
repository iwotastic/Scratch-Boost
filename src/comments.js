(function(ext) {
	ext._shutdown = function() {};
    ext._getStatus = function() {return {status: 2, msg: 'Ready'};};
    ext.hatcom=function(){return false}
    ext.comr=function(){return ''}
    var descriptor = {
        blocks: [
            ['h', 'hat comment %s', 'hatcom', 'comment'],
            [' ', 'comment %s', 'com', 'Blah Blah Blah'],
            ['r', 'reporter comment %s', 'comr', 'Blah Blah Blah'],
            ['c', 'block comment', 'bcom'],
            ['e', 'double block comment', 'ecom'],
            ['s', 'comment %s', 'com1', 'Blah Blah Blah'],
        ],
        menus: {
        }
    };
    ScratchExtensions.register('Boost - Comments', descriptor, ext);
})({});
