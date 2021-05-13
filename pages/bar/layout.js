import * as react from 'react'
import  {useEffect,useState} from 'react'
import Link from 'next/link'
import { removeCookie } from '../api/auth'
import jscookie from 'js-cookie';
import { useRouter } from 'next/router'
const Layout =(props) => {

  const [nameuser,setnameuser] =  useState('??????????');
  const [role,setrole] =  useState(0);
  const Router = useRouter();
  const fetchData = async () => {
    setnameuser(jscookie.get('name'))
console.log(jscookie.get('role'))
    if(jscookie.get('role') =='ADMIN'){
      console.log('ggpw')
      setrole(3)
    }
    else if(jscookie.get('role')=='OTHER'){
      setrole(2)
    }
    else if(jscookie.get('role')=='OTHERasn'){
      setrole(1)
    }
   
    if(jscookie.get('name')==null){
     Router.push('/login')
    }

};

useEffect(() => {

  

  fetchData();
  
} ,[]

);

  const logout =()=>{
    removeCookie('name')
    Router.push('/login')
  }
  const [isClosed,setclosed] =  react.useState(true);

  return (
 
  <>


  <nav className="flex items-center justify-between flex-wrap bgbluebytop">
  <div className="flex items-center flex-no-shrink text-black mr-6">
  {isClosed ? (
   
    <button  className='px-3 py-2 flex justify-center items-center bg-gradient-to-tl from-blue-500 to-cyan-400 rounded text-white focus:outline-none font-semibold shadow hover:transition-colors hover:bg-gradient-to-tr transform transition hover:scale-110 ease-out duration-300 hover:shadow-md' tabIndex='1'  aria-label='Open Menu' title='Open Menu' onClick={()=> setclosed(false)}>
       <div className="mr-2">
       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7"></path></svg>
       </div>
       Show Menu
    </button>
    
  ):(

    <button  className='px-3 py-2 flex justify-center items-center bg-gradient-to-tl from-blue-500 to-cyan-400 rounded text-white focus:outline-none font-semibold shadow hover:transition-colors hover:bg-gradient-to-tr transform transition hover:scale-110 ease-out duration-300 hover:shadow-md' tabIndex='1'  aria-label='Open Menu' title='Open Menu' onClick={()=> setclosed(true)}>
    <div className="mr-2">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M5 11l7-7 7 7M5 19l7-7 7 7"></path></svg>
    </div>
    Close Menu
 </button>
  )}

   
  </div>

  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="lg:flex-grow">
      <div>{nameuser}</div>
      {/* <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
        Docs
      </a>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
        Examples
      </a>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white">
        Blog
      </a> */}
    </div>
    <div className='mr-4 text-white'>
      สวัสดีคุณ {nameuser}
    </div>
    <div>
    <button onClick={logout}  className="bg-gray-500 text-white hover:bg-gray-700 inline-block text-sm px-4 py-2 leading-none border rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">Logout</button>
      
      {/* <a  onClick={logout} className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-white  hover:bg-white  mt-4 lg:mt-0">Logout</a>
  */}
    </div>
  </div>
</nav>
<div className ="flex bg-gray-100">
  {(!isClosed) && ( 
  <aside className='bg-white w-64 min-h-screen flex flex-col'>
    {/* <div className='bg-white border-r border-b px-4 h-10 flex item-center'> 
    <span className='text-blue py-2'>
      Application
    </span>
    </div> */}
    <div className="bg-white flex-grow shadow-lg w-64 my-2 list-reset">
    {(role == 3) && (
      <ul className="">
    <li >
    <div className=" absolute content-end float-right  text-4xl bg-red-500 ">1</div>
    <Link href="/components/asn/asndetail">
         
       
      <a  className="ml-4 block p-4 text-grey-darker font-bold border-purple hover:bg-grey-lighter border-r-4"><div className='mr-2'><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg></div>
      ข้อมูลผู้ขาย
 
      </a>
      </Link>
    </li>
    <li > 
    <div className="mr-2 absolute content-end float-right  text-4xl bg-red-500 ">2</div>
    <Link href="/components/po_in/poindetail">
    
      <a  className="ml-4 block p-4 text-grey-darker font-bold border-grey-lighter hover:border-purple-light hover:bg-grey-lighter border-r-4"><div className='mr-2'><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg></div>รายการสั่งซื้อสินค้า</a>
      </Link>
    </li>
    <li > 
    <div className="mr-2 absolute content-end float-right  text-4xl bg-red-500 ">3</div>
    <Link href="/components/testable">
    
      <a  className="ml-4 block p-4 text-grey-darker font-bold border-grey-lighter hover:border-purple-light hover:bg-grey-lighter border-r-4"><div className='mr-2'><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg></div>ข้อมูล PO</a>
      </Link>
    </li>
   
  </ul>

    )}

{(role == 2) && (
      <ul className="">
    <li >
    <div className=" absolute content-end float-right  text-4xl bg-red-500 ">1</div>
    <Link href="/components/po_in/poindetail">
    
    <a  className="ml-4 block p-4 text-grey-darker font-bold border-grey-lighter hover:border-purple-light hover:bg-grey-lighter border-r-4"><div className='mr-2'><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg></div>รายการสั่งซื้อสินค้า</a>
    </Link>
    </li>
  
  </ul>

    )}
 
 {(role == 1) && (
      <ul className="">
    <li >
    <div className=" absolute content-end float-right  text-4xl bg-red-500 ">1</div>
    <Link href="/components/asn/asndetail">
         
       
         <a  className="ml-4 block p-4 text-grey-darker font-bold border-purple hover:bg-grey-lighter border-r-4"><div className='mr-2'><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg></div>
         ข้อมูลผู้ขาย
    
         </a>
         </Link>
    </li>
  
  </ul>

    )}
    
</div>
   
  </aside>
 )}
  <main className=' mainbyming flex-grow flex flex-col min-h-screen '>

<div className='flex flex-grow item-center justify-between px-3 mt-2 page-content '>
  <div className='ground w-full  overflow-auto'>
  {props.children}
  </div>

  </div>
</main>

</div>
  </>
  )
}

export default Layout;
