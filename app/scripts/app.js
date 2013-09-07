

(function(comimoc, angular) {
    
    comimoc.factory('Comments', ['$resource', 'COMIMOC_CONFIG', function($resource, COMIMOC_CONFIG) {
        // expose `Comments` resource service
        
        // transform on query GET
        var transformResponse = function(data) {
            var jsonData = angular.fromJson(data);
            return jsonData.comments;
        };
        
        return $resource(COMIMOC_CONFIG.RESOURCES_LOCATION,
                         {},
                         {'query':  {method:'GET',  isArray: true, transformResponse: transformResponse}});
        
    }]);
    
    comimoc.controller('CommentCtrl', ['$scope', 'Comments', 'COMIMOC_CONFIG', function($scope, Comments, COMIMOC_CONFIG) {
        // handle getting and posting new comments
        
        
        // -- private --
        
        var getPage = function() {
            var page = window.location.pathname;
            if(COMIMOC_CONFIG.ARGS) {
                page += window.location.search;
            }
            if(COMIMOC_CONFIG.HASH) {
                page += window.location.hash;
            }
            
            return page;
        };
        
        var getWebsite = function() {
            return COMIMOC_CONFIG.WEBSITE || '';
        };
        
        
        // -- public --
        
        $scope.comments = Comments.query({website: getWebsite(), page: getPage()});
        $scope.comment = new Comments();
        
        $scope.submit = function(valid) {
            if(valid) {
                $scope.comment.website = getWebsite();
                $scope.comment.page = getPage();
                
                $scope.comment.$save().then(
                    function(comment) {
                        $scope.comment = new Comments();
                        $scope.comments.push(comment);
                    },
                    function(resp) {
                        $scope.error = resp;
                    });
            }
        };
            
    }]);


})(angular.module('comimoc'), angular);

