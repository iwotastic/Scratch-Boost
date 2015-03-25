(function(ext) {
	ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
        ext.color = function(colorr){return colorr}
        ext.ccom = function(){}
        ext.rgb = function(r, g, b) {
        return ((r*65536)+(g*256)+b);
    }
        ext.randcolor - function(){return Math.round(Math.random()*100000000)}
    var descriptor = {
        blocks: [
            ['r', 'color r: %n g: %n b: %n', 'rgb', 255, 255, 255],
            [' ', 'color comment %c', 'ccom','000000'],
            ['r', 'color %c', 'color','000000'],
            ['r', 'random color', 'randcolor'],
        ],
        menus: {
        }
    };
    ScratchExtensions.register('Boost - Colors', descriptor, ext);
})({}); 
