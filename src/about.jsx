import { useState } from "react";
function About(){
    const [count,setCount]=useState(0);
    const inc=()=>{
        setCount((prev)=>prev+1)
        
    }
    return(
        <div>
            <h1>About Page</h1>
            <button onClick={inc}>
                increament
            </button>
            {count}
        </div>
    )
}
  
export default About;