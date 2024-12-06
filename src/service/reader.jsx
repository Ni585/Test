const _ = require("lodash"); 


export const parseCompanyList = (company_details_json)=>{
    const name_list = []
    _.forEach(_.get(company_details_json,'company'), (company_details) => {
        name_list.push({
            "name": _.get(company_details,'name'),
            "address": _.get(company_details,'address'),
            "GSTIN": _.get(company_details,'GSTIN'),
            "PAN": _.get(company_details,'PAN')
        })
    })
    return name_list
}

export const list_all_company = async (setCompanyList)=>{
    return fetch(`/data/company/company_details.json`)
        .then(response => response.json())
        .then(data => setCompanyList(parseCompanyList(data)))
        .catch(error => console.error('Error fetching file:', error));
}

//////////////////////////////////////////////////////


export const parseItemList = (item_details_json)=>{
    const name_list = []
    _.forEach(_.get(item_details_json,'itemList'), (item_details) => {
        name_list.push({
            "item_name": _.get(item_details,'Item Name'),
            "hsn/sac": _.get(item_details,'HSN/SAC'),
            "rate": _.get(item_details,'Rate'),
            "tax_rate": _.get(item_details,'Inter State Tax Rate'),
            "opening_stock": _.get(item_details,'Opening Stock'),
            "stock_on_hand": _.get(item_details,'Stock On Hand'),
            "purchase_rate": _.get(item_details,'Purchase Rate')
        })
    })
    return name_list
}
export const list_all_items = async (setItemList)=>{
    return fetch(`/data/company/company_item/motherandsonbabycareinc.json`)
        .then(response => response.json())
        .then(data => setItemList(parseItemList(data)))
        .catch(error => console.error('Error fetching file:', error));
}
