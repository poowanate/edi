import React from 'react'
import axios from 'axios'


export const  EDI_ASN_HEADE = (Pdata) => {
 
 console.log(Pdata)
    
    return axios({
       method: 'POST',
       url: 'http://103.245.164.54:5003/api/EDI_ASN_HEADER',
       data: 
        Pdata
      
     })
       .then((result) =>{
           console.log(result.data);
           return result.data
       }).catch((err)=>{
               console.log(err);
               return {error: 'error'}
       })
   

   
}


export const EDI_ASN_HEADER_LEVEL =(Pdata) => {
 
 
    
    return axios({
        method: 'POST',
       url: 'http://103.245.164.54:5003/api/EDI_ASN_HEADER_LEVEL',
       data: 
        Pdata
      
     })
       .then((result) =>{
           console.log(result.data);
           return result.data
       }).catch((err)=>{
               console.log(err);
               return {error: 'error'}
       })
   

   
}


export const EDI_ASN_LINE_LEVEL = (Pdata) => {
 
  
  console.log(Pdata)
    
    return axios({
        method: 'POST',
       url: 'http://103.245.164.54:5003/api/EDI_ASN_LINE_LEVEL/CreateDataImport',
       data: 
        Pdata
     })
       .then((result) =>{
           console.log(result.data);
           return result.data
       }).catch((err)=>{
               console.log(err);
               return {error: 'error'}
       })
   

   
}

export const putEDI_ASN_LINE_LEVEL = (Pdata) => {
 
  
  console.log(Pdata)
    
    return axios({
        method: 'POST',
       url: 'http://103.245.164.54:5003/api/EDI_ASN_LINE_LEVEL/UpdateDataImport',
       data: 
        Pdata
     })
       .then((result) =>{
           console.log(result.data);
           return result.data
       }).catch((err)=>{
               console.log(err);
               return {error: 'error'}
       })
   

   
}


export const EDI_ASN_SUB_LINE_LEVEL =(Pdata) => {
 
 console.log(Pdata)
    
    return axios({
        method: 'POST',
       url: 'http://103.245.164.54:5003/api/EDI_ASN_SUB_LINE_LEVEL',
       data: 
        Pdata
      
     })
       .then((result) =>{
           console.log(result.data);
           return result.data
       }).catch((err)=>{
               console.log(err);
               return {error: 'error'}
       })
   

   
}




export const getEDI_ASN_HEADER =(data) => {

     
     return axios({
         method: 'GET',
        url: 'http://103.245.164.54:5003/api/EDI_ASN_HEADER/GetbyCode?DATA_LINE_TYPE='+data,
       
       
      })
        .then((result) =>{
            console.log(result.data);
            return result.data
        }).catch((err)=>{
                console.log(err);
                return {error: 'error'}
        })
    
 
    
 }


 export const getEDI_ASN_HEADER_LEVEL =(data) => {

     
  return axios({
      method: 'GET',
     url: ' http://103.245.164.54:5003/api/EDI_ASN_HEADER_LEVEL/GetbyCode?DATA_LINE_TYPE='+data,
    
    
   })
     .then((result) =>{
         console.log(result.data);
         return result.data
     }).catch((err)=>{
             console.log(err);
             return {error: 'error'}
     })
 

 
}



export const getEDI_ASN_LINE_LEVEL =(data) => {

     
  return axios({
      method: 'GET',
     url: ' http://103.245.164.54:5003/api/EDI_ASN_LINE_LEVEL/GetbyCode?DATA_LINE_TYPE='+data,
    
    
   })
     .then((result) =>{
         console.log(result.data);
         return result.data
     }).catch((err)=>{
             console.log(err);
             return {error: 'error'}
     })
 

 
}

export const getDATA_LINE_TYPE =(data) => {

     
  return axios({
      method: 'GET',
     url: 'http://103.245.164.54:5003/api/EDI_ASN_SUB_LINE_LEVEL/GetbyCode?DATA_LINE_TYPE='+data,




    
   })
     .then((result) =>{
         console.log(result.data);
         return result.data
     }).catch((err)=>{
             console.log(err);
             return {error: 'error'}
     })
 

 
}



 


export const  PUTEDI_ASN_HEADE = (Pdata,id) => {
 
  console.log(Pdata)
     
     return axios({
        method: 'PUT',
        url: 'http://103.245.164.54:5003/api/EDI_ASN_HEADER/'+id,
        data: 
         Pdata
       
      })
        .then((result) =>{
            console.log(result.data);
            return result.data
        }).catch((err)=>{
                console.log(err);
                return {error: 'error'}
        })
    
 
    
 }



 
export const putEDI_ASN_HEADER_LEVEL =(Pdata,id) => {
 
 
    
  return axios({
      method: 'PUT',
     url: 'http://103.245.164.54:5003/api/EDI_ASN_HEADER_LEVEL/'+id,
     data: 
      Pdata
    
   })
     .then((result) =>{
         console.log(result.data);
         return result.data
     }).catch((err)=>{
             console.log(err);
             return {error: 'error'}
     })
 

 
}




export const putEDI_ASN_SUB_LINE_LEVEL =(Pdata,id) => {
 

     
     return axios({
         method: 'PUT',
        url: 'http://103.245.164.54:5003/api/EDI_ASN_SUB_LINE_LEVEL/'+id,
        data: 
         Pdata
       
      })
        .then((result) =>{
            console.log(result.data);
            return result.data
        }).catch((err)=>{
                console.log(err);
                return {error: 'error'}
        })
    
 
    
 }