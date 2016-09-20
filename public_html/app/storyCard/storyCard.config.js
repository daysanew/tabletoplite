angular.module('storyCard').config(function ($routeProvider) {
    $routeProvider
            .when("/", {
                //templateUrl : "main.html"
                templateUrl: "characterGen.html"
            })
            .when("/characterGen", {
                templateUrl: "characterGen.html"
            })
            .when("/story", {
                templateUrl: "main.html"
            });
});