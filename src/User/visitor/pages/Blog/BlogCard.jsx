import React from 'react'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ShareIcon from '@mui/icons-material/Share';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button, Grid } from '@mui/material';
const actions = [
    { icon: <FacebookIcon />, name: 'Facebook' },
    { icon: <InstagramIcon />, name: 'Instagram' },
    { icon: <TwitterIcon />, name: 'twitter' },
  ];
  
   function ControlledOpenSpeedDial() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <Box sx={{ height: 0 , position:"relative", bottom:"220px", right:"5px"}}>
        <SpeedDial ariaLabel="SpeedDial controlled open example" icon={<ShareIcon />} onClose={handleClose}
          onOpen={handleOpen} open={open} direction="up" FabProps={{ size: 'small', style: { backgroundColor:"var(--christine)"}}}>
          {actions.map((action) => (
            <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} onClick={handleClose}/>
          ))}
        </SpeedDial>
      </Box>
    );
  }
export  const BlogCard = ({ title, author,slug, date, content, contentDetails, likes ,image }) => {
        return (
          <Grid item lg={4} xs={12} sm={6}> 
            <Card>
                <CardHeader avatar={<Avatar sx={{bgcolor: red[500]}}>A</Avatar>} title={author} subheader={date}
                action={
                    <>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon sx={{fontSize:"30px"}}/>
                        </IconButton>
                    </>
                  } />
              <CardMedia component="img" height="194" image={image} alt="I1" />
              <CardContent>
              <Typography variant="h6" color="text.secondary">{title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {content}
                </Typography>
              </CardContent>
              <CardActions disableSpacing sx={{ alignItems:"center"}}>
                <Button  aria-label="show more">
                  <Link to={`/blog/${slug}`}>Show More</Link>
                </Button>
                <Box sx={{flexGrow:1}}/>
                <ControlledOpenSpeedDial/>
              </CardActions>
            </Card>
          </Grid>
        );
}
