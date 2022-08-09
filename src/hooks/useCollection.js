import { useState,useEffect } from "react";

import {db} from "../firebase/config"
import { collection,onSnapshot } from "firebase/firestore";

export const useCollection = (col) => {

    const [documents,setDocuments] = useState(null);

    useEffect(() => {

        let ref = collection(db,col);

        const unsub=onSnapshot(ref,(snapshot) => {

            let results = [];

            snapshot.docs.forEach(doc => {
                results.push({id:doc.id,...doc.data()});
            })

            setDocuments(results);

        },err=>{
            console.log(err.message);
        })

        return () => unsub();

    },[])

    return {documents}


}

