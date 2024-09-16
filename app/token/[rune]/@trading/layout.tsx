'use client';

import React, { useState } from 'react';

interface TradingProps {
  params: {
    rune: string;
  };
  buy: React.ReactNode;
  sell: React.ReactNode;
}

const Layout = ({ params, buy, sell }: TradingProps) => {
  const [tab, setTab] = useState('buy');

  return (
    <div className="bg-shade-95 p-4 rounded-xl flex flex-col gap-4 w-full">
      <div className="bg-ord-blue/20 p-2 rounded-md w-full flex gap-1">
        <button
          onClick={() => setTab('buy')}
          className={`duration-200 w-full p-3 font-bold rounded-md ${
            tab == 'buy' ? 'bg-ord-sky tett-white' : 'text-gray-400'
          }`}
        >
          Buy
        </button>
        <button
          onClick={() => setTab('sell')}
          className={`duration-200 w-full p-3 font-bold rounded-md ${
            tab == 'sell' ? 'bg-ord-sky text-white' : 'text-gray-400'
          }`}
        >
          Sell
        </button>
      </div>
      {tab === 'buy' ? (
        <div>
          {React.cloneElement(buy as React.ReactElement, {
            searchParams: 'Ace',
          })}
        </div>
      ) : (
        <div>
          {React.cloneElement(sell as React.ReactElement, {
            searchParams: 'Ace',
          })}
        </div>
      )}
    </div>
  );
};

export default Layout;
