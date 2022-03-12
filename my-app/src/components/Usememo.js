import {useMemo,useState} from 'react'
const Usememo=()=>{
    const[count,setCount]=useState(0)
    const[text,setText]=useState('')
    const increase=useMemo(()=>{
        return `btn has cliched:${count}`
    },[count])
    return(
        <div style={{background:'pink',
         marginTop:'50px',
         color:'black'
         }}>
        <input 
        value={text}
        onChange={(e)=>setText(e.target.value)}
        ></input>
        <button onClick={()=>setCount(count+1)}>+</button>
        <p>{increase}</p>
        {count>0 ?<p>text of input is:{text}</p> :''}
        
        </div>
    )
}
export default Usememo