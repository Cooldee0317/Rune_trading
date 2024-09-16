import { Modal, ModalContent, ModalHeader, ModalBody } from '@nextui-org/modal';
import { supportedWallets } from '@/config';
import { setConnectedWallet } from '@/app/lib/features/walletSlice';
import { useAppDispatch, useAppSelector } from '@/app/lib/hooks';
import { RootState } from '@/app/lib/store';
import { showToast } from '@/utils';
import { useMemo, useState } from 'react';
import { Spinner } from '@nextui-org/react';
import { getAddress, AddressPurpose, BitcoinNetworkType } from 'sats-connect';
import { useWallets } from '@wallet-standard/react';
import type { Wallet, WalletWithFeatures } from '@wallet-standard/base';

declare global {
  interface Window {
    unisat?: any;
    okxwallet?: any;
    LeatherProvider?: any;
    XverseProviders?: XverseProviders | undefined;
  }
}

const SatsConnectNamespace = 'sats-connect:';

interface ConnectWalletProps {
  isOpen: boolean;
  onOpenChange: any;
  onClose: any;
}

function isSatsConnectCompatibleWallet(wallet: Wallet) {
  return SatsConnectNamespace in wallet.features;
}

export default function ConnectWalletModal({
  isOpen,
  onOpenChange,
  onClose,
}: ConnectWalletProps) {
  const dispatch = useAppDispatch();
  const wallet = useAppSelector((state: RootState) => state.wallet);

  const { wallets } = useWallets();

  const compatibleWallets = useMemo(() => {
    return wallets.filter(isSatsConnectCompatibleWallet);
  }, [wallets]);

  const [loading, setLoading] = useState('');

  const connectWallet = (wallet: string) => {
    setLoading(wallet);

    if (wallet === 'unisat') {
      connectUnisatWallet();
    } else if (wallet === 'magiceden') {
      connectMagicedenWallet();
    } else if (wallet === 'okx') {
      connectOkxWallet();
    } else if (wallet === 'xverse') {
      connectXverseWallet();
    } else if (wallet === 'leather') {
      connectleatherWallet();
    }
  };

  const connectUnisatWallet = async () => {
    try {
      if (typeof window?.unisat !== 'undefined') {
        let address = '';
        const unisat = window.unisat;
        const connectedAccounts = await unisat.getAccounts();
        if (connectedAccounts.length) {
          address = connectedAccounts[0];
        } else {
          const accounts = await unisat.requestAccounts();
          address = accounts[0];
        }
        const pubkey = await unisat.getPublicKey();
        dispatch(
          setConnectedWallet({
            key: 'unisat',
            address: { payment: address, assets: address },
            pubkey: { payment: pubkey, assets: pubkey },
          })
        );
        showToast('success', <p>Unisat wallet connected successfully.</p>);
        setLoading('');
        onClose();
      } else {
        showToast('error', <p>Please install unisat wallet!</p>);
        setLoading('');
      }
    } catch (error: any) {
      if (error?.code === 4001) {
        showToast('error', <p>{error?.message}</p>);
      } else {
        showToast('error', <p>Something went wrong. Please try it again</p>);
      }
      console.log(error);

      setLoading('');
    }
  };

  const connectMagicedenWallet = async () => {
    const magicEdenWalletProvider = compatibleWallets.filter(
      (w: any) =>
        w.name.toLocaleLowerCase() === 'Magic Eden'.toLocaleLowerCase()
    );

    if (magicEdenWalletProvider.length == 0) {
      showToast('error', <p>Please Install Magic Eden Wallet</p>);
    } else {
      try {
        await getAddress({
          payload: {
            purposes: [AddressPurpose.Payment, AddressPurpose.Ordinals],
            message: 'Address for interracting with Dapp',
            network: {
              type: BitcoinNetworkType.Mainnet,
            },
          },
          onFinish: (response: any) => {
            const address = {
              payment: response.addresses[0].address,
              assets: response.addresses[1].address,
            };
            const pubkey = {
              payment: response.addresses[0].publicKey,
              assets: response.addresses[1].publicKey,
            };
            dispatch(setConnectedWallet({ key: 'magiceden', address, pubkey }));
            showToast(
              'success',
              <p>Magic eden wallet is connected successfully.</p>
            );
            setLoading('');
            onClose();
          },
          onCancel: () => {
            showToast(
              'error',
              <p>Wallet not connected. You cancelled the request.</p>
            );
            setLoading('');
          },
          getProvider: async () => {
            return (
              magicEdenWalletProvider[0] as unknown as WalletWithFeatures<any>
            ).features[SatsConnectNamespace]?.provider;
          },
        });
      } catch (error: any) {
        showToast('error', <p>{error.message}</p>);
        setLoading('');
        console.log(error);
      }
    }
  };

  const connectXverseWallet = async () => {
    if (typeof window.XverseProviders !== 'undefined') {
      try {
        await getAddress({
          payload: {
            purposes: [AddressPurpose.Payment, AddressPurpose.Ordinals],
            message: 'Address for interracting with Dapp',
            network: {
              type: BitcoinNetworkType.Mainnet,
            },
          },
          onFinish: (response: any) => {
            const address = {
              payment: response.addresses[0].address,
              assets: response.addresses[1].address,
            };
            const pubkey = {
              payment: response.addresses[0].publicKey,
              assets: response.addresses[1].publicKey,
            };
            dispatch(setConnectedWallet({ key: 'xverse', address, pubkey }));
            showToast(
              'success',
              <p>Xverse wallet is connected successfully.</p>
            );
            setLoading('');
            onClose();
          },
          onCancel: () => {
            showToast(
              'error',
              <p>Wallet not connected. You cancelled the request.</p>
            );
            setLoading('');
          },
          getProvider: async () => {
            return window?.XverseProviders?.BitcoinProvider;
          },
        });
      } catch (error: any) {
        showToast('error', <p>{error.message}</p>);
        setLoading('');
      }
    } else {
      showToast('error', <p>Please Install Xverse Wallet</p>);
    }
  };

  const connectOkxWallet = async () => {
    try {
      if (typeof window.okxwallet !== 'undefined') {
        const okx = window.okxwallet.bitcoin;
        const result = await okx.connect();
        dispatch(
          setConnectedWallet({
            key: 'okx',
            address: { payment: result.address, assets: result.address },
            pubkey: { payment: result.pubkey, assets: result.pubkey },
          })
        );
        showToast('success', <p>Okx wallet is connected successfully.</p>);
        setLoading('');
        onClose();
      } else {
        showToast('error', <p>OKX is not installed!</p>);
        setLoading('');
      }
    } catch (error: any) {
      showToast('error', <p>{error?.message}</p>);
      setLoading('');
    }
  };

  const connectleatherWallet = async () => {
    try {
      if (typeof window.LeatherProvider !== 'undefined') {
        const { result } = await window.LeatherProvider?.request(
          'getAddresses'
        );
        const address = {
          payment: result.addresses[0].address,
          assets: result.addresses[1].address,
        };
        const pubkey = {
          payment: result.addresses[0].publicKey,
          assets: result.addresses[1].publicKey,
        };
        dispatch(setConnectedWallet({ key: 'leather', address, pubkey }));
        showToast('success', <p>Leather wallet is connected successfully.</p>);
        setLoading('');
        onClose();
      } else {
        showToast('error', <p>Leather is not installed!</p>);
        setLoading('');
      }
    } catch (error: any) {
      if (error?.error?.code === 4001) {
        showToast('error', <p>{error?.error?.message}</p>);
      } else {
        showToast('error', <p>Something went wrong. Please try it again.</p>);
      }
      console.log('runnng');
      
      setLoading('');
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="bg-shade-95 pt-4 pb-6"
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Choose Wallet
              </ModalHeader>
              <ModalBody>
                {supportedWallets.map((w, key) => {
                  return (
                    <div
                      onClick={() => connectWallet(w.key)}
                      key={key}
                      className="bg-ord-blue/10 p-2 w-full rounded-md flex gap-2 items-center cursor-pointer hover:bg-ord-blue/30"
                    >
                      <img
                        src={w.logo}
                        className="w-12 h-12 rounded-md"
                        alt=""
                      />
                      <span className="text-lg font-bold">{w.name}</span>
                      {loading === w.key && (
                        <Spinner color="success" size="sm" />
                      )}

                      {wallet.key == w.key && (
                        <span className="bg-ord-sky px-3 rounded-full text-sm ml-auto">
                          Connected
                        </span>
                      )}
                    </div>
                  );
                })}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
