ScratchExtensions.loadExternalJS('http://www.googledrive.com/host/0BwZCk9UtDHYoTHdDUGlFa0Q2aXM');
ScratchExtensions.loadExternalJS('http://www.googledrive.com/host/0BwZCk9UtDHYoUHdSQklzYjlkeHM');
ScratchExtensions.loadExternalJS('http://www.googledrive.com/host/0BwZCk9UtDHYoTkUwLXIxNE1SN1k');
ScratchExtensions.loadExternalJS('http://www.googledrive.com/host/0BwZCk9UtDHYod0lMV21iaHRadFE');
ScratchExtensions.loadExternalJS('http://www.googledrive.com/host/0BwZCk9UtDHYoaGxZMXcwRlplRVU');
ScratchExtensions.loadExternalJS('http://www.googledrive.com/host/0BwZCk9UtDHYoenZTdk9uT1R3WDQ');
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
