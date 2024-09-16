'use client';
import Link from 'next/link';
import Button from '../UI/Button';
import ConnectWallet from './ConnectWallet';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { useDisclosure } from '@nextui-org/react';
import ConnectWalletModal from '../UI/ConnectWalletModal';

const Header = () => {
  const path = usePathname().replace('/', '');
  const [mobileSideBar, setMobileSideBar] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="fixed top-0 left-0 w-full bg-shade-95 z-40">
      <div className="container p-4 flex justify-between items-center">
        <div className="w-[150px] md:w-[200px] flex items-center">
          <img src="/logo.png" className="w-full" />
        </div>

        <div className="justify-center hidden md:flex">
          <div className="flex gap-6 items-center text-lg text-gray-300 font-bold">
            <Link
              className={`${
                path === ''
                  ? 'border-b-ord-sky text-white'
                  : 'border-b-transparent'
              }  py-1 hover:text-white duration-300 border-b-4`}
              href={'/'}
            >
              Home
            </Link>

            <Link
              className={`${
                path === 'launch'
                  ? 'border-b-ord-sky text-white'
                  : 'border-b-transparent'
              }  py-1 hover:text-white duration-300 border-b-4`}
              href={'/launch'}
            >
              Launch
            </Link>
          </div>
        </div>

        <ConnectWallet
          setMobileSideBar={setMobileSideBar}
          mobileSideBar={mobileSideBar}
        />
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-shade-95 z-30 px-4 py-6 flex flex-col justify-between  ${
          mobileSideBar ? 'translate-x-[0%]' : 'translate-x-[100%]'
        } duration-500`}
      >
        <div>
          <div className="flex justify-between items-center w-full">
            <div>
              <img src="/logo.png" alt="logo" className="w-[200px]" />
            </div>
            <Button onClick={() => setMobileSideBar(false)}>
              <FaSignOutAlt />
            </Button>
          </div>

          <div className="py-4 text-xl px-1 text-gray-300 flex flex-col">
            <Link
              href="/"
              className="p-2 w-full hover:bg-ord-sky cursor-pointer hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/launch"
              className="p-2 w-full hover:bg-ord-sky cursor-pointer hover:text-white"
            >
              Launch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
