import Button from '@/components/atoms/Button';
import { useUserData } from '@/hooks/useUserData';
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';

const NavUserActions: React.FC = () => {
  const _id =
    typeof window !== 'undefined' ? localStorage.getItem('_id') : null;
  const accessToken =
    typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  const { userData, loading, error } = useUserData(_id, accessToken);
  const isLoggedIn = !!userData && !error;

  if (loading) return null; // or a loading spinner

  return (
    <>
      {/* Show login and register buttons if the user is not logged in */}
      {!isLoggedIn && (
        <NavbarContent className="flex gap-4" justify="end">
          <NavbarItem>
            <Button
              hoverTextColor="hover:text-[#A6FA7E]"
              textColor="text-[#1f6300]"
              hoverBgColor="hover:bg-[#4BD609]"
              activeShadow="shadow-md"
              onClick={() => {}}
              className="px-4 py-2 rounded"
            >
              Entrar
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              bgColor="transparent"
              onClick={() => {}}
              className="px-4 py-2 text-[#4BD609] border border-[#4BD609] hover:bg-green-100 rounded"
            >
              Registrar
            </Button>
          </NavbarItem>
        </NavbarContent>
      )}

      {/* Show the user dropdown if the user is logged in */}
      {isLoggedIn && (
        <NavbarContent as="div" justify="end">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name={userData?.firstName || 'User'}
                size="sm"
                src={'https://i.pravatar.cc/150?u=a042581f4e29026704d'}
              />
            </DropdownTrigger>
            <DropdownMenu
              className="bg-white"
              aria-label="Profile Actions"
              variant="flat"
            >
              <DropdownItem key="profile" className="h-14 gap-2 ">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">
                  {userData?.email || 'user@example.com'}
                </p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout" color="danger">
                <Button
                  bgColor="bg-[#F32013]"
                  hoverTextColor="hover:text-[#fdfdfd]"
                  textColor="text-white"
                  hoverBgColor="hover:bg-[#F32013]"
                  activeShadow="shadow-md"
                  onClick={() => {}}
                  className="px-4 py-2 rounded"
                >
                  Sair
                </Button>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      )}
    </>
  );
};

export default NavUserActions;
