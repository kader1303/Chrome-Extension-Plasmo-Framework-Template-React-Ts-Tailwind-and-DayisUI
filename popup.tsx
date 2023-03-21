import { useReducer } from "react"
 
import "./style.css"
 
function IndexPopup() {
  const [count, increase] = useReducer((c) => c + 1, 0)
 
  return (
    <button type="button" className="btn">Hello daisyUI</button>
  )
}
 
export default IndexPopup