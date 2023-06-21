import React from "react";
import "../css/IconSwitch.css"

function IconSwitch({ icon, onSwitch }) { 
  return (
    <header className='switch' >
      <button className='material-icons' onClick={onSwitch}>{icon}</button>
    </header>
  )
}

export default IconSwitch;