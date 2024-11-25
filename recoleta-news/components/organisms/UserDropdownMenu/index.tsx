import Button from '@/components/atoms/Button';
import React from 'react';

export const UserDropdownMenu: React.FC = () => {
  return (
    <div className="user-dropdown flex flex-col p-4 bg-white shadow-lg rounded-lg">
      <hr className="mb-4" />

      <div className="flex flex-col space-y-2">
        <a href="#" className="link-user-options">
          <span>User Option 1</span>
        </a>
        <a href="#" className="link-user-options">
          <span>User Option 2</span>
        </a>
        <a href="#" className="link-user-options">
          <span>User Option 3</span>
        </a>
      </div>

      <div className="mt-4">
        <Button
          className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
          onClick={() => console.log('Sair')}
        >
          Sair
        </Button>
      </div>
    </div>
  );
};

export const MobileUserDropdownMenu: React.FC = () => {
  return (
    <div className="mobile-user-dropdown flex flex-col p-4 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col space-y-2">
        <a href="#" className="link-user-options">
          <span>User Option 1</span>
        </a>
        <a href="#" className="link-user-options">
          <span>User Option 2</span>
        </a>
        <a href="#" className="link-user-options">
          <span>User Option 3</span>
        </a>
      </div>

      <div className="mt-4">
        <Button
          className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
          onClick={() => console.log('Sair')}
        >
          Sair
        </Button>
      </div>
    </div>
  );
};
