angular.module('storyCard').config(function ($routeProvider) {
    $routeProvider
            .when("/", {
                templateUrl: "loadCharacter.html"
            })
            .when("/characterGen", {
                templateUrl: "characterGen.html"
            })
            .when("/story", {
                templateUrl: "main.html"
            })
            .when("/loadCharacter", {
                templateUrl: "loadCharacter.html"
            });
});