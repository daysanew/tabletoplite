angular.module('storyCard').component('characterCard', {
    templateUrl: './app/storyCard/templates/characterCard.html',
    controller: ['RuleSystem', 'Character',
        function CharacterCardController(RuleSystem, Character) {
            var self = this;
            
            self.ruleSystem = RuleSystem.get({systemId: 'dTwenty'});
            self.character = Character.GetCharacter();
            
        }
    ]
}
);