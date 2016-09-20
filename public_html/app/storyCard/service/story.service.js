angular.module('storyCard')
        .factory('Story', ['$resource',
            function ($resource) {
                return $resource('./app/stories/:storyId.json', {}, {
                    query: {
                        method: 'GET',
                        params: {storyId: 'stories'},
                        isArray: true
                    }
                });
            }
        ]);