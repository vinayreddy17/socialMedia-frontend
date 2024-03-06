import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes component
import Navbar from './components/Navbar.js'
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Toaster} from 'react-hot-toast';
import axios from 'axios';
import { UserContextProvider } from './context/userContext.js';
import Dashboard  from './pages/Dashboard.js';


axios.defaults.baseURL= 'http://localhost:5000';
axios.defaults.withCredentials=true;



function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Navbar />
{/* <Toaster  position='bottom-right' toastOptions={{duration:2000}}>     </Toaster> */}

      <Router> 
    
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/register" element={<Register />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/dashboard" element={<Dashboard />} /> 
         
        </Routes>
      </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
