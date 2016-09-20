angular.module('storyCard').component('characterGen', {
    templateUrl: './app/characterGen/templates/characterGen.html',
    controller: [
        function StoryCardController() {
            var statKeys = ['str', 'dex', 'con', 'int', 'wis', 'char'];
            var self = this;
            self['str'] = 0;
            self['dex'] = 0;
            self['con'] = 0;
            self['int'] = 0;
            self['wis'] = 0;
            self['char'] = 0;
            
            self.rolls = new Array();
            
            self.rollForAllStats = function(){
                for(var i = 0; i < 5; i++){
                    //var stat = statKeys[i];
                    self.rolls[i] = rollStatDice();
                };
            };

            function rollStatDice() {
                var diceRolls = new Array();
                for (var i = 0; i <= 3; i++) {
                    diceRolls.push(rollDSix());
                }

                diceRolls.sort(function (a, b) {
                    return b - a;
                });
                console.log(diceRolls);
                //Remove the last 2 elements, should be the lowest rolls
                diceRolls.pop();

                var total = diceRolls.reduce(function (total, num) {
                    return total + num;
                });

                return total;
            };
//            function getStoryById(storyId) {
//                return Story.get({storyId: storyId});
//            }

            function rollDSix() {
                return Math.floor((Math.random() * 6) + 1);
            };
        }
    ]
}
);