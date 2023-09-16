import React from 'react'
import TitleComp from '../Title/TitleComp'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from '@mui/material';
export function Item(props) {
    return (
      <div className="card">
        <img className="product--image-partners" src={props.url} alt="product" />
      </div>
    );
  }
export default function Partners() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 6,
          slidesToSlide: 2,
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 4,
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
    
      const productData = [
        {
          id: 1,
          imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaGASnd2PZVX5IwpF19SYBLp_pR74rs-_qDf3bUa4eTUC1AROJ_d5Eqc9adOwJ5FGQi2M&usqp=CAU",
        },
        {
            id: 2,
            imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfvVi3VjC2CmClYvkIcPigYpQHMolQqFJJNA&usqp=CAU",
        },
        {
            id: 1,
            imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaGASnd2PZVX5IwpF19SYBLp_pR74rs-_qDf3bUa4eTUC1AROJ_d5Eqc9adOwJ5FGQi2M&usqp=CAU",
          },
          {
              id: 2,
              imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfvVi3VjC2CmClYvkIcPigYpQHMolQqFJJNA&usqp=CAU",
          },
          {
            id: 1,
            imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaGASnd2PZVX5IwpF19SYBLp_pR74rs-_qDf3bUa4eTUC1AROJ_d5Eqc9adOwJ5FGQi2M&usqp=CAU",
          },
          {
              id: 2,
              imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfvVi3VjC2CmClYvkIcPigYpQHMolQqFJJNA&usqp=CAU",
          },
          {
            id: 1,
            imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaGASnd2PZVX5IwpF19SYBLp_pR74rs-_qDf3bUa4eTUC1AROJ_d5Eqc9adOwJ5FGQi2M&usqp=CAU",
          },
          {
              id: 2,
              imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfvVi3VjC2CmClYvkIcPigYpQHMolQqFJJNA&usqp=CAU",
          },
          {
            id: 1,
            imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaGASnd2PZVX5IwpF19SYBLp_pR74rs-_qDf3bUa4eTUC1AROJ_d5Eqc9adOwJ5FGQi2M&usqp=CAU",
          },
          {
              id: 2,
              imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfvVi3VjC2CmClYvkIcPigYpQHMolQqFJJNA&usqp=CAU",
          },
          

        
      ];
    
      const product = productData.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          url={item.imageurl}
          price={item.price}
          description={item.description}
        />
      ));
  return (
    <>
        <TitleComp name='Partners'/>
        <Box sx={{ px:4 , py:6}}>
        <Carousel  responsive={responsive} infinite={true} autoPlay autoPlaySpeed='1500'>
        {product}
        </Carousel>   
        </Box>
    </>
  )
}
