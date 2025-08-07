import { useState } from "react";

export default function NumToHexConv() {
  const [num, setNum] = useState('');
  const [hex, setHex] = useState('');
  const [rgb, setRgb] = useState('');
  const [rgbconv, setRgbconv] = useState('');

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

  const toRGBHex = (rgb) => {
  const parts = rgb.split(',').map(n => parseInt(n.trim(), 10));

  if (
    parts.length !== 3 ||
    parts.some(n => isNaN(n) || n < 0 || n > 255)
  ) {
    return setRgbconv("Invalid input");
  }
//  .some to avoid looping to access array and  .join will join for every r and b and g  and through map we will iterate through array
  const hexColor = parts
    .map(n => n.toString(16).padStart(2, "0").toUpperCase())
    .join('');

  return setRgbconv(hexColor);
}
  return(
    <>
      <div style={{display:"flex", flexDirection:"column"}}>
        {/* in one column both converte will show up */}
     <div style={{ padding: "1rem", fontFamily: "Arial", maxWidth: "400px" }}>
      <h1>Number To HEX Code</h1>
      <input type="text" placeholder="Enter the Decimal Number" onChange={(event)=>setNum(event.target.value)} />
      <button onClick={()=>toHex(num)}>Convert</button>
      <div style={{ marginTop: "1rem", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "5px" }}>
       <p><strong>Decimal:</strong> {num}</p>
      <p><strong>Hexadecimal:</strong> {hex ? `0x${hex}` : 'N/A'}</p>
      </div>
      </div>
      <hr/>

       <div style={{ padding: "1rem", fontFamily: "Arial", maxWidth: "400px" }}>
      <h1>RGB To HEX Code</h1>
      <input type="text" placeholder="Enter the RGB code(ex: 255,0,255)" onChange={(event)=>setRgb(event.target.value)} />
      <button onClick={()=>toRGBHex(rgb)}>Convert</button>
      <div style={{ marginTop: "1rem", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "5px" }}>
       <p><strong>Decimal:</strong> {rgb}</p>
      <p><strong>Hexadecimal:</strong> {rgbconv ? `0x${rgbconv}` : 'N/A'}</p>
      </div>
      </div>
      </div>
    </>

  )

}