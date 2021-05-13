
import React from 'react'
import axios from 'axios'


export const  EDI_PO_IN_HEADER = (data) => {

       console.log(data)
    return axios({
        method: 'GET',
       url: 'http://103.245.164.54:5003/api/EDI_PO_IN_HEADER/GetbyCode?Code='+data,
      
      
     })
       .then((result) =>{
           console.log(result.data);
           return result.data
       }).catch((err)=>{
               console.log(err);
               return {error: 'error'}
       })
   


}

export const  EDI_PO_IN_HEADER_LEVEL = (data) => {

    console.log(data)
 return axios({
     method: 'GET',
    url: 'http://103.245.164.54:5003/api/EDI_PO_IN_HEADER_LEVEL/GetbyCode?Code='+data,
   
   
  })
    .then((result) =>{
        console.log(result.data);
        return result.data
    }).catch((err)=>{
            console.log(err);
            return {error: 'error'}
    })



}


export const  EDI_PO_IN_LINE_LEVEL = (data) => {

  console.log(data)
return axios({
   method: 'GET',
  url: 'http://103.245.164.54:5003/api/EDI_PO_IN_LINE_LEVEL/GetbyCode?Code='+data,
 
 
})
  .then((result) =>{
      console.log(result.data);
      return result.data
  }).catch((err)=>{
          console.log(err);
          return {error: 'error'}
  })



}


export const  postEDI_PO_IN_HEADER = (Pdata) => {

 
return axios({
   method: 'POST',
  url: 'http://103.245.164.54:5003/api/EDI_PO_IN_HEADER/',
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




export const  postEDI_PO_IN_HEADER_LEVEL = (Pdata) => {


return axios({
   method: 'POST',
  url: 'http://103.245.164.54:5003/api/EDI_PO_IN_HEADER_LEVEL/',
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




export const  postEDI_PO_IN_LINE_LEVEL = (Pdata) => {

return axios({
   method: 'POST',
  url: 'http://103.245.164.54:5003/api/EDI_PO_IN_LINE_LEVEL/CreateDataLINE_LEVEL/',
 
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


export const  putEDI_PO_IN_HEADER = (Pdata,id) => {

 console.log(Pdata.FILE_CODE)
  return axios({
     method: 'PUT',
    url: 'http://103.245.164.54:5003/api/EDI_PO_IN_HEADER/'+id,
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
  

  

export const  putEDI_PO_IN_HEADER_LEVEL = (Pdata,dataid) => {


  return axios({
     method: 'PUT',
    url: 'http://103.245.164.54:5003/api/EDI_PO_IN_HEADER_LEVEL/'+dataid,
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


  export const  putEDI_PO_IN_LINE_LEVEL = (Pdata) => {

    return axios({
       method: 'POST',
      url: 'http://103.245.164.54:5003/api/EDI_PO_IN_LINE_LEVEL/UpdateDataLINE_LEVEL',
     
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
    