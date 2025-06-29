'use client'

import React from 'react'
import MenuBottom from './menu-bottom'
import NavMobile from './nav-mobile'

interface LayoutWithMenuProps {
  children: React.ReactNode
  hideNav?: boolean
}

const LayoutWithMenu = ({ children, hideNav = false }: LayoutWithMenuProps) => {
  return (
    <div className="flex flex-col min-h-screen pb-20">
      {!hideNav && <NavMobile />}
      <main className="flex-grow">{children}</main>
      <MenuBottom />
    </div>
  )
}

export default LayoutWithMenu
