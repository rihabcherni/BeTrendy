import React, { useState } from 'react';
import './Faq.scss';
import Title from '../../Componenets/Title/Title';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const FAQ_DATA = [
  {
    category: 'General Questions',
    question: 'What is BeTrendy',
    answer: 'BeTrendy is an online e-commerce platform that allows users to buy a wide range of products conveniently from the comfort of their homes.',
  }, 
  {
    category: 'General Questions',
    question: 'Is BeTrendy secure for online transactions',
    answer: 'Yes, BeTrendy ensures secure online transactions by implementing industry-standard security protocols, such as SSL encryption and secure payment gateways.',
  },
  {
    category: 'General Questions',
    question: 'How can I create an account on BeTrendy?',
    answer: 'To create an account on BeTrendy, click on the "Sign Up" or "Register" button on the homepage. Fill in the required information, including your name, email address, and password, and follow the instructions to complete the registration process.',
  },
  {
    category: 'General Questions',
    question: 'Can I use BeTrendy without creating an account?',
    answer: 'Yes, you can browse and explore BeTrendy without creating an account. However, to make a purchase or access certain features like saving items to your wishlist or reviewing products, you will need to create an account.',
  },
  {
    category: 'General Questions',
    question: 'What payment methods does BeTrendy accept?',
    answer: 'A: BeTrendy accepts various payment methods, including credit/debit cards, PayPal, Apple Pay, and Google Pay. The available payment options may vary depending on your location.',
  },

  {
    category: 'Product-related Questions',
    question: 'How can I search for products on BeTrendy?',
    answer: 'A: BeTrendy provides a search bar at the top of the page. Simply enter the name or description of the product you are looking for, and the website will display relevant search results.',
  },
  {
    category: 'Product-related Questions',
    question: 'Can I track the status of my order on BeTrendy?',
    answer: 'Yes, once you place an order on BeTrendy, you will receive a confirmation email containing a tracking number. You can use this tracking number to monitor the status and progress of your order through the "Order Tracking" section on the website.',
  },
  {
    category: 'Product-related Questions',
    question: 'Are the product images on BeTrendy accurate representations of the actual products?',
    answer: 'BeTrendy strives to provide accurate and high-quality product images. However, please note that due to variations in display settings and lighting conditions, the actual product may slightly differ in appearance.',
  },
  {
    category: 'Product-related Questions',
    question: ' What should I do if I receive a defective or damaged product?',
    answer: 'If you receive a defective or damaged product from BeTrendy, please contact our customer support within [X] days of receiving the item. Our team will assist you in resolving the issue by arranging a return, replacement, or refund as per our policies.',
  }
];
const Faq = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };
  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value.toUpperCase());
  };
  const filteredFaqItems = FAQ_DATA.filter((faq) =>
    faq.category === filter || filter === 'all'
  ).filter(
    (faq) =>
      faq.question.toUpperCase().includes(searchTerm) ||
      faq.answer.toUpperCase().includes(searchTerm)
  );

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
        <Title title='FAQ' parentLink="Home" souTitle='Welcome to the Frequently Asked Questions page!'/>
        <Grid container justifyContent="center"  spacing={4} className='faq-box' direction="row"  alignItems="center">
            <Grid item xs={12} sm={6} lg={4}>
              <Paper  sx={{ backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : 'var(--citrine-white)',
                    padding:"15px"
              }}>
              <Box sx={{ width: '97.8%', bgcolor: 'background.paper', margin:"10px 0" }}>
                <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" }}>
                    <InputBase
                      onChange={handleSearchInputChange}
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Search"
                      inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                      <SearchIcon />
                    </IconButton>
                </Paper>
              </Box>
              <Box sx={{ width: '100%', bgcolor: 'background.paper', margin:"10px 0" }}>
                  <List>
                    <ListItem sx={{ padding:"5px 15px" }}>
                      <ListItemButton className={`btn ${filter === 'all' ? 'active' : ''}`} 
                          onClick={() => handleFilterChange('all')}>
                        <ListItemText primary="Show all"  />
                      </ListItemButton>
                    </ListItem>
                    <ListItem  sx={{ padding:"3px 15px" }}>
                      <ListItemButton className={`btn ${filter === 'General Questions' ? 'active' : ''}`}
                          onClick={() => handleFilterChange('General Questions')}>
                        <ListItemText primary="General Questions"  />
                      </ListItemButton>
                    </ListItem>
                    <ListItem  sx={{ padding:"3px 15px" }}>
                      <ListItemButton className={`btn ${filter === 'Product-related Questions' ? 'active' : ''}`}
                    onClick={() => handleFilterChange('Product-related Questions')}>
                        <ListItemText primary=" Product-related Questions"  />
                      </ListItemButton>
                    </ListItem>
                    <ListItem  sx={{ padding:"3px 15px" }}>
                      <ListItemButton className={`btn ${filter === 'account' ? 'active' : ''}`}
                          onClick={() => handleFilterChange('account')}>
                        <ListItemText primary="Account"  />
                      </ListItemButton>
                    </ListItem>
                    <ListItem  sx={{ padding:"3px 15px" }}>
                      <ListItemButton  className={`btn ${filter === 'orders' ? 'active' : ''}`}
                          onClick={() => handleFilterChange('orders')}>
                        <ListItemText primary="Orders"  />
                      </ListItemButton>
                    </ListItem>
                    <ListItem  sx={{ padding:"3px 15px" }}>
                      <ListItemButton  className={`btn ${filter === 'bugs' ? 'active' : ''}`}
                          onClick={() => handleFilterChange('bugs')}>
                        <ListItemText primary="Bugs"  />
                      </ListItemButton>
                    </ListItem>
                  </List>
              </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} lg={8}>
              <Paper  sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}>
                  {filteredFaqItems.map((faq, index) => (
                    <Accordion expanded={expanded === index} onChange={handleChange(index)}>
                      <AccordionSummary  expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id={index} 
                       sx={{ backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : 'var(--citrine-white)',
              }}>
                        <Typography variant='body2' sx={{  fontWeight:"bold" }}>
                          {faq.question}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography variant='body2'>{faq.answer}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
              </Paper>
            </Grid>
        </Grid>
     
    </>
  );
};
export default Faq;




