import { Component } from 'react'
import { Provider } from './components/ui/provider'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import './assets/custom.css'

function App() {
  return (
    <Provider>
     <Routes>
        <Route path="/" element={<Login/>} />
      </Routes>
    </Provider>
  )
}

export default App
