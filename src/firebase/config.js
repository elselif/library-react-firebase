import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyA72nZ_zcWA8CMRaGCFBIwzLASNjtl-gw8",
    authDomain: "modern-react-app-bcf80.firebaseapp.com",
    projectId: "modern-react-app-bcf80",
    storageBucket: "modern-react-app-bcf80.appspot.com",
    messagingSenderId: "661965345731",
    appId: "1:661965345731:web:c0f27003f7bba49dc22376"
  };

  initializeApp(firebaseConfig);

  const db = getFirestore();
  
  export {db};