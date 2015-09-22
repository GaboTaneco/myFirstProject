/**
 * Created by gaboTaneco on 27/08/15.
 */
'use strict';

app.controller('navigationController', function( $scope, $location, placesDataService){

        $scope.isActive = function(path){
            return $location.path().substr(0, path.length)==path;
        }
});