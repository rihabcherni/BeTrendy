import React from 'react'
import { Routes , Route, Navigate } from 'react-router-dom'
import AdminInterface from './AdminInterface';
import VisitorInterface from '../visitor/VisitorInterface';
import Page404 from '../../ErrorPages/Page404/Page404';
import DashboardAdmin from './pages/DashboardAdmin/DashboardAdmin';
import Customers from './pages/Ecommerce/Customers';
import UpdatePassword from '../../Auth/UpdatePassord/UpdatePassword';
import Profile from '../../Auth//Profile/Profile'
import Notifications from './pages/Others/Notifications';
import Admins from './pages/Others/Admins';
import Faq from '../visitor/pages/Faq/Faq';
import Contact from '../visitor/pages/Contact/Contact';
import AboutUs from '../visitor/pages/About/AboutUs';
import Product from '../visitor/pages/Products/Product';
import Blog from '../visitor/pages/Blog/Blog';
import ChatBot from '../visitor/pages/Chatbot/ChatBot';
import Home from '../visitor/pages/Home/Home';
import BlogSinglePage from '../visitor/pages/Blog/BlogSinglePage';
function LinkAdmin() {
  return (
    <Routes>
      <Route path='/' element={<VisitorInterface/>}/>
      <Route path='/login' element={<Navigate to="/admin"/>}/>
      <Route path='/sign-up' element={<Navigate to="/admin"/>}/>
      <Route path='/' element={<VisitorInterface/>}>	
        <Route index element={ <Home/>}/>
        <Route path='/faq' element={<Faq/>}></Route>
        <Route path='/contact-us' element={<Contact/>}></Route>
        <Route path='/about-us' element={<AboutUs/>}></Route>
        <Route path='/products' element={<Product/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/blog/:slug' element={<BlogSinglePage/>}></Route>
        <Route path='/ChatBot' element={<ChatBot/>}></Route>
      </Route>
      <Route path='/admin' element={<AdminInterface/>}>	
        <Route index element={<DashboardAdmin/>}/>
        <Route path="customers" element={ <Customers/>}/>
        <Route path="admins" element={ <Admins/>}/>
        <Route path="notification" element={ <Notifications/>}/>
        <Route path='update-password' element={<UpdatePassword/>}></Route>
        <Route path='profile' element={<Profile/>}></Route> 
      </Route>
      <Route path='*' element={<Page404/>}/>
    </Routes>
  )
}
export default LinkAdmin;
