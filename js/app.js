var app = angular.module('groceryListApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/',{
  	    templateUrl: 'views/groceryList.html',
  	    controller: 'itemCtrl'
    })
    .when('/addItem',{
  	    templateUrl: 'views/addItem.html',
  	    controller: 'itemCtrl'
    })
});

app.controller('homeCtrl', ['$scope', function($scope){
	$scope.groceryList = {};
	$scope.groceryList.appTitle = "Grocery List App";
}]);


app.controller('itemCtrl', ['$scope', function($scope){
	$scope.items = [
	  {completed: true, name: 'milk', date: '2017-03-01'},
	  {completed: true, name: 'cookies', date: '2017-03-02'},
	  {completed: true, name: 'ice cream', date: '2017-03-02'},
	  {completed: true, name: 'potatoes', date: '2017-03-03'},
	  {completed: true, name: 'cereal', date: '2017-03-04'},
	  {completed: true, name: 'bread', date: '2017-03-05'},
	  {completed: true, name: 'eggs', date: '2017-03-06'}
	]
}]);



