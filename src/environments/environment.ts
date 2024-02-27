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
  serviciosTecnoUrl: "https://servicios-tecno-prd.azurewebsites.net/api/",
  tecnoKey: "ee9ee2c4349bf1df3ee2a8614953006d60648567621117f6b910b421d923ace329a24ca48c2c32148a20d819442092c1b70f5fe40b756401b5eb1df1e8d48058cc5d6d47087a68fc32f9a5ef0e307daf07e38ad57f8f359d0a02e15bc1d391a4fe4f75156ea72c4c4f5705fefca62f0ca6dd9bf22ab665d5f9e09847c59336f3b5e0611c490947de3fcbd5a38dd21d64"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
