import Button from '../UI/Button';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useDisclosure } from '@nextui-org/modal';
import { disconnectWallet } from '@/app/lib/features/walletSlice';
import { useAppDispatch, useAppSelector } from '@/app/lib/hooks';
import { RootState } from '@/app/lib/store';
import { FaAngleDown } from 'react-icons/fa';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/dropdown';
import ConnectWalletModal from '../UI/ConnectWalletModal';

interface ConnectWalletProps {
  setMobileSideBar: Function;
  mobileSideBar: boolean;
}

export default function ConnectWallet({
  setMobileSideBar,
  mobileSideBar,
}: ConnectWalletProps) {
  const dispatch = useAppDispatch();
  const wallet = useAppSelector((state: RootState) => state.wallet);

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const handleDisconnectWallet = () => {
    dispatch(disconnectWallet());
  };

  return (
    <>
      <div className="md:w-[200px] flex gap-2 items-center">
        <div className="md:hidden inline-block">
          <Button
            onClick={() => {
              setMobileSideBar(!mobileSideBar);
            }}
            size="sm"
          >
            <GiHamburgerMenu className="text-lg mx-1" />
          </Button>
        </div>

        {wallet.address.payment ? (
          <Dropdown className="bg-shade-95">
            <DropdownTrigger>
              <div className="flex gap-2 items-center border border-ord-sky rounded-xl py-2 px-3 cursor-pointer justify-between text-xs md:text-sm">
                <img
                  src={`/wallets/${wallet.key}.png`}
                  alt=""
                  className="md:w-8 md:h-8 w-6 h-6 rounded-xl"
                />
                <span>
                  {wallet.address.payment.slice(0, 4)}...
                  {wallet.address.payment.slice(-4)}
                </span>
                <FaAngleDown />
              </div>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem
                key="delete"
                className="text-danger p-3"
                color="danger"
                onClick={handleDisconnectWallet}
              >
                Disconnect
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <div>
            <div className="hidden md:inline-block">
              <Button size="full" onClick={onOpen}>
                Connect Wallet
              </Button>
            </div>
            <div className="inline-block md:hidden">
              <Button size="sm" onClick={onOpen}>
                Connect Wallet
              </Button>
            </div>
          </div>
        )}
      </div>

      <ConnectWalletModal
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
      />
    </>
  );
}
