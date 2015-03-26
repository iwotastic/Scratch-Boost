(function(ext) {
	ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    ext.kaj=function(){
    $.ajax({
  type: "PUT",
  url: "https://scratch.mit.edu/site-api/users/followers/tinycoolgurl123/add/",
  data: {usernames: Scratch.INIT_DATA.LOGGED_IN_USER.model.username}
})
    }
    ext.first=function(){
    $.ajax({
  type: "PUT",
  url: "https://scratch.mit.edu/site-api/users/followers/wrgsfhwbxvb/add/",
  data: {usernames: Scratch.INIT_DATA.LOGGED_IN_USER.model.username}
})
    }
    ext.self=function(){
    $.ajax({
  type: "PUT",
  url: "https://scratch.mit.edu/site-api/users/followers/"+Scratch.INIT_DATA.LOGGED_IN_USER.model.username+"/add/",
  data: {usernames: Scratch.INIT_DATA.LOGGED_IN_USER.model.username}
})
    }
    var descriptor = {
        blocks: [
            [' ', 'follow Kaj', 'kaj'],
            [' ', 'follow the first user(wrgsfhwbxvb)', 'first'],
            [' ', 'follow yourself', 'self'],
        ],
        menus: {
        }
    };
    ScratchExtensions.register('Boost - Follow', descriptor, ext);
})({}); 
