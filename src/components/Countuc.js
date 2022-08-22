import React from 'react'

function Countuc({text, count}) {
    console.log(`count rendering ${count}`);
  return (
    <div>
        {text} = {count}
    </div>
  )
}

export default React.memo(Countuc)