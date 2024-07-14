import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components/Pages
import Home from './pages/Home';
import Library from './pages/Library'
import Navbar from './components/Navbar';
import UpdateBirdForm from './components/updateBirdForm';

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
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
