// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  //THIS ARE TESTING CONFIG! DONT USE THAT IN PROD! CHANGE THAT!
  firebase: {
    apiKey: "AIzaSyC4mOkOIiMfgzrKE5oIMvI51FJaMZ7DwKA",
    authDomain: "ng2-admin-lte-a3958.firebaseapp.com",
    databaseURL: "https://ng2-admin-lte-a3958.firebaseio.com",
    storageBucket: "ng2-admin-lte-a3958.appspot.com",
    messagingSenderId: "201342590340"
  },
  auth0: {
    clientID: 'HEkxSwd54g8LXfr3P8g72tvmckSIF0KC',
    domain: 'ng2-admin-lte.eu.auth0.com'
  }
};
