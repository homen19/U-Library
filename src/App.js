
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './Pages/LoginSystem/Login';
import { About } from './Pages/About/About';
import { Contact } from './Pages/Contact/Contact';
import { Faq } from './Pages/FAQ/Faq';
import { Landing } from './Pages/Dashboard/Landing/Landing';




function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/dashboard" element={ <Landing /> } >

        </Route>





      </Routes>


    </div>
  );
}

export default App;
