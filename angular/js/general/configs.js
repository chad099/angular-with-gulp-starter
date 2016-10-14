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
