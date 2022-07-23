
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Navbar } from './Components/Navbar';
import Login from './Pages/LoginSystem/Login';
import { About } from './Pages/About/About';
import { Dashboard } from './Pages/Dashboard/Dashboard';
import { Contact } from './Pages/Contact/Contact';
import { Faq } from './Pages/FAQ/Faq';


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="about" element={ <About />  } />
        <Route path="adminPanel" element={ <Dashboard /> } />
        <Route path="contact" element={ <Contact />} />
        <Route path="faq" element={ <Faq /> } />
        

      </Routes>


    </div>
  );
}

export default App;
