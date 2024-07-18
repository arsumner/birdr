import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components/Pages
import Home from './pages/Home';
import Library from './pages/Library'
import Navbar from './components/Navbar';
import UpdateBirdForm from './components/updateBirdForm';
import Signup from './pages/Signup'
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className= "pages">
          <Routes>
            <Route 
              path = "/"
              element = {<Home />}
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
              element = {<Login />}
            />
            <Route 
              path = "/signup"
              element = {<Signup />}
            />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
