angular.module('storyCard').component('characterCard', {
    templateUrl: './app/storyCard/templates/characterCard.html',
    controller: ['RuleSystem', 'Character', 'CharacterFactory',
        function CharacterCardController(RuleSystem, Character, CharacterFactory) {
            var self = this;
            
            self.ruleSystem = RuleSystem.get({systemId: 'dTwenty'});
            self.character = CharacterFactory.GetCharacter();
            
        }
    ]
}
);