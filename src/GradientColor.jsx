import { useEffect, useState } from "react";

export default function Gradient(){
    const [color,setColor]=useState('#ffff00');
    const [rgb,setRgb]=useState('#ffff00');

     const hexToRgb = (rgb) => {
        rgb = rgb.replace("#", "");
        const r = parseInt(rgb.substring(0, 2), 16);
        const g = parseInt(rgb.substring(2, 4), 16);
        const b = parseInt(rgb.substring(4, 6), 16);
        return setRgb(`rgb(${r},${g},${b})`);
    }
    useEffect(()=>{
        hexToRgb(color);
    },[color])

    return(
        <div style={{textAlign:"center", width:300, height:250, border:'1px solid #000000'}}>
            <h3>Color Gradient Color Pickup Tool </h3>
            <input type="color" onChange={(e)=>setColor(e.target.value)} />
            <h3 style={{color:color}}>Selected Color:<strong>{color}</strong></h3>
            {/* <button onClick={()=>hexToRgb(color)}>Convert into RGB</button>
            <h3>Selected color (in decimal format):<strong>{rgb}</strong> </h3>
           */}
           <h3>Selected color(in RGB format):{rgb}</h3>
           
        </div>
    )

}