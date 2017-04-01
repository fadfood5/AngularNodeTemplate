angular.module("App", ['ngMaterial'])
    .controller("HelloController", function($scope, $http, $window, $mdDialog, $mdToast) {
        'ngReact';
        //Global Declarations
        this.$scope = $scope;
        this.$mdDialog = $mdDialog;

        //Login
        $scope.mailLogin = "";
        $scope.passLogin = "";

        this.login = function() {
            $http.post('http://localhost/login', {
                "em": this.$scope.mailLogin,
                "pass": this.$scope.passLogin
            }).then(function(success) {
                console.log("authenticated");
                console.log(success);
                //window.location.href = '/admin';
            }, function(error) {
                console.log(error);
            });
        }

        //Register
        $scope.mailRegister = "";
        $scope.passRegister = "";
        $scope.passRegisterConfirm = "";

        this.register = function() {
            $http.post('http://localhost/register', {
                "email": this.$scope.mailRegister,
                "password": this.$scope.passRegister,
                "passwordConfirm": this.$scope.passRegisterConfirm
            }).then(function(success) {
                console.log("authenticated");
                console.log(success);
                //window.location.href = '/admin';
            }, function(error) {
                console.log(error);
            });
        }

        //Logout
        this.logout = function() {
            $http.post('http://localhost/logout').then(function(success) {
                console.log("Logout");
                console.log(success);
                //window.location.href = '/admin';
            }, function(error) {
                console.log(error);
            });
        }
    });
