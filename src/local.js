(function(ext) {
    ext._shutdown = function() {};
    ext._getStatus = function() {
        return {
            status: 2,
            msg: 'Ready'
        };
    };
    function load(url){(function (){var s = document.createElement('script');s.setAttribute('src', url);document.body.appendChild(s);})();};
    var path = location.pathname;
    var pid = path.slice(10, path.length - 1);
    ext.makeLocalVar = function(name) {
        if (typeof(Storage) != 'undefined') {
            if (localStorage.getItem('BLV' + name + pid)) {
                console.log('Variable ' + name + ' already exists. :O')
            } else {
                localStorage.setItem('BLV' + name + pid, '0');
                console.log('Local variables supported, variable ' + name + ' created. :)')
            }
        } else {
            console.log('Local variables not supported. :/');
        }
    }
    ext.getLocalVar = function(name) {
        if (typeof(Storage) != 'undefined') {
            if (localStorage.getItem('BLV' + name + pid)) {
                console.log('Local variables supported, variable ' + name + ' has a value of ' + localStorage.getItem('BLV' + name + pid));
                return localStorage.getItem('BLV' + name + pid);
            } else {
                console.log('Variable ' + name + ' does not exist. ;(')
            }
        } else {
            console.log('Local variables not supported. :/');
        }
    }
    ext.localVarExists = function(name) {
        if (typeof(Storage) != 'undefined') {
            if (localStorage.getItem('BLV' + name + pid)) {
                return true;
            } else {
                return false;
            }
        } else {
            console.log('Local variables not supported. :/');
            return false;
        }
    }
    ext.delLocalVar = function(name) {
        if (typeof(Storage) != 'undefined') {
            if (localStorage.getItem('BLV' + name + pid)) {
                localStorage.removeItem('BLV' + name + pid);
                console.log('Local variables supported, variable ' + name + ' deleted. :)');
            } else {
                console.log('Variable ' + name + ' does not exist. ;(')
            }
        } else {
            console.log('Local variables not supported. :/');
        }
    }

    ext.setLocalVar = function(name, val) {
        if (typeof(Storage) != 'undefined') {
            if (localStorage.getItem('BLV' + name + pid)) {
                localStorage.setItem('BLV' + name + pid, val);
                console.log('Local variables supported, variable ' + name + ' has a value of ' + localStorage.getItem('BLV' + name + pid));
            } else {
                console.log('Variable ' + name + ' does not exist. ;(');
            }
        } else {
            console.log('Local variables not supported. :/');
        }
    }
    ext.load = function(){load('https://rawgit.com/ealgase/Cookie-Vars/master/src/index.js')}
    var descriptor = {
        blocks: [
            [' ', 'create local variable %s', 'makeLocalVar', 'x'],
            [' ', 'set local variable %s to %s', 'setLocalVar', 'x', 'hi'],
            [' ', 'delete local variable %s', 'delLocalVar', 'x'],
            ['-'],
            ['r', 'local variable %s', 'getLocalVar', 'x'],
            ['b', 'local variable %s exists', 'localVarExists', 'x'],
            ['-'],
            ['o', 'Load Cookie-Vars', 'load']
        ]
    };
    ScratchExtensions.register('Boost - Local Variables', descriptor, ext);
})({});
