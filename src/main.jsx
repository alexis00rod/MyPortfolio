import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { App } from './components/index'
import { AboutMe, MyProjects } from './pages/index'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={AboutMe}/>
        <Route path='/about-me' element={MyProjects} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
