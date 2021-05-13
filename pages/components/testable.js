import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {getapims} from '../api/apiseng'
import { keys } from '@material-ui/core/styles/createBreakpoints';

import Layout from "../bar/layout"
var stripe_load = () => {
 
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
};


  

const testable = () => {
 
    const[itemz,setitemz] = useState([]);


  

    useEffect(() => {
      stripe_load()
      const fetchData = async () => {
        const result = await getapims()
   
        setitemz(result);
      };
   
      fetchData();
    }, [setitemz]);

    return (
      <Layout>
        <div>

    { itemz.map(( item, idx)=>{
 
return( 

 


  
  
  <div className="w-full mb-10 ">
    
  
 
   
 
  <div className="overflow-hidden shadow-md ">
    <div>
       <div className="px-6 py-4 border bg-white shadow  border-gray-200 font-bold uppercase">
         <div className='flex flex-row'>

         
           <div className='flex  flex-row' > 
       pO_NUMBER &nbsp;&nbsp;{item.pO_NUMBER} 
           </div>
           
           <div className='flex-1 text-right'> 
         pO_DATE &nbsp;&nbsp; {item.pO_DATE}
           </div>
           </div>
           
        </div>
        <details>
    <summary>แสดงข้อมูล</summary>
    <div className="faq__content">
    <div className="  p-6 bg-white border-b border-gray-200">
            <div className='w-full'>
            <table className="w-full  flex flex-row flex-no-wrap sm:bgbluebytop rounded-lg overflow-hidden sm:shadow-lg my-5">
               <thead className="text-white">
                 <tr key={idx} className="bgbluebytop flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                   <th className="p-3 text-left">comment</th>
                   <th className="p-3 text-left">iteM_CODE</th>
                   <th className="p-3 text-left">iteM_NAME</th>
                 </tr>
                 <tr className="bgbluebytop flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                 <th className="p-3 text-left">comment</th>
                   <th className="p-3 text-left">iteM_CODE</th>
                   <th className="p-3 text-left">iteM_NAME</th>
                 </tr>
                       </thead>
           
               {
         item.vw_PO_Detail.map((item,idxz)=>{
     
        
           return(
        
     
            
                 <tbody  className="flex-1 sm:flex-none">
                  
               <tr key={idxz} className=" flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                   <td className="border-grey-light border hover:bg-gray-100 p-3">  {item.comment}</td>
                   <td className="border-grey-light border hover:bg-gray-100 p-3 truncate"> {item.iteM_CODE}</td>
                   <td className="border-grey-light border hover:bg-gray-100 p-3 truncate"> {item.iteM_NAME}</td>
                   </tr>
         
                   </tbody>
                  
           )
           
           })
            } 
               
                        
             </table>
         
            </div>
           
                    </div>
         
         
         
    
      </div>
  </details>
  


      </div>
      </div>

</div>
  
)
}




)}
       

        
        

        
       
    </div>

          </Layout>
           
        
    )
}

export default testable
