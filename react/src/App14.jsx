import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const name = 'user';
	const age  = '30';

  return (
    <>
      <div>
		    name: {name}
		    age: {age}
	    </div>
    </>
  )
}

export default App