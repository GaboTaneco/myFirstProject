/**
 * Created by gaboTaneco on 27/08/15.
 */
//Get your client ID and secrent by visiting https://developer.foursquare.com
//Thise are demo client Id & secret.

var requestParms = {
    clientId: "DO5JJHGXBODWHZUZ2W45T0S35PKJH3MCLC1SKF5U4X3VF4YA",
    clientSecret: "GF0PDCNGEKSU2GI4ANGBGBKTEUU0G3E3QYPO5YWFXRV33GY5",
    version: "20131230"
}

//$resource: A factory which creates a resource object that lets you interact with RESTful server-side data sources.
app.factory('placesExplorerService', function($resource){

    var requestUri = 'https://api.foursquare.com/v2/venues/:action';

    return $resource( requestUri, {
                                    action:'explore',
                                    client_id: requestParms.clientId,
                                    clientSecret: requestParms.clientSecret,
                                    v: requestParms.version,
                                    venuePhotos: '1',
                                    callback: 'JSON_CALLBACK'
                                  },
                                  {
                                    get:{ method:'JSONP' }
                                  }
                    );

})