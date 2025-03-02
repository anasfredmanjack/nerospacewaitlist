'use client';

import React from 'react';
import Image from 'next/image';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from '@heroui/react';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);



  const menuItems = [
    {
      id: 1,
      title: 'Whitepaper',
      link: '/',
    },
    {
      id: 2,
      title: 'Roadmap',
      link: '/',
    },
    {
      id: 3,
      title: 'Community',
      link: 'https://x.com/nerospacehq',
    },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className=' text-white'>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden sm:block"
        />
        <NavbarBrand>
          <Link href='/'>
          <Image src='/whitelogo.svg' alt="Logo" height={100} width={100} />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className=" md:flex hidden gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.id}>
            <Link className='text-white' href={item.link}>
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
    

        <NavbarItem>
          <Button as={Link} color="primary" href="#waitlistformidd" className="text-white " variant="flat">
            Join Waitlist
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-black h-50 items-center" >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={item.id} >
            <Link
              color={
                index === 2 ? 'primary' : index === menuItems.length - 1 ? 'danger' : 'foreground'
              }
              className="w-full"
              href={item.link}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
