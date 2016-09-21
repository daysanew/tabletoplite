angular.module('storyCard')
        .factory('CharacterFactory', ['$resource',
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