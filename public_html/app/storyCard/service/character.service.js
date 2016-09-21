angular.module('storyCard')
        .factory('Character', ['$resource',
                function ($resource) {
                return $resource('http://localhost:3000/character/:name', {}, {
                    query: {
                        method: 'GET',
                        params: {storyId: 'stories'},
                        isArray: true
                    },
                    update: {method: "POST"}
                });
            }
        ]);