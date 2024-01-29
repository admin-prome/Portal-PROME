// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  client_id: "204765225602-rj2pblpnnn9kr7iqm6phgbjoke9ut8qc.apps.googleusercontent.com",
  // prome_users_API_user: "https://promeusersapi.azurewebsites.net/PromeUsersAPI/GetSectorByEmail?userEmail=",
  prome_users_API_user: "https://localhost:44369/PromeUsersAPI/GetSectorByEmail?userEmail=",
  azure_function_URI: "https://vmreboothandler.azurewebsites.net/api/VMRebootHandler?code=nnCfTeSgMDtmkD0D0A_HqAWA14Y-eAh0uP94Ixt8ltyJAzFuv5QJCw==",
  azure_function_key: "nnCfTeSgMDtmkD0D0A_HqAWA14Y-eAh0uP94Ixt8ltyJAzFuv5QJCw==",
  serviciosTecnoUrl: "url",
  tecnoKey: "maxi"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
