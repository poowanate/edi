import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from './bar/layout'
import jscookie from 'js-cookie';

export default function Home() {

  let sad = jscookie.get('name')
console.log(sad)
const sadasd =()=>{
  let sadz = jscookie.get('name')
  console.log(sad,sadz)
}
  return (
    <div  >
     <Layout>
       {/* <button onClick={sadasd}>sss</button>
555 */}
     </Layout>

   

     
    </div>
  )
}
