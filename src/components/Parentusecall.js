import React from 'react'
import {useState, useCallback} from 'react'
import Buttonuc from './Buttonuc'
import Countuc from './Countuc'
import Title from './Title'

function Parentusecall() {
    const [age, setAge] = useState(15)
    const [salary, setSalary] = useState(1000)

    // const incrementAge = () => {
    //     setAge(age + 1)
    // }
    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])
    // 
    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])
  return (
    <div>
        <Title />
        <Countuc text = "age" count = {age} />
        <Buttonuc handleClick={incrementAge}>Increment Age</Buttonuc>
        <Countuc text = "salary" count = {salary} />
        <Buttonuc handleClick={incrementSalary}>Increment Salary</Buttonuc>
    </div>
  )
}

export default Parentusecall