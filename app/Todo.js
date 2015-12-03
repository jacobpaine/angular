





// var app = angular.module("TodoApp", []);

// app.controller("TodoCtrl", 
// 	["$q", "$http", "$scope", function($scope) {
// 			$scope.title = "Welcome to your task list";
// 			$scope.beer = "BEER";
// 		  	$scope.macaroni = "";
// 		  	$scope.searchText = "";
// 		  	$scope.theToDo = "";

// 			$scope.todos = [
// 			    { name: "Cheese", complete: "food" },
// 			    { name: "Chicken", incomplete: "food" },
// 			    { name: "Beer", complete: "drink" },
// 			    { name: "Soda", incomplete: "drink" },
// 			   	{ name: "Blue", complete: "color" },
// 			    { name: "Red", incomplete: "color" },
// 			    { name: "The Princess Bride", complete: "movie" },
// 			    { name: "Fezzik", incomplete: "person" }
// 			    ];

// 			$scope.killTodo = function(todo) {
// 				  // Do you see the PFM here of full object comparison?
// 				  var todoIndex = $scope.todos.indexOf(todo); 

// 				  if (todoIndex >= 0) {
// 				    $scope.todos.splice(todoIndex, 1);
// 		  		}
// 			};
// 		  });


// 		// For use of Q in Angular
// 		var getSongs = $q(function(resolve, reject){
// 			$http.get('./data/songs.json')
// 			.success(
// 				function(objectFromJSONFile){
// 					resolve(objectFromJSONFile.songs);
// 				}, function (error) {
// 					reject(error);
// 				}
// 			);
// 		});

// 		getSongs.then(function (songs){
// 			console.log("songs", songs);
// 			}, function (error) {
// 				console.log("Failed");
// 			})
// 		])


