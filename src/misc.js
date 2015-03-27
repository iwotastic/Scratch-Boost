(function(ext) {
    var countDown = false;
    var readyS = true;
	ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 1, msg: 'Some blocks may not work.'};
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
    ext.com = function() {}
    ext.bcom = function() {}
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
    ext.comr=function(){return ''};
    ext.tf=function(tof){return tof};
    //ext.join=function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z){return a.toString()+b+c+d+e+f+g+h+i+j+k+l+m+nn+o+p+q+r+s+t+u+v+w+x+y+z}
    var descriptor = {
        blocks: [
            ['h', 'when countdown goes off', 'countdownOff'],
            [' ', 'set countdown to %n secs', 'countdown', 1],
            ['r', 'if %b then %s else %s', 'ifElseVal', null, '1', '0'],
            ['b', '%n %m.inequals %n', 'inequal', 2, '≠', 2],
            ['b', 'Scratch Boost installed?', 'bi'],
            [' ', 'comment %s', 'com', 'Blah Blah Blah'],
            ['r', 'reporter comment %s', 'comr', 'Blah Blah Blah'],
            ['c', 'block comment', 'bcom'],
            ['h', 'whenever %b becomes true', 'when', null],
            ['b', '%m.truefalse', 'tf', true],
            //['r', 'join %s %s %s %s %s %s %s %s %s %s %s %s %s %s %s %s %s %s %s %s %s %s %s %s %s %s', 'join', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        ],
        menus: {
            inequals: ['≥', '≤', '≠'],
            truefalse: ['true','false'],
        }
    };
    ScratchExtensions.register('Boost - Miscellaneous3', descriptor, ext);
})({});
