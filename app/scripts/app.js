
(function(comimoc, angular) {

    comimoc.factory('Comments', ['$resource', 'COMIMOC_RESOURCES', function($resource, COMIMOC_RESOURCES) {
        // expose `Comments` resource service
        
        // transform on query or get
        var transformResponse = function(data) {
            var jsonData = angular.fromJson(data);
            return jsonData.comments || jsonData.comment;
        };
        return $resource(COMIMOC_RESOURCES,
                         {},
                         {'query':  {method:'GET', isArray: true, transformResponse: transformResponse}});
        
    }]);
    
    comimoc.controller('CommentCtrl', ['$scope', 'Comments', function ($scope, Comments) {
        // handle getting and posting new comments
        
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


})(angular.module('comimoc'), angular);

