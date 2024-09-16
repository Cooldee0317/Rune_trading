'use client';

import Button from '@/components/UI/Button';
import FileUpload from '@/components/UI/FileUpload';
import InputBase from '@/components/UI/InputBase';
import ConnectWalletModal from '@/components/UI/ConnectWalletModal';
import { FcAlarmClock, FcBearish, FcConferenceCall } from 'react-icons/fc';
import { GiHelp } from 'react-icons/gi';
import { phase } from '@/config';
import { useAppSelector } from '../lib/hooks';
import { RootState } from '../lib/store';
import { FaDiscord, FaGlobe, FaTelegram, FaTwitter } from 'react-icons/fa';
import { useDisclosure } from '@nextui-org/react';
import { useState } from 'react';

export default function Launchpad() {
  const wallet = useAppSelector((state: RootState) => state.wallet);
  const { onClose, onOpen, onOpenChange, isOpen } = useDisclosure();

  function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        // The result is the Base64-encoded string
        resolve(reader.result as string);
      };

      reader.onerror = () => {
        reject(new Error('Failed to read file'));
      };

      reader.readAsDataURL(file);
    });
  }

  const [payload, setPayload] = useState({
    image: '',
    rune: '',
    symbol: '',
    amount: '',
    cap: '',
    divisibility: '',
    receiveAddress: '',
    description: '',
    website: '',
    twitter: '',
    telegram: '',
    discord: '',
  });

  const [errors, setErrors] = useState({
    image: '',
    rune: '',
    symbol: '',
    amount: '',
    cap: '',
    receiveAddress: '',
    description: '',
  });

  const handleFileSelect = async (file: File | null) => {
    if (file) {
      try {
        const base64String = await fileToBase64(file);
        setPayload({ ...payload, image: base64String });
      } catch (error) {
        setPayload({ ...payload, image: '' });
        setErrors({ ...errors, image: 'Invalid Image' });
      }
      console.log(`Selected file: ${file.name}`);
    } else {
      setPayload({ ...payload, image: '' });
    }
  };

  const pushDot = () => {
    if (payload.rune && payload.rune[payload.rune.length - 1] !== '•') {
      setPayload({ ...payload, rune: payload.rune + '•' });
    }
  };

  function getRemainingDaysUntilNextPhase(): {
    days: number;
    charactors: number;
  } | null {
    const today = new Date();

    for (const p of phase) {
      const phaseDateTo = new Date(p.dateTo);

      if (phaseDateTo > today) {
        const remainingDays = Math.ceil(
          (phaseDateTo.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
        );
        return { days: remainingDays, charactors: p.charactors };
      }
    }

    return null;
  }

  return (
    <div className="mx-auto max-w-[700px] flex flex-col gap-y-4">
      <h1 className="text-center sm:text-3xl text-2xl">
        Launch your token on ordinals.fun
      </h1>
      <div className="flex justify-around gap-2 my-6">
        <div className="flex flex-col items-center gap-y-2">
          <FcAlarmClock className="lg:text-6xl md:text-5xl text-4xl" />
          <span className="sm:text-xl text-sm font-bold">No presale</span>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <FcConferenceCall className="lg:text-6xl md:text-5xl text-4xl" />
          <span className="sm:text-xl text-sm font-bold">
            No team allocation
          </span>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <FcBearish className="lg:text-6xl md:text-5xl text-4xl" />
          <span className="sm:text-xl text-sm font-bold">Free Mint</span>
        </div>
      </div>

      <div className="bg-shade-95 rounded-xl p-6">
        <div className="flex justify-between flex-col sm:flex-row gap-2">
          <p>
            Phase:{' '}
            <span className="text-gray-400">
              2 ({getRemainingDaysUntilNextPhase()?.charactors} ~ 25 charsets)
            </span>
          </p>
          <div className="flex gap-2 group">
            <span>Next Phase: </span>
            <div className="relative">
              <span className="text-white bg-ord-sky/50 p-1 rounded-md relative">
                {getRemainingDaysUntilNextPhase()?.days} Days
              </span>
              <div className="absolute bottom-0 right-0 translate-y-full z-20 group-hover:inline-block hidden duration-150">
                <div className="bg-shade-90 p-3 rounded-lg w-80 mt-2">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-1 text-end">From</div>
                    <div className="col-span-1 text-end">To</div>
                    <div className="col-span-1 text-end">Available</div>
                  </div>
                  {phase.map((p, key) => {
                    return (
                      <div
                        key={key}
                        className={`grid grid-cols-3 gap-3 p-1.5 text-sm border-b border-gray-600 text-gray-200 ${
                          p.charactors ===
                            getRemainingDaysUntilNextPhase()?.charactors &&
                          'bg-ord-sky/20'
                        }`}
                      >
                        <div className="col-span-1 text-end">{p.dateFrom}</div>
                        <div className="col-span-1 text-end">{p.dateTo}</div>
                        <div className="col-span-1 text-end">
                          {p.charactors}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex sm:gap-6 flex-col sm:flex-row">
          <FileUpload onFileSelect={handleFileSelect} />
          <div className="w-full">
            <div className="lg:mt-8 mt-6">
              <label htmlFor="rune" className="text-lg text-gray-400 ">
                Rune <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <InputBase
                  shadow={false}
                  type="text"
                  placeholder="Enter 'AAAAA•AAAAA•AAAAA' or 'BBBBB BBBBB BBBBB' here"
                  onChange={(e) =>
                    setPayload({ ...payload, rune: e.target.value })
                  }
                />
                <Button onClick={pushDot}>
                  <span className="flex items-center text-white">•</span>
                </Button>
              </div>
            </div>
            <div className="lg:mt-8 mt-6">
              <label htmlFor="symbol" className="text-lg text-gray-400 ">
                Symbol <span className="text-red-500">*</span>
              </label>
              <InputBase
                shadow={false}
                type="text"
                placeholder="the symbol of the rune."
                onChange={(e) =>
                  setPayload({ ...payload, symbol: e.target.value })
                }
              />
            </div>
          </div>
        </div>

        <div className="lg:mt-8 mt-6 flex gap-6 flex-col sm:flex-row">
          <div className="w-full">
            <label
              htmlFor="symbol"
              className="text-lg text-gray-400 flex items-center gap-1"
            >
              Mint Amount
              <span className="relative group">
                <GiHelp className="text-sm" />
                <div className="text-sm rounded-md bg-shade-80 p-2 absolute w-52 -top-2.5 -left-4 -translate-y-full text-white hidden group-hover:inline-block duration-300">
                  the amount of runes each mint transaction receives.
                  <div className="absolute w-4 h-4 bg-shade-80 bottom-1 left-3.5 translate-y-1/2 rotate-45"></div>
                </div>
              </span>
              <span className="text-red-500">*</span>
            </label>
            <InputBase
              shadow={false}
              type="number"
              placeholder="the amount of runes."
              onChange={(e) =>
                setPayload({ ...payload, amount: e.target.value })
              }
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="symbol"
              className="text-lg text-gray-400 flex items-center gap-1"
            >
              Mint Cap
              <span className="relative group">
                <GiHelp className="text-sm" />
                <div className="text-sm rounded-md bg-shade-80 p-2 absolute w-52 -top-2.5 sm:-right-4 -left-4 -translate-y-full text-white hidden group-hover:inline-block duration-300">
                  the allowed number of mints.
                  <div className="absolute w-4 h-4 bg-shade-80 bottom-1 sm:right-3.5 left-3.5 translate-y-1/2 rotate-45"></div>
                </div>
              </span>
              <span className="text-red-500">*</span>
            </label>
            <InputBase
              shadow={false}
              type="number"
              placeholder="the allowed number of mints."
              onChange={(e) => setPayload({ ...payload, cap: e.target.value })}
            />
          </div>
        </div>

        <div className="lg:mt-8 mt-6 text-gray-400">
          <p>
            Max Supply: <span className="text-ord-sky font-bold">0</span>
          </p>
        </div>

        <div className="lg:mt-8 mt-6">
          <label
            htmlFor="symbol"
            className="text-lg text-gray-400 flex gap-2 items-center"
          >
            Divisibility (optional)
            <span className="relative group">
              <GiHelp className="text-sm" />
              <div className="text-sm rounded-md bg-shade-80 p-2 absolute w-52 -top-2.5 sm:-left-4 -right-4 -translate-y-full text-white hidden group-hover:inline-block duration-300">
                The Divisibility field, raised to the power of ten, is the
                number of subunits in a super unit of runes.
                <div className="absolute w-4 h-4 bg-shade-80 bottom-1 sm:left-3.5 right-3.5 translate-y-1/2 rotate-45"></div>
              </div>
            </span>
          </label>
          <InputBase
            shadow={false}
            type="number"
            placeholder="the divissibility of the rune."
            onChange={(e) =>
              setPayload({ ...payload, divisibility: e.target.value })
            }
          />
        </div>

        <div className="lg:mt-8 mt-6">
          <label
            htmlFor="symbol"
            className="text-lg text-gray-400 flex gap-2 items-center"
          >
            Descripton <span className="text-red-500">*</span>
          </label>
          <textarea
            onChange={(e) =>
              setPayload({ ...payload, description: e.target.value })
            }
            cols={30}
            rows={5}
            className="px-4 rounded-md bg-shade-95 border border-gray-600 focus-within:border-gray-400 focus-within:outline-none flex gap-2 items-center w-full py-2"
          ></textarea>
        </div>

        <div className="lg:mt-8 mt-6">
          <label
            htmlFor="symbol"
            className="text-lg text-gray-400 flex gap-1 items-center"
          >
            <span>
              <FaGlobe />
            </span>
            Website (optional)
          </label>
          <InputBase
            shadow={false}
            type="text"
            placeholder="URL"
            onChange={(e) =>
              setPayload({ ...payload, website: e.target.value })
            }
          />
        </div>

        <div className="lg:mt-8 mt-6">
          <label
            htmlFor="symbol"
            className="text-lg text-gray-400 flex gap-1 items-center"
          >
            <span>
              <FaTwitter />
            </span>
            Twitter (optional)
          </label>
          <InputBase
            shadow={false}
            type="text"
            placeholder="URL"
            onChange={(e) =>
              setPayload({ ...payload, twitter: e.target.value })
            }
          />
        </div>

        <div className="lg:mt-8 mt-6">
          <label
            htmlFor="symbol"
            className="text-lg text-gray-400 flex gap-1 items-center"
          >
            <span>
              <FaTelegram />
            </span>
            Telegram (optional)
          </label>
          <InputBase
            shadow={false}
            type="text"
            placeholder="URL"
            onChange={(e) =>
              setPayload({ ...payload, telegram: e.target.value })
            }
          />
        </div>

        <div className="lg:mt-8 mt-6">
          <label
            htmlFor="symbol"
            className="text-lg text-gray-400 flex gap-1 items-center"
          >
            <span>
              <FaDiscord />
            </span>
            Discord (optional)
          </label>
          <InputBase
            shadow={false}
            type="text"
            placeholder="URL"
            onChange={(e) =>
              setPayload({ ...payload, discord: e.target.value })
            }
          />
        </div>

        <div className="lg:mt-8 mt-6">
          {wallet.address.payment ? (
            <Button size="full">Create Order</Button>
          ) : (
            <Button size="full" onClick={onOpen}>
              Connect Wallet
            </Button>
          )}
        </div>
      </div>

      <ConnectWalletModal
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
      />
    </div>
  );
}
