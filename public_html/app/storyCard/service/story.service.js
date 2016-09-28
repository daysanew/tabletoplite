angular.module('storyCard')
        .factory('Story', ['$resource',
            function ($resource) {
                return $resource('http://localhost:3000/story/:storyId/:adventureId/:characterId/:turn', {}, {});
            }
        ]);