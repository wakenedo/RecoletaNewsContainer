'use client';
import React, { useEffect } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Image,
} from '@nextui-org/react';
import NavUserActions from './NavUserActions';
import './styles.css';

export interface Item {
  id: string;
  isAdmin: boolean;
  name: string;
  address?: string;
  product?: string;
  category?: string;
  quantity?: number;
  price?: number;
  [key: string]: string | number | undefined | boolean;
}

export interface ServerUserData {
  items: Item[];
  map(arg0: (item: Item[]) => { email: string; password: string }): Item[];
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  userType: string;
  _id: string;
}

const Header: React.FC = () => {
  const [isHovering, setIsHovering] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY <= 5;
      setIsHovering(!isTop);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Aplicativo', 'Notícias', 'Artigos', 'Saiba Mais'];

  const HeaderNavMenuData = [
    {
      id: 1,
      itemName: 'Aplicativo',
      link: 'https://recoleta-next.vercel.app/',
    },
    { id: 2, itemName: 'Sobre Nós', link: '/' },
    { id: 3, itemName: 'Nosso Impacto', link: '/' },
    { id: 4, itemName: 'Parceiros', link: '/' },
  ];

  return (
    <Navbar
      className={`${isHovering ? 'shadow-md' : ''} z-30  bg-white lg:w-full custom-navbar`}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="md:hidden " justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarContent className="md:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link href="/">
            <Image
              src="/image/logo_recoleta.svg"
              alt="Descrição do logo"
              width={41}
              height={41}
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex" justify="start">
        <NavbarBrand>
          <Link href="/">
            <Image
              src="/image/logo_recoleta.svg"
              alt="Descrição do logo"
              width={41}
              height={41}
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className="hidden md:flex gap-10 px-auto font-medium md:text-[16px]"
        justify="center"
      >
        {HeaderNavMenuData.map(menu => (
          <NavbarItem key={menu.id}>
            <Link key={menu.id} color="foreground" href={menu.link} size="lg">
              <span className="text-[#4BD609] hover:text-orange-600 font-semibold ">
                {menu.itemName}
              </span>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent className="hidden md:flex gap-4" justify="end">
        <NavUserActions />
      </NavbarContent>

      <NavbarMenu>
        <NavbarContent className="absolute right-10 -top-96">
          <NavUserActions />
        </NavbarContent>
        {HeaderNavMenuData.map((item, index) => (
          <NavbarMenuItem
            className=" font-semibold py-4 text-heading-small bg-[#F6F6F6] shadow-md px-4 rounded-sm"
            key={`${item}-${index}`}
          >
            <Link
              className="w-full text-[#DB5C00]"
              color={
                index === 2
                  ? 'warning'
                  : index === menuItems.length - 1
                    ? 'danger'
                    : 'foreground'
              }
              href={item.link}
              size="lg"
            >
              {item.itemName}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
