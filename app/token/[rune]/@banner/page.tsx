'use client';

import { FaCopy, FaDiscord, FaGlobe, FaTwitter } from 'react-icons/fa';

const Token = ({ params }: { params: { rune: string } }) => {
  const project = {
    symbol: 'TGINNAN',
    owner: 'TM7oVUz54dZjvFTAqZmKXihU6pdUdftBbT',
    title: 'TRON GINNAN THE CAT',
    description:
      'https://x.com/Ginnanthecat/status/1830816773114843367/photo/1\n\nTRON GINNAN THE CAT IS HERE. RED IS NEW GREEN',
    image:
      'https://cdn.sunpump.meme/public/logo/TGINNAN_TM7oVU_nzxNzdgTYx41.jpg',
    twitter: 'https://x.com/Ginnanthecat/status/1830816773114843367/photo/1',
    discord: 'https://x.com/Ginnanthecat/status/1830816773114843367/photo/1',
    telegram: '',
    website: 'https://x.com/Ginnanthecat/status/1830816773114843367/photo/1',
    marketCap: 5209.6797084566988879462,
    progress: 1.0,
  };

  return (
    <div className="bg-shade-95 p-4 rounded-xl flex sm:flex-row flex-col gap-4 w-full">
      <div>
        <img
          src={project.image}
          className="rounded-xl h-full object-cover object-center w-full sm:w-[17rem]"
        />
      </div>
      <div className="w-full flex flex-col items-stretch justify-between flex-grow">
        <div className="flex justify-between">
          <div className="flex gap-4 sm:items-center sm:flex-row flex-col">
            <h1 className="break-words">{project.title}</h1>
            <p className="text-gray-400 text-sm">
              Created by:{' '}
              <a
                className="underline text-ord-sky"
                href={`https://mempool/address/${project.owner}`}
                target="_blank"
              >
                {project.owner.slice(0, 4)}...{project.owner.slice(-4)}
              </a>
            </p>
          </div>
          <div className="flex text-gray-400 gap-2 mt-1">
            <a
              href={project.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 duration-200 cursor-pointer"
            >
              <FaDiscord />
            </a>
            <a
              href={project.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 duration-200 cursor-pointer"
            >
              <FaTwitter />
            </a>
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 duration-200 cursor-pointer"
            >
              <FaGlobe />
            </a>
          </div>
        </div>

        <div className="text-gray-400 mt-4">
          <div className="flex gap-4 items-center text-sm">
            <span className="break-words">Contract: {params.rune}</span>
            <button>
              <FaCopy />
            </button>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-400 break-words">
          {project.description}
        </div>

        <div className="grid lg:grid-cols-6 md:grid-grid-cols-3 grid-cols-2 gap-2 mt-4 text-sm">
          <div className="rounded-md p-2 bg-ord-blue/20 flex flex-col">
            <span className="text-gray-300">Price</span>
            <span className="text-white font-bold">0.0001 BTC</span>
          </div>
          <div className="rounded-md p-2 bg-ord-blue/20 flex flex-col">
            <span className="text-gray-300">Marketcap</span>
            <span className="text-white font-bold">5.6k BTC</span>
          </div>
          <div className="rounded-md p-2 bg-ord-blue/20 flex flex-col">
            <span className="text-gray-300">Virtual Liquidity</span>
            <span className="text-white font-bold">1662.4k BTC</span>
          </div>
          <div className="rounded-md p-2 bg-ord-blue/20 flex flex-col">
            <span className="text-gray-300">24H Volume</span>
            <span className="text-white font-bold">0.64 BTC</span>
          </div>
          <div className="rounded-md p-2 bg-ord-blue/20 flex flex-col">
            <span className="text-gray-300">Total Supply</span>
            <span className="text-white font-bold">100000</span>
          </div>
          <div className="rounded-md p-2 bg-ord-blue/20 flex flex-col">
            <span className="text-gray-300">Minted</span>
            <span className="text-white font-bold">2000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Token;
