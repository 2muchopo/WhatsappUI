import React from 'react'
import '../styles/Header.css'
import { Icon } from '@iconify/react';

const Header = () => {
  return (
    <div className='header'>
        <div>
            <h3>Whatsapp</h3>
        </div>
        <div className='icon'>
        <Icon icon="akar-icons:search" className='search' />
        <Icon icon="ph:dots-three-outline-vertical-fill" className='menu' />
        </div>
    </div>
  )
}

export default Header