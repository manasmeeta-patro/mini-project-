import { useState } from "react";

export default function NumToHexConv() {
  const [num, setNum] = useState('');
  const [hex, setHex] = useState('');
  
  const toHex = (num) =>{
    const val=parseInt(num);
     if(val<0 || val>255 || isNaN(val))
     {
      return setHex("invalid number");
     }
     else{
      return  setHex(val.toString(16).padStart(2, "0").toUpperCase());
     }
  } 
  return(
    <>
     <div style={{ padding: "1rem", fontFamily: "Arial", maxWidth: "400px" }}>
      <h1>Number To HEX Code</h1>
      <input type="text" placeholder="Enter the Decimal Number" onChange={(event)=>setNum(event.target.value)} />
      <button onClick={()=>toHex(num)}>Convert</button>
      <div style={{ marginTop: "1rem", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "5px" }}>
       <p><strong>Decimal:</strong> {num}</p>
      <p><strong>Hexadecimal:</strong> {hex ? `0x${hex}` : 'N/A'}</p>
      </div>
      </div>

       <div style={{ padding: "1rem", fontFamily: "Arial", maxWidth: "400px" }}>
      <h1>RGB To HEX Code</h1>
      <input type="text" placeholder="Enter the RGB code" onChange={(event)=>setNum(event.target.value)} />
      <button onClick={()=>toHex(num)}>Convert</button>
      <div style={{ marginTop: "1rem", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "5px" }}>
       <p><strong>Decimal:</strong> {num}</p>
      <p><strong>Hexadecimal:</strong> {hex ? `0x${hex}` : 'N/A'}</p>
      </div>
      </div>
    </>
  )

}