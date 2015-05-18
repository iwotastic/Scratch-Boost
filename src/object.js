(function(ext) {
  var objects = new Object();
  ext._shutdown = function() {};
  ext._getStatus = function() {
    return {status: 2, msg: 'Ready'};
  };
  var descriptor = {
    blocks: [
      [' ', 'new object %s', 'nobj', 'cat']
    ]
  };
  ScratchExtensions.register('Boost - JavaScript', descriptor, ext);
})({});
