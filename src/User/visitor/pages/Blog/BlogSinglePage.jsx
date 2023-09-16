import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Divider, Grid, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { BlogPosts } from './Item'
const BlogSinglePage = () => {
  const { slug } = useParams();
  const blogPost = BlogPosts.find((blog) => blog.slug === slug);
  if (!blogPost) {
    return <Typography variant="h6">Blog post not found.</Typography>;
  }
  return (
    <Box sx={{ py:2 }}>
      <Grid container spacing={4} sx={{ px:7 , py: 2}}  direction="row"  alignItems="center" justifyContent="center">
        <Grid item lg={5} sm={5} xs={12}>
          <img src={blogPost.image} alt="Blog Post" width="100%"/>
        </Grid>
        <Grid item lg={7} sm={7} xs={12}>
          <Typography variant="h4" sx={{ my:1 }}>{blogPost.title}</Typography>
          <Typography variant="body1">{blogPost.author}</Typography>
          <Grid container sx={{alignItems:"center"}}>
            <Typography variant="subtitle1">{blogPost.likes}</Typography>
            <FavoriteIcon sx={{m:1}}/>
            <Divider color="#FDA228" sx={{ height: 28, mx: 2, width: '4px' }} orientation="vertical" />
            <Typography variant="subtitle1">{blogPost.date}</Typography>
          </Grid>
          <Typography variant="paragraph">{blogPost.contentDetails}</Typography>     
        </Grid>
      </Grid>
    </Box>
  );
};
export default BlogSinglePage;
