import React from 'react'
import './Header.scss'
import NavHeader from '../NavHeader/NavHeader'
export default function Header() {
  return (
    <div className='header'>
      <div className='AnnouncementBar'>
          <p>Discover our exceptional offers with up to 25% off! Limited time - Don't miss this opportunity!</p>
      </div>
      <NavHeader/>
    </div>
  )
}
