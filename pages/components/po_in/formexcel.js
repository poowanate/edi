import React,{useMemo,useEffect,useState} from "react";



import { useTable,useSortBy } from 'react-table'

import {COULUMNs} from '../../../headertable/column'

import {EDI_PO_IN_HEADER,EDI_PO_IN_HEADER_LEVEL,EDI_PO_IN_LINE_LEVEL,postEDI_PO_IN_HEADER,postEDI_PO_IN_HEADER_LEVEL,postEDI_PO_IN_LINE_LEVEL}from '../../api/api_poin'


import {putEDI_PO_IN_HEADER,putEDI_PO_IN_HEADER_LEVEL,putEDI_PO_IN_LINE_LEVEL } from '../../api/api_poin'

import DatePicker,{registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import th from 'date-fns/locale/th';
import moment from 'moment'


setDefaultLocale(th);

const formexcel = (props) => {
  const [chkupdateinset,setchkupdateinset] = useState(false);
  const { values, setValues,resetFormControls } = props;
  let valuechk = null
  if(values){
    valuechk = values.customerid;
  }
  


    let listapi = []
    let listapilevel = []
    let listapilinelv = []
    let listapitype = []

  useEffect(() => {


    const fetchData = async () => {

 
     await setitemlist([]);
    
    };
    
 
    fetchData();
    
  } ,[]
  
  );

  useEffect(() => {


    const fetchData = async () => {

      if(valuechk!= ''){
        listapi =  await EDI_PO_IN_HEADER(valuechk)
        listapilevel = await EDI_PO_IN_HEADER_LEVEL(valuechk)
        listapilinelv = await EDI_PO_IN_LINE_LEVEL(valuechk)
        
      }
  
      
      
      // listapilevel = await getEDI_ASN_HEADER_LEVEL(valuechk)
      // listapiLINE = await getEDI_ASN_LINE_LEVEL(valuechk)
      // listapitype = await getDATA_LINE_TYPE(valuechk)
    
      await   fetdata()
    };
    
 
    fetchData();
  
    
  } ,[valuechk]


  );

async function refeshdata(){
  setchkupdateinset(false)
  setValues({
    customerid:''
})

  setDATA_LINE_TYPEfirst('')
  setFILE_CODEfirst('')
setTOTAL_RECORDSfirst('')
setdataid('')
setdataidsec('')
setDATA_LINE_TYPEsecond('')
setPO_NUMBERsecond('')
setREVISED_FLAGsecond('')
setURGENT_FLAGsecond('')
setPO_DATEsecond(new Date())
setPO_TYPEsecond('')
setHOSP_CODEsecond('')
setHOSP_NAMEsecond('')
setCURRENCY_CODEsecond('')
setHOSP_SHIP_TO_DESCsecond('')
setHOSP_BUYER_DEPTsecond('')
setHOSP_BUYER_NAMEsecond('')
setSOLD_TO_CODEsecond('')
setSHIP_TO_CODEsecond('')
setDISCOUNT_PCTsecond(0)
setDISCOUNT_AMTsecond(0)
setTOTAL_AMOUNTsecond(0)
setVAT_TYPEsecond('')
setAMOUNT_EXC_VATsecond(0)
setVAT_AMOUNTsecond(0)
setAMOUNT_INC_VATsecond(0)
setPAYMENT_TERMSsecond('')
setNOTE_TO_SUPPLIERsecond('')
setSUPPLIER_CODEsecond('')
setPR_NUMBERsecond('')
setforaaam([])
setitemlist([])
}

  async function fetdata(){
  await  refeshdata()
 

    if(listapi.length>0 && listapi){
      setchkupdateinset(true)
      setDATA_LINE_TYPEfirst(listapi[0].datA_LINE_TYPE)
        setFILE_CODEfirst(listapi[0].filE_CODE)
    setTOTAL_RECORDSfirst(listapi[0].totaL_RECORDS)
    setdataid(Number(listapi[0].id))
    }

    if(listapilevel.length>0 && listapilevel){
      var datepo = moment(new Date(listapilevel[0].pO_DATE)).format('YYYY-MM-DD');
   
      var date = new Date(datepo)

    setdataidsec(Number(listapilevel[0].id))
  
setDATA_LINE_TYPEsecond(listapilevel[0].datA_LINE_TYPE)
setPO_NUMBERsecond(listapilevel[0].pO_NUMBER)
setREVISED_FLAGsecond(listapilevel[0].reviseD_FLAG)
setURGENT_FLAGsecond(listapilevel[0].urgenT_FLAG)
setPO_DATEsecond(date)
setPO_TYPEsecond(listapilevel[0].pO_TYPE)
setHOSP_CODEsecond(listapilevel[0].hosP_CODE)
setHOSP_NAMEsecond(listapilevel[0].hosP_NAME)
setCURRENCY_CODEsecond(listapilevel[0].currencY_CODE)
setHOSP_SHIP_TO_DESCsecond(listapilevel[0].hosP_SHIP_TO_DESC)
setHOSP_BUYER_DEPTsecond(listapilevel[0].hosP_BUYER_DEPT)
setHOSP_BUYER_NAMEsecond(listapilevel[0].hosP_BUYER_NAME)
setSOLD_TO_CODEsecond(listapilevel[0].solD_TO_CODE)
setSHIP_TO_CODEsecond(listapilevel[0].shiP_TO_CODE)
setDISCOUNT_PCTsecond(listapilevel[0].discounT_PCT)
setDISCOUNT_AMTsecond(listapilevel[0].discounT_AMT)
setTOTAL_AMOUNTsecond(listapilevel[0].totaL_AMOUNT)
setVAT_TYPEsecond(listapilevel[0].vaT_TYPE)
setAMOUNT_EXC_VATsecond(listapilevel[0].amounT_EXC_VAT)
setVAT_AMOUNTsecond(listapilevel[0].vaT_AMOUNT)
setAMOUNT_INC_VATsecond(listapilevel[0].amounT_INC_VAT)
setPAYMENT_TERMSsecond(listapilevel[0].paymenT_TERMS)
setNOTE_TO_SUPPLIERsecond(listapilevel[0].notE_TO_SUPPLIER)
setSUPPLIER_CODEsecond(listapilevel[0].supplieR_CODE)
setPR_NUMBERsecond(listapilevel[0].pR_NUMBER)

    }

    if(listapilinelv.length>0 && listapilinelv){

      const linelevel =[


      ] 
      console.log(listapilinelv)
        for (let index = 0; index < listapilinelv.length; index++) {  
          
          linelevel.push ({
            id:listapilinelv[index].id,
            DATA_LINE_TYPE:listapilinelv[index].datA_LINE_TYPE,
            LINE_NUMBER:Number(listapilinelv[index].linE_NUMBER),
            ITEM_CODE:listapilinelv[index].iteM_CODE,
            ITEM_NAME:listapilinelv[index].iteM_NAME,
            PACK_SIZE_DESC:listapilinelv[index].pacK_SIZE_DESC,
            QUANTITY:Number(listapilinelv[index].quantity),
            UOM:listapilinelv[index].uom,
            PRICE_PER_UNIT:Number(listapilinelv[index].pricE_PER_UNIT),
            TOTAL_AMOUNT:Number(listapilinelv[index].totaL_AMOUNT),
            PRICE_EXC_VAT:Number(listapilinelv[index].pricE_EXC_VAT),
            VAT_PRICE:Number(listapilinelv[index].vaT_PRICE),
            PRICE_INC_VAT:Number(listapilinelv[index].pricE_INC_VAT),
            AMOUNT_EXC_VAT:Number(listapilinelv[index].amounT_EXC_VAT),
            VAT_AMOUNT:Number(listapilinelv[index].vaT_AMOUNT),
            AMOUNT_INC_VAT:Number(listapilinelv[index].amounT_INC_VAT),
            FREE_ITEM:listapilinelv[index].freE_ITEM,
            NEED_BY_DATE:listapilinelv[index].neeD_BY_DATE,
            CONTRACT_NUMBER:listapilinelv[index].contracT_NUMBER,
            COMMENT:listapilinelv[index].comments,
            
          })
            
          }
      
            
       
      
           setitemlist(linelevel)




    }
    
    console.log(listapi)
    console.log(listapilinelv)
  }
  

    const [itemlist,setitemlist] = useState([]);

    const columns = useMemo(()=> COULUMNs,[])
    const data = useMemo(()=> itemlist)
  const Tableinstance =  useTable({
        columns,
        data
    },useSortBy)

    const { getTableProps
        ,getTableBodyProps 
        ,headerGroups 
        ,rows
        ,prepareRow} = Tableinstance

  const [DATA_LINE_TYPE,setDATA_LINE_TYPE] = useState('');
  const [LINE_NUMBER,setLINE_NUMBER] = useState('');
  const [ITEM_CODE,setITEM_CODE] = useState('');
  const [ITEM_NAME,setITEM_NAME] = useState('');
  const [PACK_SIZE_DESC,setPACK_SIZE_DESC] = useState('');
  const [QUANTITY,setQUANTITY] = useState(0);
  const [UOM,setUOM] = useState('');
  const [PRICE_PER_UNIT,setPRICE_PER_UNIT] = useState(0);
  const [TOTAL_AMOUNT,setTOTAL_AMOUNT] = useState(0);
  const [PRICE_EXC_VAT,setPRICE_EXC_VAT] = useState(0);
  const [VAT_PRICE,setVAT_PRICE] = useState(0);
  const [PRICE_INC_VAT,setPRICE_INC_VAT] = useState(0);
  const [AMOUNT_EXC_VAT,setAMOUNT_EXC_VAT] = useState(0);
  const [VAT_AMOUNT,setVAT_AMOUNT] = useState('');
  const [AMOUNT_INC_VAT,setAMOUNT_INC_VAT] = useState(0);
  const [FREE_ITEM,setFREE_ITEM] = useState('');
  const [NEED_BY_DATE,setNEED_BY_DATE] = useState(new Date());
  const [CONTRACT_NUMBER,setCONTRACT_NUMBER] = useState('');
  const [COMMENT,setCOMMENT] = useState('');
  const [form,setforaaam] = useState([]);
  const [isClosedmodal,setclosemodal] = useState(false);
  const [isClosedmodalsave,setisClosedmodalsave] = useState(false);


  const [dataidsec,setdataidsec] = useState('');
  const [dataid,setdataid] = useState('');
  const [DATA_LINE_TYPEfirst,setDATA_LINE_TYPEfirst] = useState('');
  const [FILE_CODEfirst,setFILE_CODEfirst] = useState('');
  const [TOTAL_RECORDSfirst,setTOTAL_RECORDSfirst] = useState('');


const [DATA_LINE_TYPEsecond,setDATA_LINE_TYPEsecond] = useState('')
const [PO_NUMBERsecond,setPO_NUMBERsecond] = useState('')
const [REVISED_FLAGsecond,setREVISED_FLAGsecond] = useState('')
const [URGENT_FLAGsecond,setURGENT_FLAGsecond] = useState('')
const [PO_DATEsecond,setPO_DATEsecond] = useState(new Date())
const [PO_TYPEsecond,setPO_TYPEsecond] = useState('')
const [HOSP_CODEsecond,setHOSP_CODEsecond] = useState('')
const [HOSP_NAMEsecond,setHOSP_NAMEsecond] = useState('')
const [CURRENCY_CODEsecond,setCURRENCY_CODEsecond] = useState('')
const [HOSP_SHIP_TO_DESCsecond,setHOSP_SHIP_TO_DESCsecond] = useState('')
const [HOSP_BUYER_DEPTsecond,setHOSP_BUYER_DEPTsecond] = useState('')
const [HOSP_BUYER_NAMEsecond,setHOSP_BUYER_NAMEsecond] = useState('')
const [SOLD_TO_CODEsecond,setSOLD_TO_CODEsecond] = useState('')
const [SHIP_TO_CODEsecond,setSHIP_TO_CODEsecond] = useState('')
const [DISCOUNT_PCTsecond,setDISCOUNT_PCTsecond] = useState(0)
const [DISCOUNT_AMTsecond,setDISCOUNT_AMTsecond] = useState(0)
const [TOTAL_AMOUNTsecond,setTOTAL_AMOUNTsecond] = useState(0)
const [VAT_TYPEsecond,setVAT_TYPEsecond] = useState('')
const [AMOUNT_EXC_VATsecond,setAMOUNT_EXC_VATsecond] = useState(0)
const [VAT_AMOUNTsecond,setVAT_AMOUNTsecond] = useState(0)
const [AMOUNT_INC_VATsecond,setAMOUNT_INC_VATsecond] = useState(0)
const [PAYMENT_TERMSsecond,setPAYMENT_TERMSsecond] = useState('')
const [NOTE_TO_SUPPLIERsecond,setNOTE_TO_SUPPLIERsecond] = useState('')
const [SUPPLIER_CODEsecond,setSUPPLIER_CODEsecond] = useState('')
const [PR_NUMBERsecond,setPR_NUMBERsecond] = useState('')


  const savesecond= async ()=>{

    await setforaaam([...itemlist,{
      DATA_LINE_TYPE:DATA_LINE_TYPEfirst,
      LINE_NUMBER:LINE_NUMBER,
      ITEM_CODE:ITEM_CODE,
      ITEM_NAME:ITEM_NAME,
      PACK_SIZE_DESC:PACK_SIZE_DESC,
      QUANTITY:QUANTITY,
      UOM:UOM,
      PRICE_PER_UNIT:PRICE_PER_UNIT,
      TOTAL_AMOUNT:TOTAL_AMOUNT,
      PRICE_EXC_VAT:PRICE_EXC_VAT,
      VAT_PRICE:VAT_PRICE,
      PRICE_INC_VAT:PRICE_INC_VAT,
      AMOUNT_EXC_VAT:AMOUNT_EXC_VAT,
      VAT_AMOUNT:VAT_AMOUNT,
      AMOUNT_INC_VAT:AMOUNT_INC_VAT,
      FREE_ITEM:FREE_ITEM,
      NEED_BY_DATE: moment(NEED_BY_DATE).format('DD-MM-YYYY'),
      CONTRACT_NUMBER:CONTRACT_NUMBER,
      COMMENT:COMMENT,
      ID:0,
    }])

     
    setclosemodal(true)
  }
 
  const savetoapi= ()=>{

    setitemlist([...form ])

    setclosemodal(false)
// console.log(itemss)
}

const refeshhook = ()=>{

}

 
const savepoin= async ()=>{

  if (chkupdateinset==false) {
    const firstexcel_poin = {
      DATA_LINE_TYPE: DATA_LINE_TYPEfirst,
      FILE_CODE: FILE_CODEfirst,
      TOTAL_RECORDS: Number(TOTAL_RECORDSfirst),
    };
    console.log(JSON.stringify(firstexcel_poin));

    let firstasn = await postEDI_PO_IN_HEADER(firstexcel_poin);
    console.log(firstasn);

    const secondexcel_poin = {
      HEADER_ID: firstasn.id,
      DATA_LINE_TYPE: DATA_LINE_TYPEfirst,
      PO_NUMBER: FILE_CODEfirst,
      REVISED_FLAG: REVISED_FLAGsecond,
      URGENT_FLAG: URGENT_FLAGsecond,
      PO_DATE: moment(PO_DATEsecond).format("YYYY-MM-DD"),
      PO_TYPE: PO_TYPEsecond,
      HOSP_CODE: HOSP_CODEsecond,
      HOSP_NAME: HOSP_NAMEsecond,
      CURRENCY_CODE: CURRENCY_CODEsecond,
      HOSP_SHIP_TO_DESC: HOSP_SHIP_TO_DESCsecond,
      HOSP_BUYER_DEPT: HOSP_BUYER_DEPTsecond,
      HOSP_BUYER_NAME: HOSP_BUYER_NAMEsecond,
      SOLD_TO_CODE: SOLD_TO_CODEsecond,
      SHIP_TO_CODE: SHIP_TO_CODEsecond,
      DISCOUNT_PCT: Number(DISCOUNT_PCTsecond),
      DISCOUNT_AMT: Number(DISCOUNT_AMTsecond),
      TOTAL_AMOUNT: Number(TOTAL_AMOUNTsecond),
      VAT_TYPE: VAT_TYPEsecond,
      AMOUNT_EXC_VAT: Number(AMOUNT_EXC_VATsecond),
      VAT_AMOUNT: Number(VAT_AMOUNTsecond),
      AMOUNT_INC_VAT: Number(AMOUNT_INC_VATsecond),
      PAYMENT_TERMS: PAYMENT_TERMSsecond,
      NOTE_TO_SUPPLIER: NOTE_TO_SUPPLIERsecond,
      SUPPLIER_CODE: SUPPLIER_CODEsecond,
      PR_NUMBER: PR_NUMBERsecond,
     
    };

    console.log(JSON.stringify(secondexcel_poin));
    let second = await postEDI_PO_IN_HEADER_LEVEL(secondexcel_poin);
    console.log(second);

    console.log(itemlist);
    const tridpoin = [];
    if (itemlist.length > 0 && itemlist) {
      for (let index = 0; index < itemlist.length; index++) {
        tridpoin.push({
          PO_NUMBER: FILE_CODEfirst,
          HEADER_ID: firstasn.id,
          DATA_LINE_TYPE: DATA_LINE_TYPEfirst,
          LINE_NUMBER: Number(itemlist[index].LINE_NUMBER),
          ITEM_CODE: itemlist[index].ITEM_CODE,
          ITEM_NAME: itemlist[index].ITEM_NAME,
          PACK_SIZE_DESC: itemlist[index].PACK_SIZE_DESC,
          QUANTITY: Number(itemlist[index].QUANTITY),
          UOM: itemlist[index].UOM,
          PRICE_PER_UNIT: Number(itemlist[index].PRICE_PER_UNIT),
          TOTAL_AMOUNT: Number(itemlist[index].TOTAL_AMOUNT),
          PRICE_EXC_VAT: Number(itemlist[index].PRICE_EXC_VAT),
          VAT_PRICE: Number(itemlist[index].VAT_PRICE),
          PRICE_INC_VAT: Number(itemlist[index].PRICE_INC_VAT),
          AMOUNT_EXC_VAT: Number(itemlist[index].AMOUNT_EXC_VAT),
          VAT_AMOUNT: Number(itemlist[index].VAT_AMOUNT),
          amounT_INC_VAT: Number(itemlist[index].AMOUNT_INC_VAT),
          FREE_ITEM: itemlist[index].FREE_ITEM,
          NEED_BY_DATE: itemlist[index].NEED_BY_DATE,
          CONTRACT_NUMBER: itemlist[index].CONTRACT_NUMBER,
          COMMENTS: itemlist[index].COMMENT,
        
        });
      }
    } 

    console.log(JSON.stringify(tridpoin));
    let thrid = await postEDI_PO_IN_LINE_LEVEL([{ DATA: tridpoin }]);
    console.log(thrid);

    if (values.refeshsave) {
      setValues({
        refeshsave: false,
      });
    }

    if (!values.refeshsave) {
      setValues({
        refeshsave: true,
      });
    }
    await refeshdata();
    setisClosedmodalsave(false);
  } 
  else if (chkupdateinset==true) { 
    const firstexcel_poin = {
      DATA_LINE_TYPE: DATA_LINE_TYPEfirst,
      FILE_CODE: FILE_CODEfirst,
      TOTAL_RECORDS: Number(TOTAL_RECORDSfirst),
      id:dataid,
    };
    console.log(JSON.stringify(firstexcel_poin));

    let firstasn = await putEDI_PO_IN_HEADER(firstexcel_poin,dataid);
    console.log(firstasn);
 
    const secondexcel_poin = {
      HEADER_ID: firstasn.id,
      DATA_LINE_TYPE: DATA_LINE_TYPEfirst,
      PO_NUMBER: FILE_CODEfirst,
      REVISED_FLAG: REVISED_FLAGsecond,
      URGENT_FLAG: URGENT_FLAGsecond,
      PO_DATE: moment(PO_DATEsecond).format("YYYY-MM-DD"),
      PO_TYPE: PO_TYPEsecond,
      HOSP_CODE: HOSP_CODEsecond,
      HOSP_NAME: HOSP_NAMEsecond,
      CURRENCY_CODE: CURRENCY_CODEsecond,
      HOSP_SHIP_TO_DESC: HOSP_SHIP_TO_DESCsecond,
      HOSP_BUYER_DEPT: HOSP_BUYER_DEPTsecond,
      HOSP_BUYER_NAME: HOSP_BUYER_NAMEsecond,
      SOLD_TO_CODE: SOLD_TO_CODEsecond,
      SHIP_TO_CODE: SHIP_TO_CODEsecond,
      DISCOUNT_PCT: Number(DISCOUNT_PCTsecond),
      DISCOUNT_AMT: Number(DISCOUNT_AMTsecond),
      TOTAL_AMOUNT: Number(TOTAL_AMOUNTsecond),
      VAT_TYPE: VAT_TYPEsecond,
      AMOUNT_EXC_VAT: Number(AMOUNT_EXC_VATsecond),
      VAT_AMOUNT: Number(VAT_AMOUNTsecond),
      AMOUNT_INC_VAT: Number(AMOUNT_INC_VATsecond),
      PAYMENT_TERMS: PAYMENT_TERMSsecond,
      NOTE_TO_SUPPLIER: NOTE_TO_SUPPLIERsecond,
      SUPPLIER_CODE: SUPPLIER_CODEsecond,
      PR_NUMBER: PR_NUMBERsecond,
      id:dataidsec,
    };

    console.log(JSON.stringify(secondexcel_poin));
    let second = await putEDI_PO_IN_HEADER_LEVEL(secondexcel_poin,dataidsec);
    console.log(second);

    console.log(itemlist);
    const tridpoin = [];
    if (itemlist.length > 0 && itemlist) {
      for (let index = 0; index < itemlist.length; index++) {
      
        tridpoin.push({
          PO_NUMBER: FILE_CODEfirst,
          HEADER_ID: firstasn.id,
          DATA_LINE_TYPE: DATA_LINE_TYPEfirst,
          LINE_NUMBER: Number(itemlist[index].LINE_NUMBER),
          ITEM_CODE: itemlist[index].ITEM_CODE,
          ITEM_NAME: itemlist[index].ITEM_NAME,
          PACK_SIZE_DESC: itemlist[index].PACK_SIZE_DESC,
          QUANTITY: Number(itemlist[index].QUANTITY),
          UOM: itemlist[index].UOM,
          PRICE_PER_UNIT: Number(itemlist[index].PRICE_PER_UNIT),
          TOTAL_AMOUNT: Number(itemlist[index].TOTAL_AMOUNT),
          PRICE_EXC_VAT: Number(itemlist[index].PRICE_EXC_VAT),
          VAT_PRICE: Number(itemlist[index].VAT_PRICE),
          PRICE_INC_VAT: Number(itemlist[index].PRICE_INC_VAT),
          AMOUNT_EXC_VAT: Number(itemlist[index].AMOUNT_EXC_VAT),
          VAT_AMOUNT: Number(itemlist[index].VAT_AMOUNT),
          amounT_INC_VAT: Number(itemlist[index].AMOUNT_INC_VAT),
          FREE_ITEM: itemlist[index].FREE_ITEM,
          NEED_BY_DATE: itemlist[index].NEED_BY_DATE,
          CONTRACT_NUMBER: itemlist[index].CONTRACT_NUMBER,
          comments: itemlist[index].COMMENT,
          ID:itemlist[index].id,
        });
      
   
 
      }
    }
    console.log(JSON.stringify(tridpoin) )
    let thrid = await putEDI_PO_IN_LINE_LEVEL  ([{ DATA: tridpoin }]);
    console.log(thrid);
   
   

    if (values.refeshsave) {
      setValues({
        refeshsave: false,
      });
    }

    if (!values.refeshsave) {
      setValues({
        refeshsave: true,
      });
    }
    await refeshdata();
    setisClosedmodalsave(false);
  }
}

const test =()=>{
  
 console.log(startDate)
 console.log(moment(startDate).format('YYYY-MM-DD'))

}

  return (
    
    <div className="w-full" >

      {isClosedmodal ? (<div>
   
      <div class="fixed z-10 inset-0 overflow-y-auto"  >
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    
   
    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>

    
    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
    
    
    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
            
            <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
              Deactivate account
            </h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500">
                Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button onClick={()=> savetoapi()} type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
          บันทึกข้อมูล
        </button>
        <button  onClick={()=> setclosemodal(false)} type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
          ยกเลิก
        </button>
      </div>
    </div>
  </div>
</div>
 
    </div>):(<div>

    </div>)}

    {isClosedmodalsave ? (<div>
   
   <div>

     
   </div>
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
     <button onClick={()=> savepoin()} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
       บันทึกข้อมูล
     </button>
     <button  onClick={()=> setisClosedmodalsave(false)} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
       ยกเลิก
     </button>
   </div>
 </div>
</div>
</div>

 </div>):(<div>

 </div>)}


  
      <div className="flex flex-col w-full">
      <button className='px-3 py-2 flex justify-center items-center bg-gradient-to-tl from-blue-500 to-blue-400 rounded text-white focus:outline-none font-semibold shadow hover:transition-colors hover:bg-gradient-to-tr transform transition hover:scale-110 ease-out duration-300 hover:shadow-md'  onClick={refeshdata}>Add Data</button>

      
          <div className='flex flex-col w-full mt-2 mb-2'>
  <div className="bg-white shadow rounded-lg p-6">
        <div className="mb-3 border-b gap-6">
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
          <input maxLength={2} onChange={e => setDATA_LINE_TYPEfirst(e.target.value)} value={DATA_LINE_TYPEfirst} id="name" autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
      <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="lastname" className="bg-white text-gray-600 px-1">FILE_CODE</label>
          </p>
        </div>
        <p>
          <input onChange={e => setFILE_CODEfirst(e.target.value)} value={FILE_CODEfirst}  id="lastname" autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 outline-none block h-full w-full"/>
        </p>
      </div>
      <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="username" className="bg-white text-gray-600 px-1">TOTAL_RECORDS</label>
          </p>
        </div>
        <p>
          <input onChange={e => setTOTAL_RECORDSfirst(e.target.value)} value={TOTAL_RECORDSfirst}  id="username" autoComplete="false" tabIndex="0" type="number"  maxLength='9'className="py-1 px-1 outline-none block h-full w-full"/>
        </p>
      </div>
    
    </div>
   
  </div>
          </div>
       
       
          <div className='flex flex-col w-full mt-2 mb-2'>
          <div className="bg-white shadow rounded-lg p-6">
        <div className="mb-3 border-b gap-6">
    <h2 className='fonttop mb-5'>เซล 2</h2>
    </div>
    <div className="grid lg:grid-cols-4 gap-6  mt-3 pt-3">
    <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">DATA_LINE_TYPE</label>
          </p>
        </div>
        <p>
        <input disabled maxLength={2} onChange={e => setDATA_LINE_TYPEfirst(e.target.value)} value={DATA_LINE_TYPEfirst} id="name" autoComplete="false" tabIndex="0" type="text" className="disable py-1 px-1 text-black outline-none block h-full w-full"/>
           </p>
      </div>
      <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">วันที่ออกใบสั่งซื้อ</label>
          </p>
        </div>  
        <p>
        <DatePicker onChange={date => setPO_DATEsecond(date)}  selected={PO_DATEsecond} wrapperClassName="datePicker w-full" className='py-1 px-1 text-gray-900 outline-none block h-full w-full' dateFormat="dd-MM-yyyy"   />
   
            </p>
      </div>
      <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">สถานที่ส่งมอบ</label>
          </p>
        </div>
        <p>
          <input onChange={e => setSHIP_TO_CODEsecond(e.target.value)} value={SHIP_TO_CODEsecond} id="SHIP_TO_CODEsecond" autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
      <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">ชื่อผู้จำหน่าย</label>
          </p>
        </div>
        <p>
          <input onChange={e => setHOSP_SHIP_TO_DESCsecond(e.target.value)} value={HOSP_SHIP_TO_DESCsecond} id="HOSP_SHIP_TO_DESCsecond" autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
      <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">รหัสผู้จำหน่าย</label>
          </p>
        </div>
        <p>
          <input onChange={e => setSUPPLIER_CODEsecond(e.target.value)} value={SUPPLIER_CODEsecond} id="SUPPLIER_CODEsecond" autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
      <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">% ส่วนลด</label>
          </p>
        </div>
        <p>
          <input onChange={e => setDISCOUNT_PCTsecond(e.target.value)} value={DISCOUNT_PCTsecond} id="DISCOUNT_PCTsecond" autoComplete="false" tabIndex="0" type="number"  maxLength='9'className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
  <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">ส่วนลดจำนวนเงิน</label>
          </p>
        </div>
        <p>
          <input onChange={e => setDISCOUNT_AMTsecond(e.target.value)} value={DISCOUNT_AMTsecond} id="DISCOUNT_AMTsecond" id="name" autoComplete="false" tabIndex="0" type="number"  maxLength='9'className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
      <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">มูลค่าไม่รวม VAT</label>
          </p>
        </div>
        <p>
          <input onChange={e => setAMOUNT_EXC_VATsecond(e.target.value)} value={AMOUNT_EXC_VATsecond}  id="AMOUNT_EXC_VATsecond" autoComplete="false" tabIndex="0" type="number"  maxLength='9'className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
  <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">มูลค่า VAT</label>
          </p>
        </div>
        <p>
          <input  onChange={e => setVAT_AMOUNTsecond(e.target.value)} value={VAT_AMOUNTsecond} id="VAT_AMOUNTsecond" autoComplete="false" tabIndex="0" maxLength='9' type="number"   className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
  <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">มูลค่ารวม VAT</label>
          </p>
        </div>
        <p>
          <input  onChange={e => setAMOUNT_INC_VATsecond(e.target.value)} value={AMOUNT_INC_VATsecond} id="AMOUNT_INC_VATsecond" autoComplete="false" tabIndex="0" type="number"  maxLength='9'className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
      </div>
    {/* <div className="grid lg:grid-cols-4 gap-6  mt-3 pt-3">
      <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">DATA_LINE_TYPE</label>
          </p>
        </div>
        <p>
        <input disabled maxLength={2} onChange={e => setDATA_LINE_TYPEfirst(e.target.value)} value={DATA_LINE_TYPEfirst} id="name" autoComplete="false" tabIndex="0" type="text" className="disable py-1 px-1 text-black outline-none block h-full w-full"/>
           </p>
      </div>
  <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">เลขที่ใบสั่งซื้อ</label>
          </p>
        </div>
        <p>
        <input disabled onChange={e => setFILE_CODEfirst(e.target.value)} value={FILE_CODEfirst}  id="PO_NUMBERsecond" autoComplete="false" tabIndex="0" type="text" className="disable py-1 px-1 text-black outline-none block h-full w-full"/>
    
             </p>
      </div>
  <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">REVISED_FLAG</label>
          </p>
        </div>
        <p>
          <input maxLength='1'  onChange={e => setREVISED_FLAGsecond(e.target.value)} value={REVISED_FLAGsecond}  id="REVISED_FLAGsecond" autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
  <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">URGENT_FLAG</label>
          </p>
        </div>
        <p>
          <input maxLength='1'  onChange={e => setURGENT_FLAGsecond(e.target.value)} value={URGENT_FLAGsecond}  id="URGENT_FLAGsecond" autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
  <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">วันที่ออกใบสั่งซื้อ</label>
          </p>
        </div>  
        <p>
        <DatePicker onChange={date => setPO_DATEsecond(date)}  selected={PO_DATEsecond} wrapperClassName="datePicker w-full" className='py-1 px-1 text-gray-900 outline-none block h-full w-full' dateFormat="dd-MM-yyyy"   />
   
            </p>
      </div>
  <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">PO_TYPE</label>
          </p>
        </div>
        <p>
          <input onChange={e => setPO_TYPEsecond(e.target.value)} value={PO_TYPEsecond} id="name" autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
  <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">HOSP_CODE</label>
          </p>
        </div>
        <p>
          <input   onChange={e => setHOSP_CODEsecond(e.target.value)} value={HOSP_CODEsecond} id="HOSP_CODEsecond" autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
  <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">HOSP_NAME</label>
          </p>
        </div>
        <p>
          <input onChange={e => setHOSP_NAMEsecond(e.target.value)} value={HOSP_NAMEsecond} id="name" autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
  <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">CURRENCY_CODE</label>
          </p>
        </div>
        <p>
          <input  onChange={e => setCURRENCY_CODEsecond(e.target.value)} value={CURRENCY_CODEsecond} id="CURRENCY_CODEsecond" autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
  <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">HOSP_SHIP_TO_DESC</label>
          </p>
        </div>
        <p>
          <input onChange={e => setHOSP_SHIP_TO_DESCsecond(e.target.value)} value={HOSP_SHIP_TO_DESCsecond} id="HOSP_SHIP_TO_DESCsecond" autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
  <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">HOSP_BUYER_DEPT</label>
          </p>
        </div>
        <p>
          <input  onChange={e => setHOSP_BUYER_DEPTsecond(e.target.value)} value={HOSP_BUYER_DEPTsecond} id="HOSP_BUYER_DEPTsecond" autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
  <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">HOSP_BUYER_NAME</label>
          </p>
        </div>
        <p>
          <input  onChange={e => setHOSP_BUYER_NAMEsecond(e.target.value)} value={HOSP_BUYER_NAMEsecond} id="HOSP_BUYER_NAMEsecond" autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
  <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">SOLD_TO_CODE</label>
          </p>
        </div>
        <p>
          <input  onChange={e => setSOLD_TO_CODEsecond(e.target.value)} value={SOLD_TO_CODEsecond} id="SOLD_TO_CODEsecond" autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
  <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">SHIP_TO_CODE</label>
          </p>
        </div>
        <p>
          <input onChange={e => setSHIP_TO_CODEsecond(e.target.value)} value={SHIP_TO_CODEsecond} id="SHIP_TO_CODEsecond" autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
  <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">DISCOUNT_PCT</label>
          </p>
        </div>
        <p>
          <input onChange={e => setDISCOUNT_PCTsecond(e.target.value)} value={DISCOUNT_PCTsecond} id="DISCOUNT_PCTsecond" autoComplete="false" tabIndex="0" type="number"  maxLength='9'className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
  <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">DISCOUNT_AMT</label>
          </p>
        </div>
        <p>
          <input onChange={e => setDISCOUNT_AMTsecond(e.target.value)} value={DISCOUNT_AMTsecond} id="DISCOUNT_AMTsecond" id="name" autoComplete="false" tabIndex="0" type="number"  maxLength='9'className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
  <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">TOTAL_AMOUNT</label>
          </p>
        </div>
        <p>
          <input onChange={e => setTOTAL_AMOUNTsecond(e.target.value)} value={TOTAL_AMOUNTsecond} id="TOTAL_AMOUNTsecond" autoComplete="false" tabIndex="0" type="number"  maxLength='9'className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
  <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">VAT_TYPE</label>
          </p>
        </div>
        <p>
          <input maxLength='1' onChange={e => setVAT_TYPEsecond(e.target.value)} value={VAT_TYPEsecond} id="VAT_TYPEsecond" autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
  <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">AMOUNT_EXC_VAT</label>
          </p>
        </div>
        <p>
          <input onChange={e => setAMOUNT_EXC_VATsecond(e.target.value)} value={AMOUNT_EXC_VATsecond}  id="AMOUNT_EXC_VATsecond" autoComplete="false" tabIndex="0" type="number"  maxLength='9'className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
  <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">VAT_AMOUNT</label>
          </p>
        </div>
        <p>
          <input  onChange={e => setVAT_AMOUNTsecond(e.target.value)} value={VAT_AMOUNTsecond} id="VAT_AMOUNTsecond" autoComplete="false" tabIndex="0" maxLength='9' type="number"   className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
  <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">AMOUNT_INC_VAT</label>
          </p>
        </div>
        <p>
          <input  onChange={e => setAMOUNT_INC_VATsecond(e.target.value)} value={AMOUNT_INC_VATsecond} id="AMOUNT_INC_VATsecond" autoComplete="false" tabIndex="0" type="number"  maxLength='9'className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
  <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">PAYMENT_TERMS</label>
          </p>
        </div>
        <p>
          <input onChange={e => setPAYMENT_TERMSsecond(e.target.value)} value={PAYMENT_TERMSsecond}  id="name" autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
  <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">NOTE_TO_SUPPLIER</label>
          </p>
        </div>
        <p>
          <input onChange={e => setNOTE_TO_SUPPLIERsecond(e.target.value)} value={NOTE_TO_SUPPLIERsecond}  id="NOTE_TO_SUPPLIERsecond" autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
  <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">SUPPLIER_CODE</label>
          </p>
        </div>
        <p>
          <input onChange={e => setSUPPLIER_CODEsecond(e.target.value)} value={SUPPLIER_CODEsecond} id="SUPPLIER_CODEsecond" autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
      <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">PR_NUMBER</label>
          </p>
        </div>
        <p>
          <input onChange={e => setPR_NUMBERsecond(e.target.value)} value={PR_NUMBERsecond} id="PR_NUMBERsecond" autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
      
    </div>
    */}
  </div>
          </div>
      
          <div className='flex flex-col w-full mt-2 mb-2'>
          <div className="bg-white shadow rounded-lg p-6">
        <div className="mb-3 border-b gap-6">
    <h2 className='fonttop mb-5'>เซล 3</h2>
    </div>
    <div className="grid lg:grid-cols-4 gap-6  mt-3 pt-3">
    <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">DATA_LINE_TYPE</label>
          </p>
        </div>
        <p>
        <input disabled maxLength={2} onChange={e => setDATA_LINE_TYPEfirst(e.target.value)} value={DATA_LINE_TYPEfirst} id="name" autoComplete="false" tabIndex="0" type="text" className="disable py-1 px-1 text-black outline-none block h-full w-full"/>
           </p>
      </div>
      <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">ชื่อสินค้า</label>
          </p>
        </div>
        <p>
          <input id="ITEM_NAME" onChange={e => setITEM_NAME(e.target.value)}  id="name" autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
      <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">ราคาต่อหน่วย</label>
          </p>
        </div>
        <p>
          <input id="PRICE_PER_UNIT" onChange={e => setPRICE_PER_UNIT(e.target.value)}  autoComplete="false" tabIndex="0" type="number"  maxLength='9'className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
      <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">จำนวน</label>
          </p>
        </div>
        <p>
          <input id="QUANTITY" onChange={e => setQUANTITY(e.target.value)} autoComplete="false" tabIndex="0" type="number"  maxLength='9'className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
      <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">ราคาต่อหน่วย no vat</label>
          </p>
        </div>
        <p>
          <input id="PRICE_PER_UNIT" onChange={e => setPRICE_PER_UNIT(e.target.value)}  autoComplete="false" tabIndex="0" type="number"  maxLength='9'className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
      <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">ราคารวม no vat</label>
          </p>
        </div>
        <p>
          <input id="PRICE_EXC_VAT" onChange={e => setPRICE_EXC_VAT(e.target.value)} autoComplete="false" tabIndex="0" type="number"  maxLength='9'className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
      <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">ภาษีมูลค่าเพิ่ม</label>
          </p>
        </div>
        <p>
          <input  id="VAT_AMOUNT" onChange={e => setVAT_AMOUNT(e.target.value)} autoComplete="false" tabIndex="0" type="number"  maxLength='9'className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
      <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">ราคารวม VAT</label>
          </p>
        </div>
        <p>
          <input  id="AMOUNT_INC_VAT" onChange={e => setAMOUNT_INC_VAT(e.target.value)}  autoComplete="false" tabIndex="0" type="number"  maxLength='9'className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
    </div>
    {/* <div className="grid lg:grid-cols-4 gap-6  mt-3 pt-3">
    <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">DATA_LINE_TYPE</label>
          </p>
        </div>
        <p>
        <input disabled maxLength={2} onChange={e => setDATA_LINE_TYPEfirst(e.target.value)} value={DATA_LINE_TYPEfirst} id="name" autoComplete="false" tabIndex="0" type="text" className="disable py-1 px-1 text-black outline-none block h-full w-full"/>
           </p>
      </div>
 <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">LINE_NUMBER</label>
          </p>
        </div>
        <p> 
          <input id="LINE_NUMBER"  onChange={e => setLINE_NUMBER(e.target.value)}  autoComplete="false" tabIndex="0" type="number"  maxLength='9'className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
      
 <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">ITEM_CODE</label>
          </p>
        </div>
        <p>
          <input id="ITEM_CODE" onChange={e => setITEM_CODE(e.target.value)} autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
 <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">ITEM_NAME</label>
          </p>
        </div>
        <p>
          <input id="ITEM_NAME" onChange={e => setITEM_NAME(e.target.value)}  id="name" autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
 <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">PACK_SIZE_DESC</label>
          </p>
        </div>
        <p>
          <input id="PACK_SIZE_DESC" onChange={e => setPACK_SIZE_DESC(e.target.value)} autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
 <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">QUANTITY</label>
          </p>
        </div>
        <p>
          <input id="QUANTITY" onChange={e => setQUANTITY(e.target.value)} autoComplete="false" tabIndex="0" type="number"  maxLength='9'className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
 <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">UOM</label>
          </p>
        </div>
        <p>
          <input id="UOM" onChange={e => setUOM(e.target.value)}  autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
 <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">PRICE_PER_UNIT</label>
          </p>
        </div>
        <p>
          <input id="PRICE_PER_UNIT" onChange={e => setPRICE_PER_UNIT(e.target.value)}  autoComplete="false" tabIndex="0" type="number"  maxLength='9'className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
 <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">TOTAL_AMOUNT</label>
          </p>
        </div>
        <p>
          <input id="TOTAL_AMOUNT" onChange={e => setTOTAL_AMOUNT(e.target.value)} autoComplete="false" tabIndex="0" type="number"  maxLength='9'className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
 <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">PRICE_EXC_VAT</label>
          </p>
        </div>
        <p>
          <input id="PRICE_EXC_VAT" onChange={e => setPRICE_EXC_VAT(e.target.value)} autoComplete="false" tabIndex="0" type="number"  maxLength='9'className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
 <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">VAT_PRICE</label>
          </p>
        </div>
        <p>
          <input id="VAT_PRICE" onChange={e => setVAT_PRICE(e.target.value)} autoComplete="false" tabIndex="0" type="number"  maxLength='9'className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
 <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">PRICE_INC_VAT</label>
          </p>
        </div>
        <p>
          <input id="PRICE_INC_VAT" onChange={e => setPRICE_INC_VAT(e.target.value)}  autoComplete="false" tabIndex="0" type="number"  maxLength='9'className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
 <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">AMOUNT_EXC_VAT</label>
          </p>
        </div>
        <p>
          <input id="AMOUNT_EXC_VAT" onChange={e => setAMOUNT_EXC_VAT(e.target.value)} autoComplete="false" tabIndex="0" type="number"  maxLength='9'className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
 <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">VAT_AMOUNT</label>
          </p>
        </div>
        <p>
          <input  id="VAT_AMOUNT" onChange={e => setVAT_AMOUNT(e.target.value)} autoComplete="false" tabIndex="0" type="number"  maxLength='9'className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
 <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">AMOUNT_INC_VAT</label>
          </p>
        </div>
        <p>
          <input  id="AMOUNT_INC_VAT" onChange={e => setAMOUNT_INC_VAT(e.target.value)}  autoComplete="false" tabIndex="0" type="number"  maxLength='9'className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
 <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">FREE_ITEM</label>
          </p>
        </div>
        <p>
          <input maxLength='1' id="FREE_ITEM" onChange={e => setFREE_ITEM(e.target.value)}  autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
 <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">NEED_BY_DATE</label>
          </p>
        </div>
        <p>
        <DatePicker onChange={date => setNEED_BY_DATE(date)}  selected={NEED_BY_DATE} wrapperClassName="datePicker w-full" className='py-1 px-1 text-gray-900 outline-none block h-full w-full' dateFormat="dd-MM-yyyy"   />
   
               </p>
      </div>
 <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">CONTRACT_NUMBER</label>
          </p>
        </div>
        <p>
          <input  id="CONTRACT_NUMBER" onChange={e => setCONTRACT_NUMBER(e.target.value)} autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>
 <div className="border border-gray-800 focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label htmlFor="name" className="bg-white text-gray-600 px-1">COMMENT</label>
          </p>
        </div>
        <p>
          <input id="COMMENT" onChange={e => setCOMMENT(e.target.value)} autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
        </p>
      </div>

    </div>
     */}
    </div></div>


    <button className='mb-3 mt-2 bg-blue-500 hover:bg-blue-700 textcenbytop text-white font-bold py-2 px-4 rounded'
     onClick={()=> savesecond()}>
<svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7"></path></svg>
</button>
             
<div className="scrollit flex flex-1 w-50">

<table  className="border-collapse w-full" {...getTableProps()}>
    <thead>
    {headerGroups.map(headerGroup => (
    <tr cl="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell" {...headerGroup.getHeaderGroupProps()}>
      {headerGroup.headers.map(column => (
        <th  className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell" 
        {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render("Headers")}
        <span >
            { column.isSorted ? (column.isSortedDesc ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7"></path></svg>: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11l7-7 7 7M5 19l7-7 7 7"></path></svg>) : ''}
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

</div>
 


      
      </div>
 
      <button className='w-full textcenbytop  mt-2 mb-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' 
        
        onClick={()=> setisClosedmodalsave(true)}
      
        >บันทึกข้อมูล</button>
    </div>
  
  );
};

export default formexcel;
