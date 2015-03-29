(function(ext) {
	ext._shutdown = function() {}
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'}
    };
    //Following code by comp09
        // Convert a byte array to a hex string
 //   function bytesToHex(bytes) {
  //          for (var hex = [], i = 0; i < bytes.length; i++) {
   //                 hex.push((bytes[i] >>> 4).toString(16));
    //                hex.push((bytes[i] & 0xF).toString(16));
     //       }
      //      return hex.join("");
//    }
//    // Convert a hex string to a byte array
//    function hexToBytes(hex) {
//            for (var bytes = [], c = 0; c < hex.length; c += 2)
//                    bytes.push(parseInt(hex.substr(c, 2), 16));
//            return bytes;
//    }
//    //End of code by comp09
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
  //  ext.encCloud = function(text) {
    //    return "0x" + bytesToHex(pako.deflateRaw(text, { level: 9 }));
    //    
  //  }
    //ext.decCloud = function(text) {
      //  return pako.inflateRaw(hexToBytes(text.substr(2, text.length - 2)), { to: "string" });
  //  }
    
    var descriptor = {
        blocks: [
            ['r', 'π(Pi)', 'pi'],
            ['r', "E", 'e'],
            ['-'],
            ['r', "%n %m.math %n", 'math','2','+','2'],
            ['b', '%n %m.inequals %n', 'inequal', 2, '≠', 2],
            ['-'],
            ['b', '%m.truefalse', 'tf', true],
        //    ['-'],
    //        ['r', "encode text %s for cloud data", "encCloud", ''],
      //      ['r', "decode text %s from cloud data", "decCloud", ''],
        ],
        menus:{
            inequals: ['≥', '≤', '≠'],
            math: ['+','-','*','/','^'],
            truefalse: ['true','false'],
            //encode: ['encode','decode'],
        }
    };
    ScratchExtensions.register('Boost - Operators', descriptor, ext);
})({})
