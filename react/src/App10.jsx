import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ul>
		    <li>text1</li>
		    <li>text2</li>
		    <li>text3</li>
	    </ul>
	    <ul>
	    	<li>text1</li>
	    	<li>text2</li>
	    	<li>text3</li>
	    </ul>
    </>
  )
}

export default App