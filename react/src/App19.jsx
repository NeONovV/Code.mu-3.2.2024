import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const li1 = <li>text1</li>;
	const li2 = <li>text2</li>;
	const li3 = <li>text3</li>;

  return (
    <>
      <ul>
	      {li1}
	      {li2}
	      {li3}
      </ul>
    </>
  )
}

export default App