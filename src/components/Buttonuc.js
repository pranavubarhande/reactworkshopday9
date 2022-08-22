import React from 'react'

function Buttonuc({handleClick, children}) {
    console.log("Button rendering");
  return (
    <div>
        <button onClick={handleClick}>{children}</button>
    </div>
  )
}

export default React.memo(Buttonuc)