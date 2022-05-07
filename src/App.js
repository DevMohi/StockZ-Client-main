import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItems from './Pages/AddItems/AddItems';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import Header from './Pages/Shared/Header/Header';
import UpdateDetails from './Pages/UpdateDetails/UpdateDetails';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/add' element={<AddItems></AddItems>}></Route>
        <Route path='/manage' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/inventoryDetails/:inventoryId' element={<UpdateDetails></UpdateDetails>} ></Route>

      </Routes>
    </div>
  );
}

export default App;
