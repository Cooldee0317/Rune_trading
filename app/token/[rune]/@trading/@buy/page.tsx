'use client';

import Button from '@/components/UI/Button';
import { FaBitcoin } from 'react-icons/fa';

interface BuyProps {
  params: {
    rune: string;
  };
  ticker: string;
}

const Buy = (props: BuyProps) => {
  console.log(props);

  return (
    <div>
      <div
        tabIndex={0}
        className="p-3 rounded-md border border-gray-600 focus-within:border-gray-400 focus-within:outline-none gap-2 mt-4"
      >
        <div className="flex gap-2 items-center justify-between w-full">
          <input
            type="number"
            className="w-full h-full bg-transparent p-1 focus:outline-none text-xl font-bold"
            placeholder="Enter the amount of buy"
          />
          <span className="flex items-center gap-2">
            <span className="text-gray-400">BTC</span>{' '}
            <FaBitcoin className="text-2xl text-orange-400" />
          </span>
        </div>
        <div className="text-gray-400 text-xs px-1 mt-2">
          Balance: --- BTC ~$1213.22{' '}
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <button className="bg-ord-blue/20 hover:bg-ord-blue/30 p-2 rounded-md text-xs">
          100 cat
        </button>
        <button className="bg-ord-blue/20 hover:bg-ord-blue/30 p-2 rounded-md text-xs">
          500 cat
        </button>
        <button className="bg-ord-blue/20 hover:bg-ord-blue/30 p-2 rounded-md text-xs">
          5000 cat
        </button>
        <button className="bg-ord-blue/20 hover:bg-ord-blue/30 p-2 rounded-md text-xs">
          10000 cat
        </button>
      </div>

      <div className="mt-8">
        <Button size="full">Connect Wallet</Button>
      </div>
    </div>
  );
};

export default Buy;
