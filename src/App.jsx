import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/login/Login.jsx';
import Home from './pages/home/Home';
import Layout from './components/layout/Layout.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
