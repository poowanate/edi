import React,{useState,useEffect} from 'react'

const testb = () => {

   
    const [myArray, updateMyArray] = useState([]);

    const onClick = () => {
        updateMyArray( arr => [...arr, `${arr.length}`]);
    };


    return (
        <div>
 <input type="button" onClick={ onClick } value="Update" />,

<div>{myArray.map( e =>
  <div>{ e }</div>
)}
</div>
        </div>
    )
}

export default testb
