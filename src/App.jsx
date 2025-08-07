import ColorMix from "./ColorMixer"
import Gradient from "./GradientColor"
import NumToHexConv from "./NumToHexConv"

function App() {

  return(
    <>
    <div style={{display:"flex"}}>
    <ColorMix/>
    <NumToHexConv/>
    <Gradient/>
    </div>
    </>
  )
 
}

export default App
