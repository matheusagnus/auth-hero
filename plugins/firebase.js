
// Your web app's Firebase configuration
var config = {
apiKey: '',
authDomain: '',
databaseURL: '',
projectId: '',
storageBucket: '',
messagingSenderId: '',
appId: '',
};

!firebase.apps.length ? firebase.initializeApp(config) : "";

export const auth = firebase.auth();