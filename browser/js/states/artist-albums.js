app.config(function ($stateProvider) {
	$stateProvider.state('artist.albums', {
		url: '/albums',
		template: "<my-albums albums='artist.albums'></my-albums>"
	});
});