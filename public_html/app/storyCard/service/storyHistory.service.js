angular.module('storyCard')
        .factory('StoryHistory', ['$resource',
            function ($resource) {
                return $resource('http://localhost:3000/storyHistory/:adventureId', {}, {
                    update: {method: "POST"}
                });
            }
        ]);