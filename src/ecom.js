(function (ecom, undefined)
{
	ecom.Version     = 0;
	ecom.Views	     = 'angular/views';
	ecom.Factory	   = {};
	ecom.Modules	   = {};
	ecom.Configs	   = {};
	ecom.Controllers = {};
	ecom.Directives	 = {};
}( window.ecom = window.ecom || {} ));

(function(Modules, undefined)
{
	Modules.ecom = angular.module("ecom",['ngRoute']);
}(ecom.Modules = ecom.Modules || {} ));

(function(Configs, undefined)
{
  ecom.Modules.ecom.config(function ($routeProvider)
  {
      $routeProvider
        .when('/',{
              templateUrl:ecom.Views + '/home.html',
              controller:'homeController'
        })
        .when('/sample',{
              templateUrl:ecom.Views+ '/sample.html'
        })
        .otherwise({
            redirectTo:'/',
            templateUrl:ecom.Views + '/home.html'
        });
  });
}(ecom.Configs = ecom.Configs || {} ));

(function(Controllers, undefined)
{
  ecom.Modules.ecom.controller('homeController',['$scope', function($scope)
  {
    console.log("This is home controller");
  }]);
}(ecom.Controllers = ecom.Controllers || {} ));
