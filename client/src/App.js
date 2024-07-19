import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';

// Components/Pages
import Home from './pages/Home';
import Library from './pages/Library'
import Navbar from './components/Navbar';
import UpdateBirdForm from './components/updateBirdForm';
import Signup from './pages/Signup'
import Login from './pages/Login'

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className= "pages">
          <Routes>
            <Route 
              path = "/"
              element = {user ? <Home /> : <Navigate to= "/login"/>}
            />
            <Route 
              path = "/library"
              element = {<Library />}
            />
            <Route 
              path="/update/:id" 
              element={<UpdateBirdForm />} 
            />
            <Route 
              path = "/login"
              element = {!user ? <Login /> : <Navigate to='/' />}
            />
            <Route 
              path = "/signup"
              element = {!user ?<Signup /> : <Navigate to='/' />}
            />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
