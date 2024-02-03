import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const num1 = 3;
	const num2 = 2;

  const name = 'john';
	const surname = 'smit';

  const num = 4;

  return (
    <>
      <div>
		    result: {num1 ** num2}
        {/* Возведение в  степень */}
	    </div>

      <div>
		    result: {name + ' ' + surname}
        {/* Создаёт строчку */}
	    </div>

      <div>
		    result: {Math.sqrt(num)}
        {/* Считает квадратный корень */}
	    </div>
    </>
  )
}

export default App