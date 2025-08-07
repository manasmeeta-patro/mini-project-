{/*import { useState } from "react";
export default function ColorMix(){
const [r,setR] = useState(255);
const [g,setG] = useState(0);
const [b,setB] = useState(0);
const toHex=(val)=>val.toString(16).padStart(2,0).toUpperCase();
//  to convert hexcode with 16 as base from normal number  
    return(
         <div>
         <h1>Color Mixer</h1>
         <div style={{backgroundColor:`rgb(${r},${g},${b})`, height: 200, width: 200}}></div>
        <div style={{ display: "flex", gap: "0.5rem", width:300, justifyContent:"space-between", flexDirection:"column"}}>
         <label htmlFor="red">Red</label>
          <input type="range" id="red" min={0} max={255} value={r} onChange={(e)=>setR(Number(e.target.value))}/>
           <span>{r} &nbsp; (#00<strong>{toHex(r)}</strong>00)</span><br/>
         

           <label htmlFor="green">Green</label>
          <input type="range" id="green" min={0} max={255} value={g} onChange={(e)=>setG(Number(e.target.value))} />
            <span> {g} &nbsp; (#00<strong>{toHex(g)}</strong>00)</span> <br/>
           <label htmlFor="blue" style={{display:"inline-block", width:"50px"}}>Blue</label>
            <span style={{ color:`rgb(${r},${g},${b})`, display:"inline-block", width:"150px"}}>{b} &nbsp; (#00<strong>{toHex(b)}</strong>00)</span><br/>
          <input type="range" id="blue" min={0} max={255} value={b} onChange={(e)=>setB(Number(e.target.value))} />
           <span style={{textAlign:"center", color:`rgb(${r},${g},${b})`}}>{b} &nbsp; (#00<strong>{toHex(b)}</strong>00)</span><br/>
            <p style={{textAlign:"center", color:`rgb(${r},${g},${b})`}}><strong>color mixing Code:#{toHex(r)}{toHex(g)}{toHex(b)}</strong> </p>
           </div>
         </div>
        
    );
   
} */}
 import { useState } from "react";

export default function ColorMix() {
  const [r, setR] = useState(255);
  const [g, setG] = useState(0);
  const [b, setB] = useState(0);

  const toHex = (val) => val.toString(16).padStart(2, "0").toUpperCase();

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial", maxWidth: "400px" }}>
      <h1>Color Mixer</h1>

      {/* Color Preview Box */}
      <div
        style={{
          backgroundColor: `rgb(${r}, ${g}, ${b})`,
          height: 200,
          width: 300,
          border: "1px solid #000",
          marginBottom: "1rem",
        }}
      ></div>

      {/* Red */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", marginBottom: "1rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <label htmlFor="red" style={{color:"red"}}>Red</label>
          <span style={{color:`rgb(${r},${g},${b})`}}>{r} (#<strong>{toHex(r)}</strong>0000)</span>
        </div>
        <input
          type="range"
          id="red"
          min={0}
          max={255}
          value={r}
          onChange={(e) => setR(Number(e.target.value))}
        />
      </div>

      {/* Green */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", marginBottom: "1rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <label htmlFor="green" style={{color:"green"}}>Green</label>
           <span style={{color:`rgb(${r},${g},${b})`}}>{g} (#00<strong>{toHex(g)}</strong>00)</span>
        </div>
        <input
          type="range"
          id="green"
          min={0}
          max={255}
          value={g}
          onChange={(e) => setG(Number(e.target.value))}
        />
      </div>

      {/* Blue */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", marginBottom: "1rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <label htmlFor="blue" style={{color:"blue"}}>Blue</label>
          <span style={{color:`rgb(${r},${g},${b})`}}>{b} (#0000<strong>{toHex(b)}</strong>)</span>
        </div>
        <input
          type="range"
          id="blue"
          min={0}
          max={255}
          value={b}
          onChange={(e) => setB(Number(e.target.value))}
        />
      </div>

      {/* Full Color Hex */}
      <p style={{textAlign:"center", color:`rgb(${r},${g},${b})`}}><strong>color mixer Code:</strong> #{toHex(r)}{toHex(g)}{toHex(b)}</p>
    </div>
  );
}
