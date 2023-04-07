
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Form from './Form';
import Home from './Home';
import AddUser from './AddUser';
import { Route, Routes } from 'react-router-dom';
import ViewUser from './ViewUser';
import EditUser from './EditUser';
function App() {
  return (
    <>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/AddUser' element={<AddUser/>}></Route>
    <Route path='/ViewUser/:studentId' element={<ViewUser/>}></Route>
    <Route path='/EditUser/:studentId' element={<EditUser/>}></Route>

    
  </Routes>
      
    
    </>
  )
}

export default App;
