import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponentA from './Components/ComponentA/ComponentA'
import ComponentB from './Components/ComponentB/ComponentB'
import ComponentC from './Components/ComponentC/ComponentC'

function App() {
  const text="mohan"

  return (
    <>
      <p>App Component</p>
      <ComponentA />
      <ComponentB />
      <ComponentC t={text}/>

    </>
  )
}

export default App
