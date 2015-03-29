(function(ext) {
	//Load jQuery library using plain JavaScript

     var newscript = document.createElement('script');
     newscript.type = 'text/javascript';
     newscript.async = true;
     newscript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js';
     (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(newscript);

    var userHasAllowedJs = false;
	ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    ext.imp = function(url) {
        if (confirm('Scratch Boost ►►︎︎︎\nThis project wants to import a Scratch extension from the URL ' + url + '. Do you allow this?')) {
            ScratchExtensions.loadExternalJS(url);
        }
    };
    ext.exe = function(js) {
        if (userHasAllowedJs) {
            eval(js);
        }else{
            if(confirm('Scratch Boost ►►\n\nThis project uses JavaScript. Do you trust this project?')) {
                eval(js);
                userHasAllowedJs = true;
            }
        }
    };
    ext.fetch=function(url,data,sucsess){
jQuery.get( url , data  , success){
    }
    ext.jsvar=function(var){
    	switch(var){
    	    case var1:
    	    return var1
    	    break;
    	    case var2:
    	    return var2
    	    break;
    	    case var3:
    	    return var3
    	    break;
    	    case var4:
    	    return var4
    	    break;
    	    case var5:
    	    return var5
    	    break;
    	    case var6:
    	    return var6
    	    break;
    	    case var7:
    	    return var7
    	    break;
    	    case var8:
    	    return var8
    	    break;
    	    case var9:
    	    return var9
    	    break;
    	    case var10:
    	    return var10
    	    break;
    	}
    }
    var descriptor = {
        blocks: [
            [' ', 'import Scratch extension from URL: %s', 'imp'],
            [' ', 'run JS %s', 'exe', 'alert("Scratch is awesome!");'],
            [' ', 'fetch website %s with data %s sucsess function %s', 'fetch', '', '', ''],
            [' ', 'JS var %m.jsvar', 'jsvar', 'var1'],
        ],
        menus:{
        	jsvar:['var1','var2','var3','var4','var5','var6','var7','var8','var9','var10']
        }
    };
    ScratchExtensions.register('Boost - JavaScript', descriptor, ext);
})({});
