
import reactLogo from '@/assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import Main from '@/pages/Main.jsx'
import NotFound from '@/pages/NotFound.jsx'
import GameRoom from '@/pages/GameRoom.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/game' element={<GameRoom />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
