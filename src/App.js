
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './Pages/LoginSystem/Login';
import { About } from './Pages/About/About';
import { Contact } from './Pages/Contact/Contact';
import { Faq } from './Pages/FAQ/Faq';
import { Landing } from './Pages/Dashboard/Landing/Landing';
import { Member } from './Pages/Dashboard/Components/Member/Member';
import { Books } from './Pages/Dashboard/Components/Books/Books';
import { Error } from './Pages/Dashboard/Components/ErrorPage/Error';




function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/dashboard" element={ <Landing /> } >
            
            <Route path='members' element={<Member />} />
            <Route path='books' element={<Books />} />
        </Route>
        <Route path="/*" element={<Error />} />
      </Routes>


    </div>
  );
}

export default App;
