/* fixed by MrSherlockHolmes */
ScratchExtensions.loadExternalJS('https://rawgit.com/Iwotastic/Scratch-Boost/master/src/strings.js');
ScratchExtensions.loadExternalJS('https://rawgit.com/Iwotastic/Scratch-Boost/master/src/scratch.js');
ScratchExtensions.loadExternalJS('https://rawgit.com/Iwotastic/Scratch-Boost/master/src/misc.js');
ScratchExtensions.loadExternalJS('https://rawgit.com/Iwotastic/Scratch-Boost/master/src/local.js');
ScratchExtensions.loadExternalJS('https://rawgit.com/Iwotastic/Scratch-Boost/master/src/jscript.js');
ScratchExtensions.loadExternalJS('https://rawgit.com/Iwotastic/Scratch-Boost/master/src/browser.js');
ScratchExtensions.loadExternalJS('https://rawgit.com/Iwotastic/Scratch-Boost/master/src/objects.js');
$.get('https://rawgit.com/Iwotastic/Scratch-Boost/master/src/dialog_template', function(data){
	$("body").append(data);
	$(".sb-template").children().hide();
});
$(".box-head > .buttons").append('<div class="button" id="see-inside" onclick="info()"><span class="white">Scratch Boost</span></div>');
function info() {
	$("#aboutWin").show().css({"position": "fixed", "top": "40%", "left": "40%"});
}
