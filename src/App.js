import Footer from './components/Footer'
import Auth from './components/Auth'
import Nav from './components/Nav'
import ProfilePage from './components/Profile'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Published from './components/PublishedPapers'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>

        

        
        <Route path="/auth" element={<Auth />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/Published" element={<Published />}/>
      </Routes>
     </BrowserRouter>
     <Footer />
    </div>
  );
}

export default App;
