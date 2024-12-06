import { useEffect, useState } from "react";
import { list_all_company, list_all_items } from "../service/reader";
import { TableView } from "../component/TableView";
import { TableViewPopUp } from "../component/TableViewPopUp";
const _ = require("lodash"); 

export const Item = ()=>{    
    const [companyList, setCompanyList] = useState([]);
    const [itemList, setItemList] = useState([]);
    useEffect(()=>{
        list_all_company(setCompanyList)
    },[])
    useEffect(()=>{
        list_all_items(setItemList)
    },[])

    const divStyle = { position: 'fixed', top: '10px', right: '10px', padding: '10px', borderRadius: '5px', };
    
    return <>
        <div style={divStyle}> 
            <TableViewPopUp
                buttonText={"Open All Company"}
                dataList={companyList}
            />
        </div>
        <h1> 
            ITEM PAGE
        </h1>
        <hr/>
        <TableView
            dataList={itemList}
        />
    </>;
}
