import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserJoin from './pages/UserJoin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/users/join' element={<UserJoin/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
