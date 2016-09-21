angular.module('storyCard').component('storyCard', {
    templateUrl: './app/storyCard/templates/storyCard.html',
    controller: ['Story', 'StoryHistory', 'Character', 'CharacterFactory', 'RuleSystem',
        function StoryCardController(Story, StoryHistory, Character, CharacterFactory, RuleSystem) {
            var self = this;
            var character = {};
            loadInitialValues();

            self.processChoice = function () {
                var choiceIndex = self.userChoiceIndex;
                var newStoryId = '';
                var rollObject = self.story.storyChoices[choiceIndex].roll;

                StoryHistory.story += self.story.storyContent +
                        '\n' + self.userChoice + '\n';

                var storyBranches = self.story.choiceBranches.success;
                if (rollObject) {
                    rollDice(rollObject);
                    recordRoll(rollObject);
                    if (rollObject.rollSucceeded && rollObject.success) {
                        StoryHistory.story += rollObject.success + '\n';

                    } else if (rollObject.fail) {
                        StoryHistory.story += rollObject.fail + '\n';
                        if (self.story.choiceBranches.fail) {
                            storyBranches = self.story.choiceBranches.fail;
                        }
                    }
                }

                newStoryId = storyBranches[choiceIndex];
                self.story = getStoryById(newStoryId);
                self.story.$promise.then(function (result) {
                    self.story = result;
                    removeStoryChoices();
                });
                self.userChoice = '';
                self.userChoiceIndex = -1;
            };

            function loadInitialValues() {
                character = CharacterFactory.GetCharacter();
                self.userChoice = '';
                self.userChoiceIndex = -1;
                self.story = getStoryById('intro');
                self.story.$promise.then(function (result) {
                    self.story = result;
                    removeStoryChoices();
                });
            }

            function removeStoryChoices() {
                for (var i = 0; i < self.story.storyChoices.length; i++)
                {
                    var hasChoice = true;
                    var choice = self.story.storyChoices[i];
                    if (choice.conditions) {
                        hasChoice = false;
                        choice.conditions.forEach(function (condition) {
                            var result = checkIfUserMeetsChoiceCriteria(condition);
                            if (result) {
                                hasChoice = result;
                            }
                        });
                    }
                    
                    if(!hasChoice){
                        self.story.storyChoices[i] = undefined;
                    }
                }
            }

            function checkIfUserMeetsChoiceCriteria(condition) {
                var hasChoice = false;
                if (condition.race) {
                    if (condition.race.toLowerCase() === character.race.Name.toLowerCase()) {
                        hasChoice = true;
                    }
                }
                if (condition.class) {
                    if (condition.class.toLowerCase() === character.class.Name.toLowerCase()) {
                        hasChoice = true;
                    }
                }

                return hasChoice;
            }
            function getStoryById(storyId) {
                return Story.get({storyId: storyId});
            }

            function recordRoll(rollObject) {
                StoryHistory.story += 'Roll result: ' + rollObject.rollValue;
                StoryHistory.story += ' Target: ' + rollObject.target + '\n';
            }
            function rollDice(roll) {
                var storyModifier = 0;
                if (self.story.modifier) {
                    storyModifier = self.story.modifier;
                }
                console.log(storyModifier);
                var modifier = getModifier(character.stats[roll.skill]);
                var playerRoll = rollDTwenty() + modifier + storyModifier;
                if(playerRoll < 1){
                    playerRoll = 1;
                }

                roll.rollValue = playerRoll;
                if (playerRoll >= roll.target) {
                    roll.rollSucceeded = true;
                } else {
                    roll.rollSucceeded = false;
                }

                return roll;
            }

            function getModifier(stat) {
                return Math.floor((stat - 10) / 2);
            }

            function rollDTwenty() {
                return Math.floor((Math.random() * 20) + 1);
            }
        }
    ]
}
);