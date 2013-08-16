'use strict';

(function(angular, config) {

    angular.module('comimoc', ['ngResource'])
        .factory('Comments', function($resource) {
            // transform on query or get
            var transformResponse = function(data) {
                var jsonData = angular.fromJson(data);
                return jsonData.comments || jsonData.comment;
            };
            return $resource('http://pelicoms.dev/gae/comments',
                             {},
                             {'query':  {method:'GET', isArray: true, transformResponse: transformResponse}});
        
        })
        .controller('CommentCtrl', ['$scope', 'Comments', function ($scope, Comments) {
        
            $scope.comments = Comments.query({website: "pelicoms.dev", page: "dtc"});
            $scope.comment = new Comments();
            
            $scope.submit = function() {
                $scope.comment.website = "pelicoms.dev";
                $scope.comment.page = "dtc";
                
                $scope.comment.$save().then(function(comment) {
                    $scope.comment = new Comments();
                    $scope.comments.push(comment);
                });
            };
            
        }]);
    
})(angular, {});

