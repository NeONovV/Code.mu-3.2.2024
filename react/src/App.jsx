import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const strOne = 'Hello!';
  const strTwo = 'You are on';
  const strThree = 'Exercises of Code.me';

  return (
    <>
      <div className='div_one'>
        <p className='p_one'>{strOne}</p>
        <p className='p_two'>{strTwo}</p>
        <p className='p_three'>{strThree}</p>
      </div>
      <ul>
        <li>Ein</li>
        <li>Zwei</li>
        <li>Drei</li>
        <li>Vier</li>
        <li>Funf</li>
        <li>Sechs</li>
        <li>Sieben</li>
        <li>Acht</li>
        <li>Neun</li>
        <li>Zehn</li>
      </ul>
      <tr>
        <td>RHCP</td>
        <td>Rumstein</td>
        <td>Samurai</td>
      </tr>
      <tr>
        <td>Кино</td>
        <td>Крематорий</td>
        <td>Король и шут</td>
      </tr>
      <tr>
        <td>Pushnoi</td>
        <td>Lumen</td>
        <td>Hatters</td>
      </tr>
    </>
  )
}

export default App