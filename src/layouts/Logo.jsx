import React from 'react'
import logo from '../assets/logo.png'

const Logo = ({className}) => {
  return (
    <div>
      <img className={className} src={logo} alt="" />
    </div>
  )
}

export default Logo