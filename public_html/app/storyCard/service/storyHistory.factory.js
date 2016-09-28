angular.module('storyCard')
        .factory('StoryHistoryFactory', ['StoryHistory',
            function (StoryHistory) {
                var storyHistory = {storyHistory: '', id: '', adventureId: ''};
                return {
                    GetStoryHistory: function () {
                        return storyHistory;
                    },
                    AddToStoryHistory: function (additionalStory) {
                        storyHistory.storyHistory += additionalStory;
                        StoryHistory.update(storyHistory);
                    },
                    LoadStoryHistory: function (adventureId, callback) {
                        var historyResults = StoryHistory.get({adventureId: adventureId});
                        historyResults.$promise.then(function (result) {
                            storyHistory = result;
                            callback(storyHistory);
                        });
                    }
                };
            }
        ]);