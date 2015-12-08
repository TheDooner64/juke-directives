app.directive('mySongs',function(PlayerFactory){
	console.log("TEST")
	return {
		restrict: "E",
		templateUrl: '/templates/songlistTemplate.html',
		link: function(scope){

			// scope.playlist = thePlaylist;
			scope.isCurrent = function(song) {

			    var current = PlayerFactory.getCurrentSong();
			    return current && current._id == song._id;
			};
			scope.start = function(song) {
				console.log("STARTED")
			    PlayerFactory.start(song, scope.songs);
			};

		},
		scope: {
			songs: "="
		}
	}
})