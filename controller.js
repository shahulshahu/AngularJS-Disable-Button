var app = angular.module('MyApp', [])
        app.controller('MyController', function ($scope, $window) {
 
           
     
           $scope.menu = 
             [ 
             {
                "type":"breakfast",
                "items":["dosa","idli","vada"],
                "prices":[50,30,40]
             },
             {
                "type":"lunch",
                "items":["rice","noodles","chapathi"],
                "prices":[55,35,45]
             },
             {
                "type":"snacks",
                "items":["vada"],
                "prices":[50]
             }
                
                
             ]

		
$scope.ShowAlert = function () {
                if (typeof ($scope.order) == "undefined" || $scope.order== "") {
                   alert("Please enter your order!");
                    return;
                }

<!--                $window.alert("Your order name " + $scope.order);
-->
 

             
		var a,sat,v,st,tc;
                
		$scope.a= ($scope.c * $scope.q);		
		$scope.sat=14.5 * $scope.a / 100;	
		$scope.v=14.5 * $scope.a / 100;		
		$scope.st=0.5 * $scope.a / 100;		
		$scope.tc=$scope.a + $scope.sat + $scope.v + $scope.st;		
                 var array1=[$scope.a,$scope.sat,$scope.v,$scope.st,$scope.tc];
                 localStorage.setItem("array", array1);
var app=[];                
  app=localStorage.getItem("array");


$window.alert("Your order name " + $scope.order);
                  alert(app);

console.log(array1);

              

               
            }
		

        });
