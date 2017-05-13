angular
  .module('InfamousCriminals', ['ui.router'])
  .config(CriminalRouter);

function CriminalRouter($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/");

  $stateProvider
  .state('index', {
    url: '/',
    templateUrl: 'list.html',
    controller: 'CriminalsListController',
    controllerAs: 'listVm'
  })
  .state('new', {
    url: '/new',
    templateUrl: 'new.html',
    controller: 'CriminalsNewController',
    controllerAs: 'newVm'
  })
  .state('about', {
    url: '/about',
    templateUrl: 'about.html'
  })
  .state('signin', {
    url: '/signin',
    templateUrl: 'signin.html',
    controller: 'SignInController',
    controllerAs: 'vm'
  });
}
