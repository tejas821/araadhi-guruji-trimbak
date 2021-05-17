app.config(function ($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: 'pages/home.html',
            controller: 'homeCtrl'
        })
        
    ;

   $routeProvider.otherwise('/home');
});

