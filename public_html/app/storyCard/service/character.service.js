angular.module('storyCard')
        .factory('Character', ['$resource',
                function ($resource) {
                return $resource('http://localhost:3000/character/', {}, {
                    query: {
                        method: 'GET',
                        params: {storyId: 'stories'},
                        isArray: true
                    },
                    update: {method: "POST"}
                });
            }
//            function () {
//                var character = {};
//                return {
//                    GetCharacter: function () {
//                        return character;
//                    },
//                    SetCharacter: function (newCharacter) {
//                        character = newCharacter;
//                    }
//                };
//            }

        ]);