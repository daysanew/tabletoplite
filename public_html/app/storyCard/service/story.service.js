angular.module('storyCard')
        .factory('Story', ['$resource',
            function ($resource) {
                return $resource('http://localhost:3000/story/:storyId', {}, {
                    query: {
                        method: 'GET',
                        params: {storyId: 'stories'},
                        isArray: true
                    }
                });
            }
        ]);