import * as openCageClient from "opencage-api-client";

//https://opencagedata.com/sdks
const superUnsafeStoredAPIKey = "2b40303aff3242b0892be10640293568";

export function getCountryFromCoordinates(latitude, longitude) {
  return openCageClient.geocode({
    q: `${latitude}, ${longitude}`,
    language: "en",
    key: superUnsafeStoredAPIKey,
  });
}
