(function(ext) {
	ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: "Ready"};
    };
    ext.view = function() {
        if (location.hash == "#editor") {return true;}else{return false;}
    }
    ext.inside = function() {
        if(location.hash != "#editor"){
            location.hash = "#editor";
        }
    }
    ext.outside = function() {
        if(location.hash == "#editor"){
            location.hash = "";
        }
    }
    ext.toggle = function() {
        if(location.hash == "#editor"){
            location.hash = "";
        }else{
            location.hash = "#editor";
        }
    }
    ext.link = function(type, li) {
        if (confirm("Scratch Boost ►►\n\nThis project wants to go to " + type + " " + li + ". Do you allow this to happen?")){
            switch (type) {
                case "project page":
                    location.href = "http://scratch.mit.edu/projects/" + li;
                    break;
                case "the profile page of":
                    location.href = "http://scratch.mit.edu/users/" + li;
                    break;
                case "studio":
                    location.href = "http://scratch.mit.edu/studios/" + li;
                    break;
                case "disscussion topic":
                    location.href = "http://scratch.mit.edu/studios/" + li;
                    break;
                case "the scratch search results of":
                    location.href = "http://scratch.mit.edu/search/google_results/?q=" + encodeURIComponent(li) + "&date=anytime&sort_by=datetime_shared";
                    break;
            }
        }
    }
    ext.pid = function() {
        var path = location.pathname;
        var pid = path.slice(10, path.length - 1);
        return pid;
    }
    var descriptor = {
        blocks: [
            ["b", "viewing with editor?", "view"],
            [" ", "see inside", "inside"],
            [" ", "see project page", "outside"],
            [" ", "toggle see inside", "toggle"],
            ["r", "project ID", "pid"],
            [" ", "go to %m.links %s", "link", "the profile page of", "iwotastic"],
        ],
        menus: {
            links: ["project page", "the profile page of", "studio", "disscussion topic", "the scratch search results of"]
        },
        url: "http://Iwotastic.github.io/Scratch-Boost/index.html#scratch"
    };
    ScratchExtensions.register("Boost - Scratch", descriptor, ext);
})({});
