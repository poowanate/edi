import React from 'react'
import axios from 'axios'


export const getapims = () => {
 
 
    
    return axios({
       method: 'GET',
       url: 'http://103.245.164.54:5003/api/EDI_PO_IN_HEADER_LEVEL/PO_SUPPLIER_CODE/SUB000001',
     
     })
       .then((result) =>{
           console.log(result.data);
           return result.data
       }).catch((err)=>{
               console.log(err);
               return {error: 'error'}
       })
   
 
      
   
}
