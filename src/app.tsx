import { Logo } from './logo'

import { useState } from 'preact/hooks'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
   <h1>Count : {count}</h1>
   <button className='button' onClick={function(){
    setCount(count+1) 
   }
   }>+</button>
   <button className="button" onClick={function(){
    setCount(count-1) 
   }}
   >-</button>
   <button className="button" onClick={function(){
    setCount(count+10) 
   }}
   >+10</button>
   <button className="button"  onClick={function(){
    setCount(0) 
   }} >RESET</button>

   </div>
  )
  }



