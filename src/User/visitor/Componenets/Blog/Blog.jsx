import React from 'react'
import TitleComp from '../Title/TitleComp'
import { Box, Button } from '@mui/material'
import { BlogCard } from '../../pages/Blog/BlogCard';
import {BlogPosts} from '../../pages/Blog/Item'
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
export default function Blog() {
  const sortedBlogPosts = BlogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  const lastThreeBlogPosts = sortedBlogPosts.slice(0, 3);
  return (
    <>
        <TitleComp name='Blog'/>
        <Box sx={{ alignItems:"center", textAlign:"center", py:3 }}>
            <Box sx={{ bgcolor:"var(--christine)", width:"100%", height:"200px", position:"absolute", zIndex:"-1", mt:15 }}></Box>
            <Grid container spacing={4} sx={{ padding:'20px 40px' }}>
            </Grid>
            <Grid container spacing={3} sx={{ padding: "20px" }}>
            {lastThreeBlogPosts.map((blog) => (
                <BlogCard key={blog.id} title={blog.title} author={blog.author} slug={blog.slug} date={blog.date} content={blog.content}
                  contentDetails={blog.contentDetails} image={blog.image} likes={blog.likes}
                />
            ))}
        </Grid>
            <Button variant='contained' color='inherit'>
              <Link to='./blog'>Learn More</Link>
            </Button>
        </Box>
    </>
  )
}
