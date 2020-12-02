import * as openCageClient from "opencage-api-client"


//https://opencagedata.com/sdks
const superUnsafeStoredAPIKey = "2b40303aff3242b0892be10640293568"

export  function getCountryFromCoordinates(latitude,longitude ){


    return openCageClient.geocode({q: `${latitude}, ${longitude}`, language: 'en',key:superUnsafeStoredAPIKey}).then(data => {
      // console.log(JSON.stringify(data));
      if (data.status.code == 200) {
        if (data.results.length > 0) {
          var place = data.results[0];
          console.log(place.formatted);
          //Get and return the country name
          return (data.results[0].components.country);
        }
      } else if (data.status.code == 402) {
        console.log('hit free trial daily limit');
        console.log('become a customer: https://opencagedata.com/pricing'); 
      } else {
        // other possible response codes:
        // https://opencagedata.com/api#codes
        console.log('error', data.status.message);
      }
    }).catch(error => {
      console.log('error', error.message);
    });


}