import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, setDoc, doc, getDocs } from "firebase/firestore"; 
import { useEffect, useState } from "react";
import { READ_COLLECTION_DATA_ID_LIST, WRITE_DOCUMENT } from "../service/api";

export const Dashboard = ()=>{
    const [item, setItem] = useState();
    const test = ()=>{
        const d = [
            {
              "Item Name": "L1 LittleAngel-PopularPants",
              "HSN/SAC": 99112495,
              "Rate": 14,
              "Inter State Tax Rate": 12,
              "Opening Stock": 0,
              "Stock On Hand": 1170,
              "Purchase Rate": 7.95
            },
            {
              "Item Name": "XL1 LittleAngel-PopularPants",
              "HSN/SAC": 91124108,
              "Rate": 16,
              "Inter State Tax Rate": 12,
              "Opening Stock": 0,
              "Stock On Hand": 480,
              "Purchase Rate": 9.08
            }]
        d.forEach(x=>{

            WRITE_DOCUMENT("testCollection",x["Item Name"],x)
        })

    }

    const getItem = ()=>{
        READ_COLLECTION_DATA_ID_LIST("testCollection",setItem)
    }
    return <>
        <h1 onClick={()=>{test()}}> Add new Item </h1>
        <h1 onClick={()=>{getItem()}}> Get all Item </h1>
        User - <pre>{JSON.stringify(item)}</pre>
    </>;
}