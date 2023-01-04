

var abc = angular.module("abc", ['ngRoute'])

//router config
abc.config(($routeProvider)=>{
    $routeProvider
    .when("/", {
        templateUrl: './home.html',
        controller: "homeCtrl"
    })
    .when("/about", {
        templateUrl: './jobs.html',
        controller:'jobCtrl'
    })
    .when("/contact", {
        templateUrl: './search.html',
        controller: "searchCtrl"
    })
})

//controllers
abc.controller("abcCtrl", ($rootScope, $http)=>{
    //retrieve JSON file
    $http.get("./lab8data.json")
    .success(function(response){
        $rootScope.items = response
        console.log("JSON retrieved.")
    })
})

abc.controller("homeCtrl", function($scope, $rootScope){
    $rootScope.var = "Todays meetings"
    $scope.message = "There are no meetings for today!"
})

abc.controller("jobCtrl",function($scope,$rootScope, $http)
{
    $rootScope.var = "Active Jobs"
    //retrieve JSON file
    $http.get("./lab8data.json")
    .success(function(response){
        $rootScope.items = response
        console.log("JSON retrieved.")
    })
})
abc.controller("searchCtrl", function($scope,$rootScope, $http){
    $rootScope.var = "Search Jobs"
    $scope.message = "Search :"
    search_name = document.getElementById("search_name")
    search_name.addEventListener('keyup', ()=>{
        if(search_name.value.trim() == "")
        {
            document.getElementById("search_table").style.display = "none"
        }
        else
        {
            document.getElementById("search_table").style.display = "table"
        }
    })
})