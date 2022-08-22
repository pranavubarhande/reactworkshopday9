import React from 'react'

function Title() {
    console.log("title component is rendering");
  return (
    <div>
        useCallback example
    </div>
  )
}

export default React.memo(Title)