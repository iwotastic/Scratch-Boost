(function(ext) {
	  ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: "Ready"};
    };
    ext.imp = function(url, callback) {
      swal({
        title: "Import Extention",
        text: "Do you allow this project to import an extension from <a href=\"" + url + "\">" + url + "</a>?",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, import it",
        cancelButtonText: "No, don't do it",
        closeOnConfirm: false,
        closeOnCancel: false
      }, function(isConfirm){
        if (isConfirm) {
          ScratchExtensions.loadExternalJS(url);
          swal("Importing", "Scratch Boost will import the extension.", "success");
        }else{
          swal("Ok!", "This project won't import this extension.", "info");
        }
        callback();
      });
    };
    ext.exe = function(js, callback) {
      swal({
        title: "This Project Uses JavaScript!",
        text: "Do you allow this project to run the JavaScript?",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, do it this time",
        cancelButtonText: "No, not this time",
        closeOnConfirm: false,
        closeOnCancel: false
      }, function(isConfirm){
        if (isConfirm) {
          eval(js)
        } else {
          swal("Ok!", "This project won't run the JavaScript this time", "info");
        }
        callback();
      });
    };
    var descriptor = {
        blocks: [
        	["w", "import Scratch extension from URL: %s", "imp"],
        	["w", "run JS %s", "exe", "alert(\"Scratch is awesome!\");"],
        ],
        url: "http://Iwotastic.github.io/Scratch-Boost/index.html#javascript"
    };
    ScratchExtensions.register("Boost - JavaScript", descriptor, ext);
})({});
