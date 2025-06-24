'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york-v4/ui/avatar'
import { Button } from '@/registry/new-york-v4/ui/button'
import { BellIcon, SearchIcon } from 'lucide-react'
import Link from 'next/link'

const NavMobile = () => {
  return (
    <div className="flex items-center justify-between w-full py-2 bg-transparent">
      <div className="flex items-center">
        <Avatar className="h-10 w-10 rounded-full">
          <AvatarImage src="" alt="User" />
          <AvatarFallback className="text-purple-800 bg-[#dfcafa] font-semibold">B</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/search">
            <SearchIcon className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Link>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <Link href="/notifications">
            <BellIcon className="h-10 w-10" />
            <span className="sr-only">Notifications</span>
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default NavMobile