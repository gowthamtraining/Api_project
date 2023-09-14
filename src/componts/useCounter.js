import React, { useState } from 'react'

const useCounter = (inintial=0) => {
    const [count,setCount] = useState(inintial)
    function IncrementCounter(){
        setCount(count+1)
    }
    function DecrementCounter(){
        setCount(count-1)
    }
  return {
    count,
    IncrementCounter,
    DecrementCounter
  }
}

export default useCounter
