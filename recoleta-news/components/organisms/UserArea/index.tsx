import React from 'react';
import Image from 'next/image';
import useMobileTabletDetection from '@/hooks/useMobileTabletDetection';
import { UserDropdownMenu } from '../UserDropdownMenu';
import Button from '@/components/atoms/Button';

type UserData = {
  firstName?: string;
  lastName?: string;
  userImage?: string;
};

type UserAreaProps = {
  loginLink: string;
  registerLink: string;
  isLoggedIn: boolean;
  userData: UserData | null;
  onLogin?: () => void;
};

const UserArea: React.FC<UserAreaProps> = ({
  loginLink,
  registerLink,
  isLoggedIn,
  userData,
  onLogin,
}) => {
  const isMobileOrTablet = useMobileTabletDetection();

  if (isLoggedIn) {
    return (
      <div className="flex items-center">
        <div className="flex flex-col mr-4">
          <span className="text-sm text-gray-600">Bem-vindo,</span>
          <span className="font-semibold text-gray-800">
            {userData?.firstName}
            {userData?.lastName && ` ${userData.lastName}`}
          </span>
        </div>

        <div className="relative flex items-center">
          <Image
            src={`${
              userData?.userImage
                ? userData.userImage
                : 'https://via.placeholder.com/50'
            }`}
            width={50}
            height={50}
            alt="User Image"
            className="rounded-full cursor-pointer"
            onClick={() => {
              const dropdown = document.querySelector(
                '.user-dropdown'
              ) as HTMLElement;
              dropdown.style.visibility =
                dropdown.style.visibility === 'visible' ? 'hidden' : 'visible';
            }}
          />
          {/* Dropdown Menu - Only show if not on mobile or tablet */}
          {!isMobileOrTablet && <UserDropdownMenu />}
        </div>
      </div>
    );
  }

  return (
    <div className="flex space-x-4">
      <Button
        hoverTextColor="hover:text-[#A6FA7E]"
        textColor="text-[#1f6300]"
        hoverBgColor="hover:bg-[#4BD609]"
        activeShadow="shadow-md"
        onClick={() => {
          window.location.href = loginLink;
          if (onLogin) {
            onLogin();
          }
        }}
        className="px-4 py-2 rounded"
      >
        Entrar
      </Button>

      <Button
        bgColor="transparent"
        onClick={() => {
          window.location.href = registerLink;
          if (onLogin) {
            onLogin();
          }
        }}
        className="px-4 py-2 text-[#4BD609] border border-[#4BD609] hover:bg-green-100 rounded"
      >
        Registrar
      </Button>
    </div>
  );
};

export default UserArea;
