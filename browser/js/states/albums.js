app.config(function ($stateProvider) {
	$stateProvider.state('albums', {
		url: '/albums',
		template: "<my-albums albums = 'albums'></my-albums>",
		controller: 'AlbumsCtrl',
		resolve: {
			allAlbums: function (AlbumFactory) {
				return AlbumFactory.fetchAll();
			}
		}
	});
});