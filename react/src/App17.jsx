import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const attr = 'block';

  return (
    <>
      <div id={attr}>
		    text
	    </div>;
    </>
  )
}

export default App