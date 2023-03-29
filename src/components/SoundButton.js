import {React} from "react";
import useKeyboard from "./useKeyboard";

function SoundButton(props) {
  const start = () => {
    new Audio(props.audio).play()
  }
  const key = props.triggerKey
  useKeyboard(key, start)
  return <button className="btn btn-sound text-center" tabIndex="-1" onClick={start}>{props.string}</button>
  
}
export default SoundButton;