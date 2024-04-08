import axios from 'axios';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import StudentListing from './Component/StudentListing';
import AddStudent from './Component/AddStudent';
import UpdateStudent from './Component/UpdateStudent';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
//import ExportToExcel from './Component/ExportToExcel';

function App() {
  return (
   <Provider store={Store}>
    <div className="App">
        <BrowserRouter>
        <div className='header'>
          <Link to={'/'}>Home</Link>
          <Link to={'/student'}>Student</Link>
        </div>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/student' element={<StudentListing></StudentListing>}></Route>
          <Route path='/student/add' element={<AddStudent></AddStudent>}></Route>
          <Route path='/student/edit/:code' element={<UpdateStudent></UpdateStudent>}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer className="toast-position"
        position="bottom-right"></ToastContainer>
    </div>
    </Provider>
  );
}

export default App;
