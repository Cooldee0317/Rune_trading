import { FaDiscord, FaGlobe, FaTwitter } from 'react-icons/fa';
import { formatNumber } from '@/utils';
import ProgressBar from '../UI/ProgressBar';

const Banner = () => {
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

  const getDescripton = (description: string) => {
    if (description.length > 110) {
      return `${description.slice(0, 110)}...`;
    } else {
      return description;
    }
  };

  return (
    <div className="flex gap-2 justify-between pb-[3rem]">
      <div className="flex flex-col gap-4 w-full justify-center">
        <img src="/metaImage.jpg" className="w-24 h-24" />
        <h1 className="sm:text-5xl text-4xl font-bold">Ordinals Fun</h1>
        <h3 className="text-xl">
          The First Runes Fair Launch Platform on Bitcoin.
        </h3>
        <div className="underline text-ord-sky text-xl cursor-pointer">
          How it works?
        </div>
      </div>

      <div className="bg-shade-95 hidden rounded-xl cursor-pointer border border-ord-sky relative overflow-hidden sm:flex p-6 gap-6">
        <div className="relative z-10">
          <img
            src={project.image}
            alt=""
            className="rounded-t-xl w-96 h-full object-cover object-center"
          />
        </div>

        <div className="h-full relative z-10 flex flex-col justify-between">
          <div>
            <div className="flex justify-between">
              <span className="text-sm flex gap-1 text-gray-400">
                Created By:{' '}
                <a
                  href={`https://mempool.space/address/${project.owner}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-ord-sky"
                >
                  {project.owner.slice(0, 4)}...{project.owner.slice(-4)}
                </a>
              </span>
              <div className="flex text-gray-400 gap-2">
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

            <h2 className="mt-2 font-bold">
              {project.title} ($ {project.symbol})
            </h2>

            <p className="text-sm mt-4 text-gray-400">
              {getDescripton(project.description)}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-400 mt-4">
              Market Cap:{' '}
              <span className="text-white">
                ${formatNumber(project.marketCap)}
              </span>{' '}
              ({project.progress}%)
            </p>
            <ProgressBar progress={project.progress} />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-ord-sky/30 from-10% via-transparent via-60% to-transparent rounded-xl opacity-100 transition-opacity duration-300 z-0"></div>
      </div>
    </div>
  );
};

export default Banner;
