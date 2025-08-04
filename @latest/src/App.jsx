import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/Input.jsx'
import Button from './components/Button.jsx'

function App() {

  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);

  return (
    <>
      <div className="div123">
        <Input onChange={setVal1}></Input>
        <Input onChange={setVal2}></Input>
        <Button val1={val1} val2={val2}></Button>
      </div>
    </>
  )
}

export default App
