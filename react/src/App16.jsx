import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const obj = {name: 'john', surname: 'smit'};

  return (
    <>
      <p>
	      name: <span> {obj.name} </span>, <br />
	      surname: <span> {obj.surname} </span>,
      </p>
    </>
  )
}

export default App