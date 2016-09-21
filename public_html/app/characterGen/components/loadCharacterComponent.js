angular.module('storyCard').component('loadCharacter', {
    templateUrl: './app/characterGen/templates/loadCharacter.html',
    controller: ['Character', 'CharacterFactory', '$window',
        function StoryCardController(Character, CharacterFactory, $window) {
            var self = this;
            self.name = '';

            self.loadCharacter = function () {
                var character = Character.get({name: self.name});

                character.$promise.then(function (result) {
                    character = angular.fromJson(result.character);
                    CharacterFactory.SetCharacter(character);
                    $window.location.href = '#story';
                });
            };
        }
    ]
});