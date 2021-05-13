import React, {Component,useRef,useState} from 'react'
import Formpoin from './formexcel'
import {useForm} from '../../../hook/useform'
import Listdata from './listdata_poin'
import Layout from "../../bar/layout";
import DatePicker,{registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import th from 'date-fns/locale/th';
import moment from 'moment'

setDefaultLocale(th);
    // function updateState(text){
    //     this.setState(text);
        
    const getFreshModelObject = () => ({

        customerid:'',
        refeshsave:false,
    })

    // }
    const poindetial = () => {

        

 
    const {
        values,
        setValues,
        handleInputChange,
        resetFormControls
    } = useForm(getFreshModelObject);

    const [startDate, setStartDate] = useState(new Date());   
    // const poindetialza = (gg) => {
    //     const convertTime = moment(new Date(gg)).format("DD-MM-YYYY");
    //     console.log(startDate)
    //     console.log(convertTime)
    // }
    
        return (                            
        <div>
           
             
            <Layout>

                  <Listdata  {...{
            values,
            setValues,
            resetFormControls
        }
    }
        ></Listdata>
            <Formpoin 
            
            {...{
                values,
                setValues,
                resetFormControls
            }}
            
            ></Formpoin>
             </Layout>
        </div>
    )

    }
    
export default poindetial
