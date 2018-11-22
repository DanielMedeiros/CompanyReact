const Rebase = require('re-base')
const firebase = require('firebase')

const FirebaseConfig = {

    apiKey: "AIzaSyBixTklfdji09MqGn5EkWsOfRpeLMMeOpo",
    authDomain: "testedrm-a2057.firebaseapp.com",
    databaseURL: "https://testedrm-a2057.firebaseio.com",
    projectId: "testedrm-a2057",
    storageBucket: "testedrm-a2057.appspot.com",
    messagingSenderId: "967449702150"
  };

  const  app = firebase.initializeApp(FirebaseConfig)
  const config = Rebase.createClass(app.database())

export default config