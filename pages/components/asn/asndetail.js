import React, {Component,useRef,useEffect} from 'react'
import Fixtable from './fixtable'
import {useForm} from '../../../hook/useform'
import Listdata from './listdata_asn'
import Layout from "../../bar/layout";
import { useRouter } from 'next/router'
  
    import jscookie from 'js-cookie';


    
    
    
  
    const getFreshModelObject = () => ({

        customerid:'',
        refeshsave:false,

    })

    // }
    const parentza = () => {
        const Router = useRouter();
       const onConfirm = (e) => {
    
            console.log(e.target.value)
        }
 
    const {
        values,
        setValues,
        handleInputChange,
        resetFormControls
    } = useForm(getFreshModelObject);
    
                                                                                                                                                             
        return (                            
        <div>
            <Layout>

             <Listdata  {...{
            values,
            setValues,
            resetFormControls
        }}
        ></Listdata>
            <Fixtable 
            
            {...{
                values,
                setValues,
                resetFormControls
            }}
            
            ></Fixtable>
             </Layout>
        </div>
    )

    }
    
export default parentza
