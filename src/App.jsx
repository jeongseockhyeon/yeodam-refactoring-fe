import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserJoin from './pages/user/UserJoin'
import Login from './pages/auth/login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/users/join' element={<UserJoin/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
