angular.module('storyCard')
        .factory('CharacterFireBase',  ['$firebaseArray',
                function ($firebaseArray) {
                return {
                    $update: function(character){
                        var ref = firebase.database().ref("Characters");
                        var db = $firebaseArray(ref);

                        return db.$add(character);
                    }
                };
            }
        ]);