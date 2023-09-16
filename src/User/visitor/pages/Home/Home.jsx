import React from 'react'
import Featured from '../../Componenets/Featured/Featured'
import AnnouncementsModal from '../../Componenets/AnnouncementsModal/AnnouncementsModal';
import './Home.scss'
import BestSeller from '../../Componenets/BestSeller/BestSeller';
import Testimonial from '../../Componenets/Testimonial/Testimonial';
import ProductsSlider from '../../Componenets/products_slider/ProductsSlider';
import Blog from '../../Componenets/Blog/Blog';
import Partners from '../../Componenets/Partners/Partners';
export default function Home() {
  const slides = [
    { url: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", title: "BeTrendy" },
    {
      url: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "BeTrendy",
    },
  ];

  const containerStyles = {
    height: "90vh",
    margin: "0 auto",
  };
  return (
    <>
     <AnnouncementsModal/>
      <div style={containerStyles}>
        <Featured slides={slides} />
      </div>
      <ProductsSlider />;
      <BestSeller/>   
      <Testimonial/>  
      <Blog/> 
      <Partners/>
    </>
  )
}
