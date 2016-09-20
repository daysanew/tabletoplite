angular.module('storyCard').component('storyHistoryCard', {
    templateUrl: './app/storyCard/templates/storyHistory.html',
    controller: ['StoryHistory',
        function StoryCardController(StoryHistory) {
            var self = this;
            self.storyHistory = StoryHistory;
        }
    ]
}
);