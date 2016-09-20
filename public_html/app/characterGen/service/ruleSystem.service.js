angular.module('storyCard')
        .factory('RuleSystem', ['$resource',
            function ($resource) {
                return $resource('./app/ruleSystems/:systemId.json', {}, {
                    query: {
                        method: 'GET',
                        params: {systemId: 'systems'},
                        isArray: true
                    }
                });
            }
        ]);