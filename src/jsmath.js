(function(ext) {
	ext._shutdown = function() {}
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'}
    };
    ext.pi = function(){return Math.PI}
    ext.e = function(){return Math.E}
    ext.exp = function(num1,num2){return Math.pow(num1,num2)}
    ext.math = function(num1,operation,num2){
        switch(operation){
        	case 'plus':
        		return num1+num2;
        		break;
        	case 'minus':
        		return num1-num2;
        		break;
        	case 'times':
        		return num1*num2;
        		break;
        	case 'divided by':
        		return num1/num2;
        		break;
        	default:
        		return Math.pow(num1,num2);
        		break;
    }}
    var descriptor = {
        blocks: [
            ['r', 'π(Pi)', 'pi'],
            ['r', "E", 'e'],
            ['r', "%n %m.math %n", 'math','2','+','2'],
        ]
        menus:{
        math: ['plus','minus','times','divided by','to the power of'],
        }
    }
    ScratchExtensions.register('Boost - JavaScript Math', descriptor, ext)
})({})
