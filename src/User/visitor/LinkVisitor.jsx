import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../../Auth/Login/Login'
import SignUp from '../../Auth/SignUp/SignUp'
import ForgotPassword from '../../Auth/ForgotPassword/ForgotPassword'
import UpdatePassword from '../../Auth/UpdatePassord/UpdatePassword'
import Page404 from '../../ErrorPages/Page404/Page404'
import Home from './pages/Home/Home'
import VisitorInterface from './VisitorInterface'
import Faq from './pages/Faq/Faq'
import Contact from './pages/Contact/Contact'
import AboutUs from './pages/About/AboutUs'
import Product from './pages/Products/Product'
import ChatBot from './pages/Chatbot/ChatBot'
import ResetPassword from '../../Auth/ResetPassword/ResetPassword'
import Blog from './pages/Blog/Blog'
import BlogSinglePage from './pages/Blog/BlogSinglePage'
function LinkVisitor() {
 return(
        <>
            <Routes>    
              <Route path='/login' element={<Login/>}></Route>  
              <Route path='/sign-up' element={<SignUp/>}></Route>
              <Route path='/forgot-password' element={<ForgotPassword/>}></Route>
              <Route path='/update-password' element={<UpdatePassword/>}></Route>  
              <Route path='/reset-password' element={<ResetPassword/>}></Route>  
              <Route path='/' element={<VisitorInterface/>}>	
                <Route index element={ <Home/>}/>
                <Route path='/faq' element={<Faq/>}></Route>
                <Route path='/contact-us' element={<Contact/>}></Route>
                <Route path='/about-us' element={<AboutUs/>}></Route>
                <Route path='/products' element={<Product/>}></Route>
                <Route path='/blog' element={<Blog/>}></Route>
                <Route path='/blog/:slug' element={<BlogSinglePage/>}></Route>
                <Route path='/ChatBot' element={<ChatBot/>}></Route>
                <Route path='*' element={<Page404/>}/>
              </Route>
            </Routes>
        </> 
      );
}
export default LinkVisitor;