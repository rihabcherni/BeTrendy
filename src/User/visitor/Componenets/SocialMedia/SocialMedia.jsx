import React from 'react'
import './SocialMedia.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function SocialMedia() {
  return (
    <ul className="social-icons">
        <li><a href="#"><FacebookIcon className='icon-media facebook'/></a></li>
        <li><a href="#"><InstagramIcon className='icon-media instagram'/></a></li>
        <li><a href="#"><TwitterIcon className='icon-media twitter'/></a></li>
        <li><a href="#"><LinkedInIcon className='icon-media linkedin'/></a></li>
    </ul>
  )
}
