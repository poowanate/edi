




import React from 'react'
import axios from 'axios'


export const  EDI_PO_IN_HEADER = () => {
 

    
    return axios({
       method: 'get',
       url: 'http://103.245.164.54:5003/api/EDI_PO_IN_HEADER',
      
      
     })
       .then((result) =>{
           console.log(result.data);
           return result.data
       }).catch((err)=>{
               console.log(err);
               return {error: 'error'}
       })
   

   
}





