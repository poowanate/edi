import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import { Formik, ErrorMessage } from 'formik';
//import ExampleControlSlot from '../ExampleControlSlot';
import * as Yup from 'yup';
import Cookies from 'universal-cookie';
 import {login,Authenticate} from './api/login'
 import axios from 'axios';
 import Swal from 'sweetalert2'
 import {setCookie} from './api/auth'
import { useRouter } from 'next/router'
// const cookies = new Cookies();
 

// const DataLoad = async (value) => {
//   const PatientItem = await login(value)
//   let gdsf = JSON.stringify(PatientItem)
//   const {name } = PatientItem;
//   await console.log(name)
//   await console.log(PatientItem.useR_NAME)

// return  PatientItem
// }



function Redirect({to}){
  const router = useRouter();

  useEffect(()=>{
    router.push(to)
  },[to])

  return null;
}

function sweeterror(){
  Swal.fire({
    icon: 'error',
    title: 'Login ไม่สำเร็จ',
    text: 'USERNAME หรือ PASSWORD ผิดผลาดกรุณาลองอีกครั้ง',
   
  })
}


 function  Login() {
  const Router = useRouter();
  // const [checklogin,setchecklogin] = useState(false);
  // if(checklogin){
  //   return <Redirect to="/"/>;
  // }

 

  return (
    
    <div className="">
      <Formik
        initialValues={{ L_Username: '', L_Password: '' }}
        validationSchema={Yup.object().shape({
          L_Username: Yup.string()
            .required('*กรุณากรอกชื่อผู้ใช้'),
          L_Password: Yup.string()
            .required('*กรุณากรอกพาสเวิร์ด'),
        })}
        onSubmit={(L_values, { setSubmitting }) => {
          const formz = {
            USER_NAME : L_values.L_Username,
            PASSWORD : L_values.L_Password
          }

          login(formz).then(data => {

              if(data.name!=null){
                Authenticate(data, () => {
                  if(data.name =='ธนกร นาคสาร'){
                    setCookie('name',data.name)
                    setCookie('role',data.useR_ROLE+'asn')
                  }
                  else{
                    setCookie('name',data.name)
                    setCookie('role',data.useR_ROLE)
                  }
                   Router.push('/')

       
              })
              console.log()
              }
              else{
                sweeterror()
              }
         
              
            
        })

       
       
         
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>

            <div className="w-screen h-screen flex fixed  justify-center items-center bg-gray-100 ">
              <div className=" w-4/5 h-4/5 font-extrabold  bg-white  flex flex-row shadow-lg ">
                <div className="md:block hidden flex-1">
                  <div className="h-full bg-gradient-to-r  from-black to-blue-500 flex flex-1 flex-col justify-center items-center ">

                    <h1 className="text-7xl mb-8 items-center text-white">Electronic Data </h1>
                    <h1 className="text-7xl items-center text-white">Interchange </h1>
                    
                  </div>
                </div>
                <div className="h-full flex flex-1 flex-col justify-center items-center login_form border-2 border-blue-500 p-10 pt-5 shadow-sm mx-auto rounded">
                  <div className="sec flex-1 w-full ">
                    <div className="flex flex-1 justify-center items-center">
                      <img src="./images/logo.png" alt="Vercel Logo" className="logo w-80 pb-8" />
                    </div>
                    <span className="flex shadow-md mb-0 w-full text-xs">
                      <span className="bg-gradient-to-r from-black to-blue-500 w-28 font-bold text-center text-gray-200 p-5 px-7 rounded-l">Username</span>
                      <input className="field text-sm text-gray-600   px-2 rounded-r w-full" name="L_Username" onChange={handleChange} onBlur={handleBlur} value={values.L_Username} type="text" placeholder="Username" />
                    </span>
                    <div className="h-4">
                      {errors.L_Username &&
                        touched.L_Username &&
                        <div className="input-feedback text-red-500 ml-5">
                          {errors.L_Username}
                        </div>}
                    </div>
                    <span className="flex shadow-md mb-0 text-xs pt-5">
                      <span className="bg-gradient-to-r from-black to-blue-500 w-28 font-bold text-center text-gray-200  p-5 px-7 rounded-l">Password</span>
                      <input className="field  text-sm text-gray-600  px-2 rounded-r w-full" name="L_Password" onChange={handleChange} onBlur={handleBlur} value={values.P_Name} type="Password" placeholder="Password" />
                    </span>
                    <div className="h-4">
                      {errors.L_Password &&
                        touched.L_Password &&
                        <div className="input-feedback text-red-500 ml-5">
                          {errors.L_Password}
                        </div>}
                    </div>
                    <div className='mx-auto'>
                    <a className="text-indigo-500 hover:underline font-bold text-xs ml-auto cursor-pointer">Forget Password ?</a>
                    {/* onClick= {() => setchecklogin(true)} */}
            <button   className="border-2 border-blue-500 hover:bg-blue-500 hover:text-gray-100 mt-3 w-full text-indigo-500 block text-center p-3 px-4 text-sm rounded cursor-pointer font-bold" type='submit'>Login</button>
                    </div>
               
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
  
   

    </div>

  )
}

export default Login
