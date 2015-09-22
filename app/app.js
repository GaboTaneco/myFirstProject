'use strict';

var app = angular.module('FoursquareApp', ['ngRoute', 'ngResource', 'ui.bootstrap', 'toaster', 'chieffancypants.loadingBar']);


app.config( function($routeProvider){

    $routeProvider.when(
                            "/explore", {
                                            controller:  "placesExplorerController",
                                            templateUrl: "views/placesresults.html"
                                        }
                        );
    $routeProvider.when(
                            "/places", {
                                controller:  "myPlacesController",
                                templateUrl: "views/myplaces.html"
                            }
                        );

    $routeProvider.when(
                            "/about", {
                                controller:  "aboutController",
                                templateUrl: "views/about.html"
                            }
                        );

    $routeProvider.otherwise({ redirectTo: "/explore" });

})
