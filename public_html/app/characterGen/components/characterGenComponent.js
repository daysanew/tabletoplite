angular.module('storyCard').component('characterGen', {
    templateUrl: './app/characterGen/templates/characterGen.html',
    controller: ['RuleSystem', 'Character', '$window',
        function StoryCardController(RuleSystem, Character, $window) {
            var self = this;

            self.ruleSystem = RuleSystem.get({systemId: 'dTwenty'});
            self.buttonClass = '';
            self.statKeys = ['Str', 'Dex', 'Con', 'Int', 'Wis', 'Cha'];
            self.character = {};
            createBlankCharacterObject();

            self.rolls = new Array();

            self.rollForAllStats = function () {
                for (var i = 0; i <= 5; i++) {
                    self.rolls[i] = rollStatDice();
                }

                self.buttonClass = 'disabled';
            };

            self.saveCharacter = function () {
                addBonusStats();
                var character = {name: self.name, stats: self.stats, race: self.race, class: self.class};
                //Character.SetCharacter(character);

                var dbSave = new Character(character);
                dbSave.$update();

                $window.location.href = '#story';
            };

            function addBonusStats() {
                for (var i = 0; i < self.statKeys.length; i++) {
                    var key = self.statKeys[i];
                    var bonus = self.race.Bonuses[key];
                    self.stats[key] += bonus;
                }
            }

            function createBlankCharacterObject() {
                self.class = '';
                self.race = {Name: '', Bonuses: {}};
                self.name = '';
                self.stats = {};

                for (var i = 0; i < self.statKeys.length; i++) {
                    var key = self.statKeys[i];
                    self.stats[key] = 0;
                    self.race.Bonuses[key] = 0;
                }
            }

            function rollStatDice() {
                var diceRolls = new Array();
                for (var i = 0; i <= 3; i++) {
                    diceRolls.push(rollDSix());
                }

                diceRolls.sort(function (a, b) {
                    return b - a;
                });
                //Remove the last element, should be the lowest roll
                diceRolls.pop();

                var total = diceRolls.reduce(function (total, num) {
                    return total + num;
                });

                return total;
            }

            function rollDSix() {
                return Math.floor((Math.random() * 6) + 1);
            }
        }
    ]
}
);