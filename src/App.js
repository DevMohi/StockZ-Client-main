import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './Pages/AboutPage/AboutPage';
import AddItems from './Pages/AddItems/AddItems';
import AddReview from './Pages/AddReview/AddReview';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import MyItems from './Pages/MyItems/MyItems';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
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
        <Route path='/about' element={<AboutPage></AboutPage>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/add' element={<PrivateRoute><AddItems></AddItems></PrivateRoute>}></Route>
        <Route path='/manage' element={<PrivateRoute><ManageInventory></ManageInventory></PrivateRoute>}></Route>
        <Route path='/myitems' element={<PrivateRoute><MyItems></MyItems></PrivateRoute>}></Route>
        <Route path='/addreview' element={<PrivateRoute><AddReview></AddReview></PrivateRoute>}></Route>
        <Route path='/inventoryDetails/:inventoryId' element={<PrivateRoute><UpdateDetails></UpdateDetails></PrivateRoute>} ></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
