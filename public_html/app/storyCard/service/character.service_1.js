angular.module('storyCard')
        .factory('Character', ['$resource',
            function () {
                var character = {};
                return {
                    GetCharacter: function () {
                        return character;
                    },
                    SetCharacter: function (newCharacter) {
                        character = newCharacter;
                    }
                };
            }

        ]);