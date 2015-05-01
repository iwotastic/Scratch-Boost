(function(ext) {
	ext._shutdown = function() {}
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'}
    };
    ext.pi = function(){return Math.PI}
    ext.e = function(){return Math.E}
    ext.math = function(num1,operation,num2){
        if (operation=='+'){return Number(num1)+Number(num2)}
        if (operation=='-'){return num1-num2}
        if (operation=='*'){return num1*num2}
        if (operation=='/'){return num1/num2}
        if (operation=='^'){return Math.pow(num1,num2)}
    };
    ext.tf=function(tof){return tof};
    ext.inequal = function(x, ine, y) {
        if (ine == '≥') {
            return (x >= y);
        }else if (ine == '≤') {
            return (x <= y);
        }else if (ine == '≠') {
            return (x != y);
        }
    }
    ext.infa=function(function1){if (function1=='infinity')
    {
     return Infinity;   
    }else{
     return NaN;   
    }
        }
    var descriptor = {
        blocks: [
            ['r', 'π(Pi)', 'pi'],
            ['r', "E", 'e'],
            ['-'],
            ['r', "%n %m.math %n", 'math','2','+','2'],
            ['b', '%n %m.inequals %n', 'inequal', 2, '≠', 2],
            ['-'],
            ['b', '%m.truefalse', 'tf', true],
            ['r', '%m.inf', 'infa', 'NaN'],
        ],
        menus:{
            inequals: ['≥', '≤', '≠'],
            math: ['+','-','*','/','^'],
            truefalse: ['true','false'],
            inf: ['infinity','NaN'],
        }
    };
    ScratchExtensions.register('Boost - Operators', descriptor, ext);
})({})
