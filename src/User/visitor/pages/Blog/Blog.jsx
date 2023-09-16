import React from 'react'
import Title from '../../Componenets/Title/Title';
import {BlogPosts} from './Item'
import { BlogCard } from './BlogCard';
import {  Grid } from '@mui/material';

export default function Blog() {
  return (
    <>
        <Title title='Blog' souTitle='Welcome to BeTrendy!'/>
        <Grid container spacing={3} sx={{ padding: "20px" }}>
            {BlogPosts.map((blog) => (
                <BlogCard
                  key={blog.id}
                  title={blog.title}
                  author={blog.author}
                  slug={blog.slug}
                  date={blog.date}
                  content={blog.content}
                  contentDetails={blog.contentDetails}
                  image={blog.image}
                  likes={blog.likes}
                />
            ))}
        </Grid>
    </>
  );
}