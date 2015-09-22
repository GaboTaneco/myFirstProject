/**
 * Created by ivanzmora on 27/08/15.
 */
'use strict';
app.controller('placesPhotosController', function($scope, $modalInstance, venueName, venuePhotos){
    $scope.venueName   = venueName;
    $scope.venuePhotos = venuePhotos;

    $scope.close = function(){
        $modalInstance.dismiss('cancel');
    };

    $scope.venuPhoto = function(photo){
        return photo.prefix + '256x256' + photo.sufix;
    }

});