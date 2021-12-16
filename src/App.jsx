import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import InitSession from './layout/InitSession'
import Layout from './layout/Layout'
import Init from './pages/Init'
import LoginForm from './pages/LoginForm'
import ClientNew from './pages/ClientNew'
import ClientEdit from './pages/ClientEdit'


function App() {


  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<InitSession />}>
          <Route index element={<LoginForm />}/>
        </Route>

        <Route path="/clients" element={<Layout />}>
          <Route index element={<Init />}/>
          <Route path="new" element={<ClientNew />}/>
          <Route path="edit/:id" element={<ClientEdit />}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
