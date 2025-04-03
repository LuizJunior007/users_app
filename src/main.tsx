import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './pages/User';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path='/' Component={ Home } />
        <Route path='/usuario/:id' Component={ User } />
      </Routes>
    </Layout>
    </BrowserRouter>
  </StrictMode>
)
