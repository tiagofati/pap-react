import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import useState from "react";

var Config = {
    apiKey: "AIzaSyBsFVdolNr71_CwHiCOTbjgolxbf00GR1k",
    authDomain: "pap-react.firebaseapp.com",
    projectId: "pap-react",
    storageBucket: "pap-react.appspot.com",
    messagingSenderId: "9410787259",
    appId: "1:9410787259:web:0c38722cdcc8d2f6b7369e",

  };


  class fire{
    constructor(){

      firebase.initializeApp(Config);
      this.auth = firebase.auth();
      this.firestore = firebase.firestore();
    }
    async login(email, password){
      var success = true;
      var error = null;
      const user = await firebase.auth().signInWithEmailAndPassword(email, password).catch(err => {
        success = false
        error = err
      });
      return {
        "success": success, 
        data: success ? user : error
      };
    }

    async signin(email, password){
      var success = true;
      var error = null;
      const user = await firebase.auth().createUserWithEmailAndPassword(email, password).catch(err =>{
           success = false
           error = err
        
      });
      return {
        "success": success, 
        data: success ? user : error
      };
    }


    async logout(){
      await firebase.auth().signOut().catch(err =>{
        console.log(err);

      });
    }

      async getUserState(){
        return new Promise (resolve => {
            this.auth.onAuthStateChanged(resolve)

        });
      }
  }

export default new fire();