import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Mrle from './pages/Mrle'
import Extract from './pages/Extract'
import Layout from './components/Layout'
import NotFound from './pages/NotFound'
import Help from './pages/Help'
import Mhuff from './pages/Mhuff'
import Mari from './pages/Mari'
import Mlzw from './pages/Mlzw'
import Mjb from './pages/Mjb'
import Mdef from './pages/Mdef'
import Embed from './pages/Embed'

function App() {

  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/embed" element={<Embed />} />
        <Route path="/embed/rle" element={<Mrle />} />
        <Route path="/embed/huffman" element={<Mhuff />} />
        <Route path="/embed/arithmetic" element={<Mari />} />
        <Route path="/embed/lzw" element={<Mlzw />} />
        <Route path="/embed/j-bit" element={<Mjb />} />
        <Route path="/embed/deflate" element={<Mdef />} />
        <Route path="/extract" element={<Extract />} />
        <Route path="/help" element={<Help />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
    </BrowserRouter>
  )
}

export default App
