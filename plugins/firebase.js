
// Your web app's Firebase configuration
var config = {
apiKey: "AIzaSyBgLvkNLrcX1FvDYvH0gM_0XPUH0zvl1YE",
authDomain: "cloud-matheusagnus.firebaseapp.com",
databaseURL: "https://cloud-matheusagnus.firebaseio.com",
projectId: "cloud-matheusagnus",
storageBucket: "cloud-matheusagnus.appspot.com",
messagingSenderId: "358535536776",
appId: "1:358535536776:web:5a3d35f9e5264a65"
};

!firebase.apps.length ? firebase.initializeApp(config) : "";

export const auth = firebase.auth();