import React,{useMemo,useState,useEffect,useRef} from 'react'

import { useTable,useSortBy } from 'react-table'

import {EDI_PO_IN_HEADER} from '../../api/api_call_poinheader'



    

const asndetail = (props) => {

    const { values, setValues,resetFormControls } = props;

    let valuechk = null
    if(values){
      valuechk = values.refeshsave;
    }


  
 
  
    const headerasnza = [ 
        { Headers : 'id',
        accessor : 'id', 
        },
    { Headers : 'datA_LINE_TYPE',
    accessor : 'datA_LINE_TYPE', 
    },
    { Headers : 'filE_CODE',
    accessor : 'filE_CODE', 
    },
    { Headers : 'totaL_RECORDS',
    
    accessor : 'totaL_RECORDS', 
    },
    {
    Headers: "Actions",
    accessor: "Actions",
    Cell: ({row}) => (
    
    
    <div className="">
    <button onClick={()=>deleteQnA(row.original.filE_CODE)}
        className="mr-3  p-0 w-10 h-10 bg-blue-500 rounded-full hover:bg-blue-800 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
    <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="w-6 h-6 inline-block">
    <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                            C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                            C15.952,9,16,9.447,16,10z" />
    </svg>
    </button>
    
    </div>
    
     
     )
    }
    
        ]
            

    function deleteQnA(datA_LINE_TYPE){

     if(datA_LINE_TYPE == null){
        datA_LINE_TYPE ='';
     }
        setValues({
            customerid:datA_LINE_TYPE
        })
        } 


    const [itemss,setitem] = useState([]);

    useEffect(() => {

        
        const fetchData = async () => {
            const result = await EDI_PO_IN_HEADER()
     
         await setitem(result);

        };
     
        fetchData();
        
      } ,[setitem]
      
      );

      useEffect(() => {

        const fetchData = async () => {
            const result = await EDI_PO_IN_HEADER()
     
         await setitem(result);

        };
     
        fetchData();
        
      } ,[setitem,valuechk]
      
      );
     
    

    const columns = useMemo(()=> 
    headerasnza
    
    ,[])
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

    

    return (
        <div>
       
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
<br></br>
   

  
        </div>
    )
}

export default asndetail
