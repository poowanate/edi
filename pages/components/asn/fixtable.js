import React ,{useMemo,useState,useEffect} from 'react'

import { useTable,useSortBy } from 'react-table'

import {COULUMNs} from '../../../headertable/columnby'
import {EDI_ASN_HEADE,EDI_ASN_HEADER_LEVEL,EDI_ASN_LINE_LEVEL,EDI_ASN_SUB_LINE_LEVEL} from '../../api/api_asn'
import {getEDI_ASN_HEADER,getEDI_ASN_HEADER_LEVEL,getEDI_ASN_LINE_LEVEL,getDATA_LINE_TYPE}from '../../api/api_asn'
import {PUTEDI_ASN_HEADE,putEDI_ASN_HEADER_LEVEL,putEDI_ASN_SUB_LINE_LEVEL,putEDI_ASN_LINE_LEVEL }from '../../api/api_asn'

import Swal from 'sweetalert2'
import asndetail from './listdata_asn'

import DatePicker,{registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import th from 'date-fns/locale/th';
import moment from 'moment'


setDefaultLocale(th);

function table(props) {
  const [chkupdateinset,setchkupdateinset] = useState(false);
   let listapi = []
   let listapilevel = []
   let listapiLINE = []
   let listapitype = []
  let number = 0;
  const [blindheader,setblindheader] = useState([]);


  const { values, setValues,resetFormControls } = props;


  let valuechk = null
  if(values){
    valuechk = values.customerid;
  }



 

      useEffect(() => {

        const fetchData = async () => {
   
          if(valuechk!= ''){
          listapi =  await getEDI_ASN_HEADER(valuechk)
      listapilevel = await getEDI_ASN_HEADER_LEVEL(valuechk)
      listapiLINE = await getEDI_ASN_LINE_LEVEL(valuechk)
      listapitype = await getDATA_LINE_TYPE(valuechk)
          }
          await fetchapidata()
  
         };
      
         
          fetchData();
        
         } ,[valuechk]
         
         );
      
       
    
         function refeshdata(){
          setchkupdateinset(false)
          setValues({
            customerid:''
        })
        clearall()
      }

 
async function clearall(){
  setchkupdateinset(false)
  setitem([])
      
       
  //1
      setDATA_LINE_TYPEfirst('')
      setFILE_CODEfirst('')
      setTOTAL_RECORDSfirst('')
      setdataid('')
      //2
      setdataidfour('')
      setdataidsec('')
      setASN_DATEsecond(new Date())
      setASN_NUMBERsecond('')
      setSHIPPED_DATEsecond(new Date())
      setPO_NUMBERsecond('')
      setHOSP_CODEsecond('')
      setHOSP_NAMEsecond('')
      setSHIP_TO_CODEsecond('')
      setINV_NET_PRICEsecond('')
  

      setLINE_NUMBERfour('')
      setLOT_NUMBERfour('')
      setLOT_QTYfour('')
      setEXPIRY_DATEfour(new Date())
      
}

 async function fetchapidata(){

  clearall()
console.log(listapitype)
      

      const gggwp =[


      ] 
   
    
        if(listapiLINE.length>0 && listapiLINE){
     
          for (let index = 0; index < listapiLINE.length; index++) {  
            
            gggwp.push ({
              id:listapiLINE[index].id,
                NO:index+1,
          DATA_LINE_TYPE:listapiLINE[index].datA_LINE_TYPE,
          LINE_NUMBER:Number(listapiLINE[index].linE_NUMBER),
          PO_LINE_NUMBER:Number(listapiLINE[index].pO_LINE_NUMBER),
          ITEM_CODE:listapiLINE[index].iteM_CODE,
          ITEM_NAME:listapiLINE[index].iteM_NAME,
          SHIPPED_QTY:Number(listapiLINE[index].shippeD_QTY),
          SHIPPED_UOM:Number(listapiLINE[index].shippeD_UOM),
          COUNTRY_OF_ORIGIN:listapiLINE[index].countrY_OF_ORIGIN,
          BILL_OF_LADING:listapiLINE[index].bilL_OF_LADING,
            })
              
            }
        
              
         
        
            setitem(gggwp)
        
          }
          console.log(listapi)  
          if(listapi.length>0 && listapi){
        //1
        setchkupdateinset(true)

        
            setDATA_LINE_TYPEfirst(listapi[0].datA_LINE_TYPE)
            setFILE_CODEfirst(listapi[0].filE_CODE)
            setTOTAL_RECORDSfirst(listapi[0].totaL_RECORDS)
            setdataid(Number(listapi[0].id))
            //2}
          }
          console.log(listapilevel)
            if(listapilevel.length>0 && listapilevel){

              var shippeddate = moment(new Date(listapilevel[0].shippeD_DATE)).format('YYYY-MM-DD');
              var asndate = moment(new Date(listapilevel[0].asN_DATE)).format('YYYY-MM-DD');
            

              setdataidsec(Number(listapilevel[0].id))
            setASN_DATEsecond(new Date(asndate))
            setASN_NUMBERsecond(listapilevel[0].asN_NUMBER)
            setSHIPPED_DATEsecond(new Date(shippeddate))
            setPO_NUMBERsecond(listapilevel[0].pO_NUMBER)
            setHOSP_CODEsecond(listapilevel[0].hosP_CODE)
            setHOSP_NAMEsecond(listapilevel[0].hosP_NAME)
            setSHIP_TO_CODEsecond(listapilevel[0].shiP_TO_CODE)
            setINV_NET_PRICEsecond(listapilevel[0].inV_NET_PRICE)
            }
            console.log(listapitype)
            if(listapitype.length>0 && listapitype){
              var expiry = moment(new Date(listapitype[0].expirY_DATE)).format('YYYY-MM-DD');

            setLINE_NUMBERfour(listapitype[0].linE_NUMBER)
            setLOT_NUMBERfour(listapitype[0].loT_NUMBER)
            setLOT_QTYfour(listapitype[0].loT_QTY)
            setEXPIRY_DATEfour(new Date(expiry))
            setdataidfour(Number(listapitype[0].id))
      
          }

      }

  




  useEffect(() => {



        const fetchData = async () => {
   
         await setitem([]);

        };



        fetchData();   
      } ,[]
      
      );



  const handleRemoveItem = idx => {
    // assigning the list to temp variable
    const temp = [...itemsecond];

    // removing the element using splice
    temp.splice(idx, 1);

    // updating the list
    setitemsecond(temp);
}


const savesecond= ()=>{
      
  setitemsecond([...itemsecond,{
      NO:itemsecond.length+1,
DATA_LINE_TYPE:DATA_LINE_TYPEfirst,
LINE_NUMBER:Number(LINE_NUMBER),
PO_LINE_NUMBER:Number(PO_LINE_NUMBER),
ITEM_CODE:ITEM_CODE,
ITEM_NAME:ITEM_NAME,
SHIPPED_QTY:Number(SHIPPED_QTY),
SHIPPED_UOM:Number(SHIPPED_UOM),
COUNTRY_OF_ORIGIN:COUNTRY_OF_ORIGIN,
BILL_OF_LADING:BILL_OF_LADING,
  }])
  // console.log(itemss)
}


const savetoapzzzi= ()=>{
console.log(values.refeshsave)

 

  

// console.log(itemss)
}
// const ggggwgwp= ()=>{
//   console.log(itemss)

//   console.log(aaa)
//    }
   

const savetoapi= ()=>{
      console.log(itemsecond)
  setitem([...itemss,...itemsecond ]
   

  
 )
 setitemsecond([])
 
  // console.log(itemss)
}

  const [isClosed,setclose] = useState(false);
  const [header, setheader] = useState([]);
  const [itemss,setitem] = useState([]);
  const [itemsecond,setitemsecond] = useState([]);

  const [DATA_LINE_TYPE, setDATA_LINE_TYPE] = useState('');
  const [LINE_NUMBER, setLINE_NUMBER] = useState('');
  const [PO_LINE_NUMBER, setPO_LINE_NUMBER] = useState('');
  const [ITEM_CODE, setITEM_CODE] = useState('');
  const [ITEM_NAME, setITEM_NAME] = useState('');
  const [SHIPPED_QTY, setSHIPPED_QTY] = useState('');
  const [SHIPPED_UOM, setSHIPPED_UOM] = useState('');
  const [COUNTRY_OF_ORIGIN, setCOUNTRY_OF_ORIGIN] = useState('');
  const [BILL_OF_LADING, setBILL_OF_LADING] = useState('');


  const [DATA_LINE_TYPEfirst,setDATA_LINE_TYPEfirst] = useState('');
  const [FILE_CODEfirst,setFILE_CODEfirst] = useState('');
  const [TOTAL_RECORDSfirst,setTOTAL_RECORDSfirst] = useState('');
  const [dataidsec,setdataidsec] = useState('');
  const [dataid,setdataid] = useState('');
  const [dataidfour,setdataidfour] = useState('');
  
  const [DATA_LINE_TYPEsecond,setDATA_LINE_TYPEsecond] = useState('');
  const [ASN_NUMBERsecond,setASN_NUMBERsecond] = useState('');
  const [ASN_DATEsecond,setASN_DATEsecond] = useState(new Date());
  const [SHIPPED_DATEsecond,setSHIPPED_DATEsecond] = useState(new Date());
  const [PO_NUMBERsecond,setPO_NUMBERsecond] = useState('');
  const [HOSP_CODEsecond,setHOSP_CODEsecond] = useState('');
  const [HOSP_NAMEsecond,setHOSP_NAMEsecond] = useState('');
  const [SHIP_TO_CODEsecond,setSHIP_TO_CODEsecond] = useState('');
  const [INV_NET_PRICEsecond,setINV_NET_PRICEsecond] = useState('');


  const [DATA_LINE_TYPEfour,setDATA_LINE_TYPEfour]= useState('');
  const [LINE_NUMBERfour,setLINE_NUMBERfour]= useState('');
  const [LOT_NUMBERfour,setLOT_NUMBERfour]= useState('');
  const [LOT_QTYfour,setLOT_QTYfour]= useState('');
  const [EXPIRY_DATEfour,setEXPIRY_DATEfour]= useState(new Date()); 



const checkjson=async ()=>{
  // setdataid('')
     //////////////ต้องมาทำมา
  if (chkupdateinset==false) { 
    const firstexcel_ASN = {
      DATA_LINE_TYPE:DATA_LINE_TYPEfirst,
      FILE_CODE:FILE_CODEfirst,
      TOTAL_RECORDS: Number(TOTAL_RECORDSfirst),

    }
    
   
  
  let firstasn = await EDI_ASN_HEADE(firstexcel_ASN);
  console.log(firstasn)
  
  const secondexcel_ASN = {
    HEADER_ID:firstasn.id,
    DATA_LINE_TYPE : DATA_LINE_TYPEfirst,
    ASN_NUMBER : ASN_NUMBERsecond,
    ASN_DATE : moment(ASN_DATEsecond).format("YYYY-MM-DD"),
    SHIPPED_DATE :  moment(SHIPPED_DATEsecond).format("YYYY-MM-DD"),
    PO_NUMBER : PO_NUMBERsecond,
    HOSP_CODE : HOSP_CODEsecond,
    HOSP_NAME : HOSP_NAMEsecond,
    SHIP_TO_CODE : SHIP_TO_CODEsecond,
    INV_NET_PRICE : Number(INV_NET_PRICEsecond),
  }
  console.log(JSON.stringify(secondexcel_ASN))
  let secondasn = await EDI_ASN_HEADER_LEVEL(secondexcel_ASN);
  console.log(secondasn)
  
  
  const tridsanlist = []
    if(itemss.length>0 && itemss){
      for (let index = 0; index < itemss.length; index++) {  
        
        tridsanlist.push ({
  
          HEADER_ID:firstasn.id,
          BILL_OF_LADING: itemss[index].BILL_OF_LADING,
          COUNTRY_OF_ORIGIN: itemss[index].COUNTRY_OF_ORIGIN,
          DATA_LINE_TYPE: itemss[index].DATA_LINE_TYPE,
          ITEM_CODE: itemss[index].ITEM_CODE,
          ITEM_NAME: itemss[index].ITEM_NAME,
          LINE_NUMBER:Number( itemss[index].LINE_NUMBER),
          NO: index+1,
          PO_LINE_NUMBER: Number(itemss[index].PO_LINE_NUMBER),
          SHIPPED_QTY:  Number(itemss[index].SHIPPED_QTY),
          SHIPPED_UOM: Number(itemss[index].SHIPPED_UOM),
  
  
        })
          
        }
      }
  
      console.log(tridsanlist)
  let thridasn = await EDI_ASN_LINE_LEVEL([{DATA:tridsanlist}]);
  console.log(thridasn)
  
  const fourexcel_asn = {
    HEADER_ID:firstasn.id,
    DATA_LINE_TYPE : DATA_LINE_TYPEfirst,
    LINE_NUMBER : Number(LINE_NUMBERfour),
    LOT_NUMBER : LOT_NUMBERfour,
    LOT_QTY : Number(LOT_QTYfour),
    EXPIRY_DATE : moment(EXPIRY_DATEfour).format("YYYY-MM-DD"), 
    
  }
  console.log(JSON.stringify(fourexcel_asn))
  let fourasn = await EDI_ASN_SUB_LINE_LEVEL(fourexcel_asn);
  console.log(fourasn)
  
  console.log( JSON.stringify(fourexcel_asn))
  
  console.log('[{"DATA":'+JSON.stringify(itemss)+'}]')
  
  if(values.refeshsave){
    setValues({
      refeshsave:false
    })
  }
  
  if(!values.refeshsave){
    setValues({
      refeshsave:true
    })
  }
  
  }
  else if (chkupdateinset==true) { 

    const firstexcel_ASN = {
      DATA_LINE_TYPE:DATA_LINE_TYPEfirst,
      FILE_CODE:FILE_CODEfirst,
      TOTAL_RECORDS: Number(TOTAL_RECORDSfirst),
      id:dataid,
    }
    
   
  
  let firstasn = await PUTEDI_ASN_HEADE(firstexcel_ASN,dataid);
  console.log(firstasn)
  
  const secondexcel_ASN = {
    HEADER_ID:dataid,
    DATA_LINE_TYPE : DATA_LINE_TYPEfirst,
    ASN_NUMBER : ASN_NUMBERsecond,
    ASN_DATE :moment(ASN_DATEsecond).format("YYYY-MM-DD") ,
    SHIPPED_DATE :  moment(SHIPPED_DATEsecond).format("YYYY-MM-DD") ,
    PO_NUMBER : PO_NUMBERsecond,
    HOSP_CODE : HOSP_CODEsecond,
    HOSP_NAME : HOSP_NAMEsecond,
    SHIP_TO_CODE : SHIP_TO_CODEsecond,
    INV_NET_PRICE : Number(INV_NET_PRICEsecond),
    id:dataidsec,
  }
  
  console.log(JSON.stringify(secondexcel_ASN))
  let secondasn = await putEDI_ASN_HEADER_LEVEL(secondexcel_ASN,dataidsec);
  console.log(secondasn)
  
  
  const tridsanlist = [] //อัน3
    if(itemss.length>0 && itemss){
      for (let index = 0; index < itemss.length; index++) {  
        
        tridsanlist.push ({
          HEADER_ID: dataid,
          id:itemss[index].id,
          BILL_OF_LADING: itemss[index].BILL_OF_LADING,
          COUNTRY_OF_ORIGIN: itemss[index].COUNTRY_OF_ORIGIN,
          DATA_LINE_TYPE: itemss[index].DATA_LINE_TYPE,
          ITEM_CODE: itemss[index].ITEM_CODE,
          ITEM_NAME: itemss[index].ITEM_NAME,
          LINE_NUMBER:Number( itemss[index].LINE_NUMBER),
          NO: index+1,
          PO_LINE_NUMBER: Number(itemss[index].PO_LINE_NUMBER),
          SHIPPED_QTY:  Number(itemss[index].SHIPPED_QTY),
          SHIPPED_UOM: Number(itemss[index].SHIPPED_UOM),
  
  
        })
          
        }
      }
  
      console.log(JSON.stringify(tridsanlist))
  let thridasn = await putEDI_ASN_LINE_LEVEL([{DATA:tridsanlist}]);
  console.log(thridasn)
  
  const fourexcel_asn = {
    HEADER_ID:dataid,
    DATA_LINE_TYPE :   DATA_LINE_TYPEfirst,
    LINE_NUMBER : Number(LINE_NUMBERfour),
    LOT_NUMBER : LOT_NUMBERfour,
    LOT_QTY : Number(LOT_QTYfour),
    EXPIRY_DATE :  moment(EXPIRY_DATEfour).format("YYYY-MM-DD") ,
    id:dataidfour,
  }
  
    
  console.log(JSON.stringify(fourexcel_asn))
  let fourasn = await putEDI_ASN_SUB_LINE_LEVEL(fourexcel_asn,dataidfour);
  console.log(fourasn)
  
  console.log( JSON.stringify(fourexcel_asn))
  
  console.log('[{"DATA":'+JSON.stringify(itemss)+'}]')
  
  if(values.refeshsave){
    setValues({
      refeshsave:false
    })
  }
  
  if(!values.refeshsave){
    setValues({
      refeshsave:true
    })
  }
  
  }
 
setalert()
setclosemodal(false)

}



const [isClosedmodal,setclosemodal] = useState(false);

    const columns = useMemo(()=> COULUMNs,[])
    const data = useMemo(()=> itemss)
  const Tableinstance =  useTable({
        columns,
        data
    },useSortBy)

    const { getTableProps
        ,getTableBodyProps 
        ,headerGroups 
        ,rows
        ,prepareRow} = Tableinstance

        const setalert= ()=>{
          let timerInterval
          Swal.fire({
            title: 'ยินดีด้วย',
            text:'บันทึกสำเร็จ <b></b>',
            html:'<b></b>',
          timer:5000,
          icon: 'success',
        })

        }
function gfdgdf(){
  console.log(itemsecond)
  setitemsecond([...itemss ]
    

  
 )
 setitem([])
}

    return (
      
      

  <div>


<div className='ml-30'>
{/* <button onClick={()=>ggggwgwp()}>1111111111</button> */}
{isClosedmodal ? (<div>
   
   <div className="fixed z-10 inset-0 overflow-y-auto"  >
<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
 

 <div className="fixed inset-0 transition-opacity" aria-hidden="true">
   <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
 </div>

 
 <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
 
 
 <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
   <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
     <div className="sm:flex sm:items-start">
       <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-500 sm:mx-0 sm:h-10 sm:w-10">
         
       <svg className="text-white w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
       </div>
       <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
         <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
           แจ้งเตือน
         </h3>
         <div className="mt-2">
           <p className="text-sm text-gray-500">
            ยืนยันลงข้อมูล
           </p>
         </div>
       </div>
     </div>
   </div>
   <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
     <button onClick={()=> checkjson()} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
       บันทึกข้อมูล
     </button>
     <button  onClick={()=> setclosemodal(false)} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
       ยกเลิก
     </button>
   </div>
 </div>
</div>
</div>

 </div>):(<div>

 </div>)}

<div className='flex flex-col w-full mt-2 mb-2'>
<button className='px-3 py-2 flex justify-center items-center bg-gradient-to-tl from-blue-500 to-blue-400 rounded text-white focus:outline-none font-semibold shadow hover:transition-colors hover:bg-gradient-to-tr transform transition hover:scale-110 ease-out duration-300 hover:shadow-md'  onClick={refeshdata}>Add Data</button>
  <div className="bg-white shadow rounded-lg p-6">
        <div className="mb-3 border-b gap-6">
     {/* <button onClick={()=>savetoapzzzi()}>asdasd</button> */}
         
    <h2 className='fonttop mb-5'>เซล 1</h2>
    </div>
    <div className="grid lg:grid-cols-2 gap-6  mt-3 pt-3">
      <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">DATA_LINE_TYPE</label>
          </p>
        </div>
        <p>
          <input maxLength={2} onChange={e => setDATA_LINE_TYPEfirst(e.target.value)} value={DATA_LINE_TYPEfirst} id="DATA_LINE_TYPE" autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
      <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="lastname" className="bg-white text-gray-600 px-1">FILE_CODE</label>
          </p>
        </div>
        <p>
          <input  onChange={e => setFILE_CODEfirst(e.target.value)} id="lastname" value={FILE_CODEfirst} autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 outline-none block h-full w-full"/>
        </p>
      </div>
      <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="username" className="bg-white text-gray-600 px-1">TOTAL_RECORDS</label>
          </p>
        </div>
        <p>
          <input onChange={e => setTOTAL_RECORDSfirst(e.target.value)} value={TOTAL_RECORDSfirst} id="username" autoComplete="false" tabIndex="0" type="number" className="py-1 px-1 outline-none block h-full w-full"/>
        </p>
      </div>
    
    </div>
   
  </div>
  <div className="bg-white shadow rounded-lg p-6">
        <div className="mb-3 border-b gap-6">
    <h2 className='fonttop mb-5'>เซล 2</h2>
    </div>
    <div className="grid lg:grid-cols-2 gap-6  mt-3 pt-3">
    <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">DATA_LINE_TYPE</label>
          </p>
        </div>
        <p>
          <input  maxLength={2}   onChange={e => setDATA_LINE_TYPEfirst(e.target.value)}  value={DATA_LINE_TYPEfirst} id="name" autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
 <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">ASN_NUMBER</label>
          </p>
        </div>
        <p>
          <input onChange={e => setASN_NUMBERsecond(e.target.value)} value={ASN_NUMBERsecond} id="name" autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
 <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">ASN_DATE</label>
          </p>
        </div>
        <p>
        <DatePicker onChange={date => setASN_DATEsecond(date)}  selected={ASN_DATEsecond} wrapperClassName="datePicker w-full" className='py-1 px-1 text-gray-900 outline-none block h-full w-full' dateFormat="dd-MM-yyyy"   />
   
          {/* <input  onChange={e => setASN_DATEsecond(e.target.value)} value={ASN_DATEsecond}  id="name" autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/> */}
        </p>
      </div>
 <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">SHIPPED_DATE</label>
          </p>
        </div>
        <p>
        <DatePicker onChange={date => setSHIPPED_DATEsecond(date)}  selected={SHIPPED_DATEsecond} wrapperClassName="datePicker w-full" className='py-1 px-1 text-gray-900 outline-none block h-full w-full' dateFormat="dd-MM-yyyy"   />
   
          {/* <input id="name" onChange={e => setSHIPPED_DATEsecond(e.target.value)} value={SHIPPED_DATEsecond}  autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/> */}
        </p>
      </div>
 <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">PO_NUMBER</label>
          </p>
        </div>
        <p>
          <input onChange={e => setPO_NUMBERsecond(e.target.value)} value={PO_NUMBERsecond}  id="name" autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
 <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">HOSP_CODE</label>
          </p>
        </div>
        <p>
          <input  onChange={e => setHOSP_CODEsecond(e.target.value)} value={HOSP_CODEsecond} id="name" autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
 <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">HOSP_NAME</label>
          </p>
        </div>
        <p>
          <input  onChange={e => setHOSP_NAMEsecond(e.target.value)}  value={HOSP_NAMEsecond} id="name" autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
 <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">SHIP_TO_CODE</label>
          </p>
        </div>
        <p>
          <input  onChange={e => setSHIP_TO_CODEsecond(e.target.value)}   value={SHIP_TO_CODEsecond} id="name" autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
 <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">INV_NET_PRICE</label>
          </p>
        </div>
        <p>
          <input  onChange={e => setINV_NET_PRICEsecond(e.target.value)}  value={INV_NET_PRICEsecond} id="name" autoComplete="false" tabIndex="0" type="number" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>

    </div>
   
  </div>
  

  
          </div>
      
          {isClosed ? (
<div><button className=" mb-2 inline-block text-sm px-4 py-2 leading-none border rounded text-black   hover: hover:text-teal hover: border-blue-500 mt-4 lg:mt-0" onClick={()=> setclose(false)}>ปิด</button>

<div>

<div className="grid lg:grid-cols-4 gap-6  mt-3 pt-3">
    <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
      <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
        <p>
          <label for="name" className="bg-white text-gray-600 px-1">DATA_LINE_TYPE *</label>
        </p>
      </div>
      <p>
        <input id="name" value={DATA_LINE_TYPEfirst} autocomplete="false" tabindex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"  maxLength={2}  onChange={e => setDATA_LINE_TYPEfirst(e.target.value)} />
      </p>
    </div>
    <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
      <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
        <p>
          <label for="name" className="bg-white text-gray-600 px-1">LINE_NUMBER *</label>
        </p>
      </div>
      <p>
        <input id="name" autocomplete="false" tabindex="0" type="number" className="py-1 px-1 text-gray-900 outline-none block h-full w-full" onChange={e => setLINE_NUMBER(e.target.value)} />
      </p>
    </div>
    <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
      <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
        <p>
          <label for="name" className="bg-white text-gray-600 px-1">PO_LINE_NUMBER *</label>
        </p>
      </div>
      <p>
        <input id="name" autocomplete="false" tabindex="0" type="number" className="py-1 px-1 text-gray-900 outline-none block h-full w-full" onChange={e => setPO_LINE_NUMBER(e.target.value)} />
      </p>
    </div>
    <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
      <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
        <p>
          <label for="name" className="bg-white text-gray-600 px-1">ITEM_CODE *</label>
        </p>
      </div>
      <p>
        <input id="name" autocomplete="false" tabindex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full" onChange={e => setITEM_CODE(e.target.value)} />
      </p>
    </div>
    <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
      <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
        <p>
          <label for="name" className="bg-white text-gray-600 px-1">ITEM_NAME *</label>
        </p>
      </div>
      <p>
        <input id="name" autocomplete="false" tabindex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full" onChange={e => setITEM_NAME(e.target.value)} />
      </p>
    </div>
    <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
      <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
        <p>
          <label for="name" className="bg-white text-gray-600 px-1">SHIPPED_QTY *</label>
        </p>
      </div>
      <p>
        <input id="name" autocomplete="false" tabindex="0" type="number" className="py-1 px-1 text-gray-900 outline-none block h-full w-full" onChange={e => setSHIPPED_QTY(e.target.value)} />
      </p>
    </div>
    <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
      <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
        <p>
          <label for="lastname" className="bg-white text-gray-600 px-1">SHIPPED_UOM *</label>
        </p>
      </div>
      <p>
        <input id="lastname" autocomplete="false" tabindex="0" type="number" className="py-1 px-1 outline-none block h-full w-full" onChange={e => setSHIPPED_UOM(e.target.value)}/>
      </p>
    </div>
    <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
      <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
        <p>
          <label for="username" className="bg-white text-gray-600 px-1">COUNTRY_OF_ORIGIN *</label>
        </p>
      </div>
      <p>
        <input id="username" autocomplete="false" tabindex="0" type="text" className="py-1 px-1 outline-none block h-full w-full" onChange={e => setCOUNTRY_OF_ORIGIN(e.target.value)}/>
      </p>
    </div>
    <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
      <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
        <p>
          <label for="password" className="bg-white text-gray-600 px-1">BILL_OF_LADING *</label>
        </p>
      </div>
      <p>
        <input id="password" autocomplete="false" tabindex="0" type="text" className="py-1 px-1 outline-none block h-full w-full"  onChange={e => setBILL_OF_LADING(e.target.value)}/>
      </p>
    </div>
</div>
              <button className='w-full textcenbytop  mt-2 mb-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={savesecond}>บันทึกข้อมูล</button>
             
          

          </div>   

          <table  className="border-collapse w-full">
<thead>

<tr >
<th className=" p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell" >NO</th>
<th className=" p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell" >DATA_LINE_TYPE</th>
<th className=" p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell" >LINE_NUMBER</th>
<th className=" p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell" >PO_LINE_NUMBER</th>
<th className=" p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell" >ITEM_CODE</th>
<th className=" p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell" >ITEM_NAME</th>
<th className=" p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell" >SHIPPED_QTY</th>
<th className=" p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell" >SHIPPED_UOM</th>
<th className=" p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell" >COUNTRY_OF_ORIGIN</th>
<th className=" p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell" >BILL_OF_LADING</th>

                   
{/* {ggwp()} */}

<th className=" p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">ลบ</th>

</tr>
</thead>
<tbody>
{
   itemsecond.map(( item, idx)=>(
<tr key={item.id} className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0" >

<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
{item.NO}
</td>
<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
{item.DATA_LINE_TYPE}
</td>
<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
{item.LINE_NUMBER}
</td>
<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
{item.PO_LINE_NUMBER}
</td>
<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
{item.ITEM_CODE}
</td>
<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
{item.ITEM_NAME}
</td>
<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
{item.SHIPPED_QTY}
</td>
<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
{item.SHIPPED_UOM}
</td>
<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
{item.COUNTRY_OF_ORIGIN}
</td>
<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
{item.BILL_OF_LADING}
</td>

<td key={idx} className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
  <button  onClick={() =>handleRemoveItem(idx)}><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokelinejoin="round" strokewidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
</button>
</td>
</tr> ) ) }
</tbody>
</table>
             
             
<button className='w-full textcenbytop  mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={savetoapi}>
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokelinejoin="round" strokewidth="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7"></path></svg>
</button>
</div>
):( 
<div>
<button  className=" mb-2 inline-block text-sm px-4 py-2 leading-none border rounded text-black   hover: hover:text-teal hover: border-blue-500 mt-4 lg:mt-0" onClick={()=> setclose(true)}>เปิด</button>

</div>

)
}

             
      </div>
  
      <table  className="mt-6 border-collapse w-full" {...getTableProps()}>
          <thead>
          {headerGroups.map(headerGroup => (
          <tr cl="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell" {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
            

            
              <th  className=" p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell" 
              {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render("Headers")}
              <span >
                  { column.isSorted ? (column.isSortedDesc ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokelinejoin="round" strokewidth="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7"></path></svg>: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokelinejoin="round" strokewidth="2" d="M5 11l7-7 7 7M5 19l7-7 7 7"></path></svg>) : ''}
              </span>
              </th>
           
            ))}
          </tr>
        ))}
            
          </thead>
          <tbody {...getTableBodyProps()}>
              {
                  rows.map(rows =>{
                      prepareRow(rows)
                      return(
                        <tr  className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0" {...rows.getRowProps()}>
                            {
                                rows.cells.map( cell =>{
                                  return  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static" {...cell.getCellProps()}>{cell.render('Cell')}
                        
                                    </td>
                                })
                            }
                     
                                      </tr>
                      )
                  })
              }
        
          </tbody>
      </table>

<button onClick={gfdgdf}>แก้ไข</button>
      <div className='flex flex-col w-full mt-2 mb-2'>

      <div className="bg-white shadow rounded-lg p-6">
        <div className="mb-3 border-b gap-6">
    <h2 className='fonttop mb-5'>เซล 4</h2>
    </div>
    <div className="grid lg:grid-cols-2 gap-6  mt-3 pt-3">
    <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">DATA_LINE_TYPE</label>
          </p>
        </div>
        <p>
          <input   maxLength={2}  onChange={e => setDATA_LINE_TYPEfirst(e.target.value)} id="name" autoComplete="false" tabIndex="0" type="text" value={DATA_LINE_TYPEfirst} className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
   <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">LINE_NUMBER</label>
          </p>
        </div>
        <p>
          <input  onChange={e => setLINE_NUMBERfour(e.target.value)} value={LINE_NUMBERfour} id="name" autoComplete="false" tabIndex="0" type="number" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
   <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">LOT_NUMBER</label>
          </p>
        </div>
        <p>
          <input onChange={e => setLOT_NUMBERfour(e.target.value)} value={LOT_NUMBERfour}  id="name" autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
   <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">LOT_QTY</label>
          </p>
        </div>
        <p>
          <input  onChange={e => setLOT_QTYfour(e.target.value)} value={LOT_QTYfour}  id="name" autoComplete="false" tabIndex="0" type="number" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
   <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">EXPIRY_DATE</label>
          </p>
        </div>
        <p>
        <DatePicker onChange={date => setEXPIRY_DATEfour(date)}  selected={EXPIRY_DATEfour} wrapperClassName="datePicker w-full" className='py-1 px-1 text-gray-900 outline-none block h-full w-full' dateFormat="dd-MM-yyyy"   />
   
          {/* <input  onChange={e => setEXPIRY_DATEfour(e.target.value)}  value={EXPIRY_DATEfour}  id="name" autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/> */}
        </p>
      </div>



    </div>
   
  </div>


        </div>
        <button className='w-full textcenbytop  mt-2 mb-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' 
        
        onClick={()=> setclosemodal(true)}
      
        >บันทึกข้อมูล</button>
             
             </div>
       

       
    )
}

export default table
