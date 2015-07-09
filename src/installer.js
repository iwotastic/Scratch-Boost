/* fixed by MrSherlockHolmes */
ScratchExtensions.loadExternalJS('https://rawgit.com/Iwotastic/Scratch-Boost/master/src/strings.js');
ScratchExtensions.loadExternalJS('https://rawgit.com/Iwotastic/Scratch-Boost/master/src/scratch.js');
ScratchExtensions.loadExternalJS('https://rawgit.com/Iwotastic/Scratch-Boost/master/src/misc.js');
ScratchExtensions.loadExternalJS('https://rawgit.com/Iwotastic/Scratch-Boost/master/src/local.js');
ScratchExtensions.loadExternalJS('https://rawgit.com/Iwotastic/Scratch-Boost/master/src/jscript.js');
ScratchExtensions.loadExternalJS('https://rawgit.com/Iwotastic/Scratch-Boost/master/src/browser.js');
$(".box-head > .buttons").append('<button style="background-color:#FF9900; color:white; padding:6px; border-radius:4px; border:none;" onclick="info()">Scratch Boost</button>');
function info() {
	window.open("http://iwotastic.github.io/Scratch-Boost", "", "width=400, height=500"); 
}