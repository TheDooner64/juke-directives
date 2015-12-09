app.directive('myAlbums',function(){
	return {
		restrict: "E",
		templateUrl: '/templates/albumTemplate.html',
		scope: {
			albums: "="
		}
	};
});