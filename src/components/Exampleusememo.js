import React from 'react'
import {useState, useMemo} from 'react'

function Exampleusememo() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)
    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(
        () => {
            let i = 0;
            while(i < 2000000000){
                i = i + 1;
            }
            return counterOne % 2 === 0;
        }, [counterOne])
    
  return (
    <div>
        <div>
            <button onClick={incrementOne}>Counter One is: {counterOne}</button>
            <div>
                {isEven ? "Even" : "Odd"
                }
            </div>
        </div>

        <div><button onClick={incrementTwo}>Counter Two is: {counterTwo}</button></div>
    </div>
  )
}

export default Exampleusememo