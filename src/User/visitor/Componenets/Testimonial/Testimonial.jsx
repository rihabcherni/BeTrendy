import React , {useState, useEffect} from 'react';
import Carousel from 'react-material-ui-carousel'
import './Testimonial.scss'
import { StyledTestimonial, CardParagraph, BoxContainer} from './StyledComp'
import { Card, Typography } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import TitleComp from '../Title/TitleComp';
function Item(props){
    return (
        <StyledTestimonial className="text-center">
            <TitleComp name='Testimonial'/>
            <BoxContainer sx={{ display:'flex' , justifyContent:"space-between" }}>
                {props.items.map((item, i) => (
                    <Card className="testimonial4_slide" elevation="3" sx={{ p:2, mx:2 }}> 
                        <FormatQuoteIcon fontSize="large" sx={{transform: 'rotate(180deg)', position:"absolute", left:"10px",color:"var(--christine)"}}/>
                        <img src={item.photo} className="img-circle img-responsive" alt={item.name} />
                        <Typography variant='h6'>{item.name}</Typography>
                        <CardParagraph variant='body2'> {item.description}</CardParagraph>
                        <FormatQuoteIcon fontSize="large" sx={{ position:"absolute", right:"10px", bottom:"20px", color:"var(--christine)"}}/>
                    </Card>
                ))}
            </BoxContainer>
        </StyledTestimonial>
    )
}
export default function Testimonial(props){
    var items = [{
            photo:"https:i.ibb.co/8x9xK4H/team.jpg",
            name: "Client 1",
            description: "Lorem Ipsum is the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        },
        {
            photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIlgtRuPr6MaWKf0A3e0c0sUAAdDUzIpeOv4D7SzPC_ArOaxUzjmPKQW-djxinlamFwMw&usqp=CAU",
            name: "Client 2",
            description: "Lorem Ipsum is the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        },
        {
            photo:"https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png",
            name: "Client 3",
            description: "Lorem Ipsum is the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        },
        {
            photo:"https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png",
            name: "Client 4",
            description: "Lorem Ipsum is the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        },
        {
            photo:"https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png",
            name: "Client 5",
            description: "Lorem Ipsum is the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        },
        {
            photo:"https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png",
            name: "Client 6",
            description: "Lorem Ipsum is  dummy text. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        }
    ]

  
    const [numItemsToShow, setNumItemsToShow] = useState(3);
    useEffect(() => {
        const updateNumItemsToShow = () => {
            if (window.innerWidth <= 768) {
                setNumItemsToShow(1);
            } else if (window.innerWidth <= 1024) {
                setNumItemsToShow(2);
            } else {
                setNumItemsToShow(3);
            }
        };
        window.addEventListener('resize', updateNumItemsToShow);
        return () => {
            window.removeEventListener('resize', updateNumItemsToShow);
        };
    }, []);

    const groupedItems = items.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / numItemsToShow)
        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [] 
        } 
        resultArray[chunkIndex].push(item)
        return resultArray
      }, [])
    return (
        <>
            <Carousel indicatorContainerProps={{ style: { display:"none" }}} autoPlay>
                {groupedItems.map((group, i) => <Item key={i} items={group} />)}
            </Carousel>
            <br/>
        </>
    )
}
