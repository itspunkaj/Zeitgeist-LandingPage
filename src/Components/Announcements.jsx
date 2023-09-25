/* eslint-disable no-unused-vars */
import React from 'react'
import AnnouncementBullet from './AnnouncementBullet'
import bgimg from '../assets/bg.png'
import recFrame from '../assets/rectangle-frames.svg'
import leftmegaphone from '../assets/Left-MegaPhone.svg'
import leftheadinggrp from '../assets/Group 3633.svg'
import rightmegaphone from '../assets/Right-MegaPhone.svg'
import rightheadinggrp from '../assets/Group 3632.svg'
function Announcements() {
  return (
    <div className='Announcements'>
      <img className='leftmegaphone' src={leftmegaphone} />
      <img className='bgimg' src={bgimg} />
      <img className='recFrame' src={recFrame} />
      <img className='rightmegaphone' src={rightmegaphone} />
      <div className='heading-container'>
        <img className='headinggrp' src={leftheadinggrp} />
        <p className='heading'>Announcements</p>
        <img className='headinggrp' src={rightheadinggrp} />
      </div>
      <div className='announcements-container'>
      <AnnouncementBullet />
      </div>
    </div>
  )
}

export default Announcements