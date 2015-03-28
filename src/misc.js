(function(ext) {
    var countDown = false;
    var readyS = true;
	ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    ext.countdown = function(time) {
        window.setTimeout(function(){
            countDown = true;
        }, time*1000);
    }
    ext.countdownOff = function() {
        if (countDown === true) {
            countDown = false;
            return true;
        }else{
            return false;
        }
    }
    ext.ifElseVal = function(tf, op1, op2) {
        if (tf) {
            return op1;
        }else{
            return op2;
        }
    }
    ext.inequal = function(x, ine, y) {
        if (ine == '≥') {
            return (x >= y);
        }else if (ine == '≤') {
            return (x <= y);
        }else if (ine == '≠') {
            return (x != y);
        }
    }
    ext.bi = function() {
        return true
    }
    ext.when = function(tf) {
        if(readyS){
            if(tf){
                readyS = false;
                return true;
            }else{
                return false;
            }
        }else{
            if(tf){
                return false;
            }else{
                readyS = true;
                return false;
            }
        }
    }
    ext.tf=function(tof){return tof};
    var descriptor = {
        blocks: [
            ['h', 'when countdown goes off', 'countdownOff'],
            [' ', 'set countdown to %n secs', 'countdown', 1],
            ['r', 'if %b then %s else %s', 'ifElseVal', null, '1', '0'],
            ['b', '%n %m.inequals %n', 'inequal', 2, '≠', 2],
            ['b', 'Scratch Boost installed?', 'bi'],
            ['h', 'whenever %b becomes true', 'when', null],
            ['b', '%m.truefalse', 'tf', true],
        ],
        menus: {
            inequals: ['≥', '≤', '≠'],
            truefalse: ['true','false'],
        }
    };
    ScratchExtensions.register('Boost - Miscellaneous', descriptor, ext);
})({});
