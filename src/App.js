
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './Pages/LoginSystem/Login';
import { About } from './Pages/About/About';
import { Contact } from './Pages/Contact/Contact';
import { Faq } from './Pages/FAQ/Faq';
import { Landing } from './Pages/Dashboard/Landing/Landing';
import { Member } from './Pages/Dashboard/Components/Member/Member';
import { Error } from './Pages/Dashboard/Components/ErrorPage/Error';
import { Table } from './Pages/Dashboard/Components/Member/Components/Table';
import { Register } from './Pages/Dashboard/Components/Member/Components/Registration/Register';
import { Update } from './Pages/Dashboard/Components/Member/Components/Update/Update';
import { Record } from './Pages/Dashboard/Components/Member/Components/Record/Record';
import { Books } from './Pages/Dashboard/Components/Books/Components/Books';
import { Details } from './Pages/Dashboard/Components/Books/Components/Details';
import { AddBook } from './Pages/Dashboard/Components/Books/Components/AddBook';
import { UpdateBook } from './Pages/Dashboard/Components/Books/Components/UpdateBook';
import { BookRecords } from './Pages/Dashboard/Components/Books/Components/BookRecords';
import { Profile } from './Pages/Dashboard/Components/Member/Components/Profile/Profile';





function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/dashboard" element={<Landing />} >

          <Route path='members' element={<Member />}>
            <Route path='details' element={<Table />} />
            <Route path='profile' element={<Profile />} />
            <Route path='try' element={<Profile />} />


            <Route path='register-member' element={<Register />} />
            <Route path='member-update' element={<Update />} />
            <Route path='member-record' element={<Record />} />
          </Route>
          <Route path='books' element={<Books />}>
            <Route path='details' element={<Details />} />
            <Route path='add' element={<AddBook />} />
            <Route path='book-update' element={<UpdateBook />} />
            <Route path='book-records' element={<BookRecords />} />

          </Route>
        </Route>
        <Route path="/*" element={<Error />} />
      </Routes>


    </div>
  );
}

export default App;
