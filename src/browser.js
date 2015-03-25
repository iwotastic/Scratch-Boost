(function(ext) {
    ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    ext.say = function(text) {
        alert(text);
    };
    ext.ask = function(text) {
        return confirm(text);
    };
    ext.write = function(text) {
        return prompt(text);
    };
    ext.setTab = function(txt) {
        $('title').text(txt);
    };
    ext.tabN = function() {
        return $('title').text();
    };
    ext.copy = function(text) {
        prompt("Copy this text with 'CTRL-C' on Windows or '⌘-C' on Mac.", text)
    };
    ext.defv = function(text, val) {
        return prompt(text, val);
    };
        ext.searchNewTab = function(query, engine, callback) {
      var realquery = query.replace(" ", "+");
      if (engine == 'Google') {
          window.open('http://www.google.com/search?q=' + realquery, '_blank').focus();
      } else if (engine == 'Duck Duck Go') {
          window.open('http://www.duckduckgo.com/?q=' + realquery, '_blank').focus();
      } else if (engine == 'Bing') {
          window.open('http://bing.com/search?q=' + realquery, '_blank').focus();
      } else if (engine == 'Ask') {
          window.open('http://ask.com/web?q=' + realquery, '_blank').focus();
      } else if (engine == 'Yahoo') {
          window.open('http://search.yahoo.com/search?q=' + realquery + '&fr=sfp', '_blank').focus();
      } else {
          return;
      }
      callback();
    };
    var descriptor = {
        blocks: [
            [' ', 'alert %s', 'say', 'Hello!'],
            ['b', 'ask %s', 'ask', 'Do you want to continue?'],
            ['r', 'prompt %s', 'write', 'What is your favorite color?'],
            [' ', 'show copy box %s', 'copy', 'Copy This!'],
            ['r', 'prompt %s with default value %s', 'defv', 'What is your favorite color?', 'Purple'],
            [' ', 'set tab name to %s', 'setTab', 'Hey!'],
            ['r', 'tab name', 'tabN'],
            ['w', 'search %s on %m.searchEngine', 'searchNewTab'],
        ],
        menus: {
           searchEngine: ['Google', 'Yahoo', 'Bing','Duck Duck Go','Ask'],
    },
    }; 
    ScratchExtensions.register('Boost - Browser', descriptor, ext);
})({});
