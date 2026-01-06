import React, { useState } from 'react'

function useLocalStorage(key,initialValues) {
    const [data,setData]=useState(() => {
        const storedValue=localStorage.getItem(key);
        if(storedValue){
            return JSON.parse(storedValue)
        } else {
localStorage.setItem(key,JSON.stringify(initialValues));
return initialValues
        }
    })

    function update(value){
setData(value)
localStorage.setItem(key,JSON.stringify(value))
    }
  return [data,update]
  
}

export default useLocalStorage

