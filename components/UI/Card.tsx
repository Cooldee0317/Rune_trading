import { FaDiscord, FaGlobe, FaTwitter } from 'react-icons/fa';
import { formatNumber } from '@/utils';
import { useRouter } from 'next/navigation';
import ProgressBar from './ProgressBar';

interface CardProps {
  symbol: string;
  image: string;
  owner: string;
  title: string;
  description: string;
  marketCap: number;
  progress: number;
  discord?: string;
  twitter?: string;
  website?: string;
}

const Card = ({
  symbol,
  image,
  owner,
  title,
  description,
  marketCap,
  progress,
  discord,
  twitter,
  website,
}: CardProps) => {
  const router = useRouter();

  const getDescripton = (description: string) => {
    if (description.length > 200) {
      return `${description.slice(0, 200)}...`;
    } else {
      return description;
    }
  };

  const goToTokenPage = (rune: string) => {
    router.push(`/token/${rune}`);
  };

  return (
    <div
      onClick={() => goToTokenPage(owner)}
      className="bg-shade-95 rounded-xl cursor-pointer border border-transparent hover:border-ord-sky relative overflow-hidden group flex flex-col"
    >
      <div className="relative z-10">
        <img
          src={image}
          alt=""
          className="rounded-t-xl w-full object-cover object-center h-64"
        />
      </div>

      <div className="px-4 py-6 h-full relative z-10 flex flex-col justify-between">
        <div>
          <div className="flex justify-between">
            <span className="text-sm flex gap-1 text-gray-400">
              Created By:{' '}
              <a
                href={`https://mempool.space/address/${owner}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-ord-sky"
                onClick={(e) => e.stopPropagation()}
              >
                {owner.slice(0, 4)}...{owner.slice(-4)}
              </a>
            </span>
            <div className="flex text-gray-400 gap-2">
              <a
                href={discord}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:scale-110 duration-200 cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              >
                <FaDiscord />
              </a>
              <a
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:scale-110 duration-200 cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              >
                <FaTwitter />
              </a>
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:scale-110 duration-200 cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGlobe />
              </a>
            </div>
          </div>

          <h2 className="mt-2 font-bold">
            {title} ($ {symbol})
          </h2>

          <p className="text-sm mt-4 text-gray-400">
            {getDescripton(description)}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-400 mt-4">
            Market Cap:{' '}
            <span className="text-white">${formatNumber(marketCap)}</span> (
            {progress}%)
          </p>
          <ProgressBar progress={progress} />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-ord-sky/30 from-10% via-transparent via-60% to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
    </div>
  );
};

export default Card;
