angular.module('storyCard', ['ngResource', 'xeditable', 'ngDragDrop', 'ngRoute'])
        .run(function (editableOptions) {
            editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
        });
