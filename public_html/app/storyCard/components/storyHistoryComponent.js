angular.module('storyCard').component('storyHistoryCard', {
    templateUrl: './app/storyCard/templates/storyHistory.html',
    controller: ['StoryHistoryFactory',
        function StoryCardController(StoryHistoryFactory) {
            var self = this;
            StoryHistoryFactory.LoadStoryHistory(1, function(storyHistory){
                self.storyHistory = storyHistory;
            });   
            self.storyHistory = StoryHistoryFactory.GetStoryHistory();
        }
    ]
}
);