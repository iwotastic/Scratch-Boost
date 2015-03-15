ScratchExtensions.loadExternalJS('https://raw.githubusercontent.com/Iwotastic/Scratch-Boost/master/src/strings.js');
ScratchExtensions.loadExternalJS('https://raw.githubusercontent.com/Iwotastic/Scratch-Boost/master/src/scratch.js');
ScratchExtensions.loadExternalJS('https://raw.githubusercontent.com/Iwotastic/Scratch-Boost/master/src/misc.js');
ScratchExtensions.loadExternalJS('https://raw.githubusercontent.com/Iwotastic/Scratch-Boost/master/src/local.js');
ScratchExtensions.loadExternalJS('https://raw.githubusercontent.com/Iwotastic/Scratch-Boost/master/src/jscript.js');
ScratchExtensions.loadExternalJS('https://raw.githubusercontent.com/Iwotastic/Scratch-Boost/master/src/browser.js');
$(".box-head > .buttons").append('<div class="button" onclick="info()"><span class="white">Scratch Boost</span></div>');
var inf = "";
function info() {
    if (inf === "") {
        inf = $("#info").html();
        $("#info").html('<div class="dynamic"><div class="text-block"><b>Scratch Boost Info</b><div class="read-only instructions" style="height: 161.5px;"><p>Scratch Boost by: iwotastic</p></div></div></div>');    
      }else{
        $("#info").html(inf);
        inf = "";
    }
}
