(function() {
    'use strict';

    angular
        .module('app')
        .controller('GitHubController', GitHubController);

    GitHubController.$inject = ['$http'];


    function GitHubController($http) {
        var vm = this
        vm.callGitHubApi = callGitHubApi;




        ///////////////////////////
        function callGitHubApi() {
            $http
                .get('http://api.github.com/users/' + vm.username + '?access_token=3fe76d3b892d08c5aee32a5dba6e64ba5b6354f0')
                .then(function(response) {
                    vm.userinfo = response.data;
                    if (vm.userinfo.hireable == null) {
                        vm.userinfo.hireable = 'Not looking for work';
                        vm.color = 'text-danger';
                    } else {
                        vm.userinfo.hireable = 'Looking for job!';
                        vm.color = 'text-success';

                    }

                })
                .catch(function(error) {
                    alert('An error occured while downloading user info from GitHub');
                });
            document.getElementById('hide').style.visibility = 'visible';
            document.getElementById('hiden').style.visibility = 'visible';

        }
}    
})();
