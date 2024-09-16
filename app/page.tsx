'use client';

import Banner from '@/components/partials/Banner';
import ControlPanel from '@/components/partials/ControlPanel';
import Card from '@/components/UI/Card';

export default function Home() {
  const projects = [
    {
      symbol: 'TGINNAN',
      owner: 'TM7oVUz54dZjvFTAqZmKXihU6pdUdftBbT',
      title: 'TRON GINNAN THE CAT',
      description:
        'https://x.com/Ginnanthecat/status/1830816773114843367/photo/1\n\nTRON GINNAN THE CAT IS HERE. RED IS NEW GREEN',
      image:
        'https://cdn.sunpump.meme/public/logo/TGINNAN_TM7oVU_nzxNzdgTYx41.jpg',
      twitter: 'https://x.com/Ginnanthecat/status/1830816773114843367/photo/1',
      telegram: '',
      website: 'https://x.com/Ginnanthecat/status/1830816773114843367/photo/1',
      marketCap: 5209.6797084566988879462,
      progress: 1.0,
    },
    {
      symbol: 'DOGWIFBOX',
      owner: 'TFcuAxz4tAu3UYrstaXZpepCJShKUMuL5p',
      title: 'Dog Wif Box',
      description:
        'DogWifBox sun, no doge sun DogWifBox sun today i s a DogWifBox da y toda i DogWifBox sun. yes DogWifBox go to da sun. u is cuming wif DogWifBox?',
      image:
        'https://cdn.sunpump.meme/public/logo/DOGWIFBOX_TFcuAx_nX8Wk340y08L.jpg',
      twitter: 'https://twitter.com/dogwifbox_trx',
      telegram: 'https://t.me/dogwifbox_trx',
      website: 'https://dogwifbox.lol/',
      marketCap: 20068.8344087912029253836,
      progress: 34.0,
    },
    {
      symbol: 'PSY',
      owner: 'TTk82ERoGTXadYFcEdbZxSFeMRtSFnstT2',
      title: 'Potatoes save you',
      description:
        "Let's save the potatoes so that the potatoes will save you.",
      image: 'https://cdn.sunpump.meme/public/logo/PSY_TTk82E_HykLyU3pvf2v.jpg',
      twitter: '',
      telegram: 't.me/HolyPotatoesHTTS',
      website: 'https://en.wikipedia.org/wiki/Potato',
      marketCap: 5051.73,
      progress: 0.0,
    },
    {
      symbol: 'TKIRK',
      owner: 'TE9orVHjWjfkZ4ua8puRQSMsLLhgaB61nB',
      title: 'TRON KIRK',
      description: 'TRON KIRK',
      image:
        'https://cdn.sunpump.meme/public/logo/TKIRK_TE9orV_hE94qXY0pOqX.jpg',
      twitter: '',
      telegram: '',
      website: '',
      marketCap: 5024.37,
      progress: 0.0,
    },
    {
      symbol: 'Kirk',
      owner: 'TG8sTVfXh9A529zGJjD1BP87q69ydwNUro',
      title: 'Tron Kirk',
      description: 'https://x.com/Poloniex/status/1830855747766198525',
      image:
        'https://cdn.sunpump.meme/public/logo/Kirk_TG8sTV_ER0xbd29ttOG.png',
      twitter: '',
      telegram: '',
      website: 'https://x.com/Poloniex/status/1830855747766198525',
      marketCap: 5173.13,
      progress: 0.0,
    },
    {
      symbol: 'Kirk',
      owner: 'TG8sTVfXh9A529zGJjD1BP87q69ydwNUro',
      title: 'Tron Kirk',
      description: 'https://x.com/Poloniex/status/1830855747766198525',
      image:
        'https://cdn.sunpump.meme/public/logo/Kirk_TG8sTV_ER0xbd29ttOG.png',
      twitter: '',
      telegram: '',
      website: 'https://x.com/Poloniex/status/1830855747766198525',
      marketCap: 5173.13,
      progress: 0.0,
    },
    {
      symbol: 'Kirk',
      owner: 'TG8sTVfXh9A529zGJjD1BP87q69ydwNUro',
      title: 'Tron Kirk',
      description: 'https://x.com/Poloniex/status/1830855747766198525',
      image:
        'https://cdn.sunpump.meme/public/logo/Kirk_TG8sTV_ER0xbd29ttOG.png',
      twitter: '',
      telegram: '',
      website: 'https://x.com/Poloniex/status/1830855747766198525',
      marketCap: 5173.13,
      progress: 0.0,
    },
    {
      symbol: 'Kirk',
      owner: 'TG8sTVfXh9A529zGJjD1BP87q69ydwNUro',
      title: 'Tron Kirk',
      description: 'https://x.com/Poloniex/status/1830855747766198525',
      image:
        'https://cdn.sunpump.meme/public/logo/Kirk_TG8sTV_ER0xbd29ttOG.png',
      twitter: '',
      telegram: '',
      website: 'https://x.com/Poloniex/status/1830855747766198525',
      marketCap: 5173.13,
      progress: 0.0,
    },
    {
      symbol: 'Kirk',
      owner: 'TG8sTVfXh9A529zGJjD1BP87q69ydwNUro',
      title: 'Tron Kirk',
      description: 'https://x.com/Poloniex/status/1830855747766198525',
      image:
        'https://cdn.sunpump.meme/public/logo/Kirk_TG8sTV_ER0xbd29ttOG.png',
      twitter: '',
      telegram: '',
      website: 'https://x.com/Poloniex/status/1830855747766198525',
      marketCap: 5173.13,
      progress: 0.0,
    },
    {
      symbol: 'Kirk',
      owner: 'TG8sTVfXh9A529zGJjD1BP87q69ydwNUro',
      title: 'Tron Kirk',
      description: 'https://x.com/Poloniex/status/1830855747766198525',
      image:
        'https://cdn.sunpump.meme/public/logo/Kirk_TG8sTV_ER0xbd29ttOG.png',
      twitter: '',
      telegram: '',
      website: 'https://x.com/Poloniex/status/1830855747766198525',
      marketCap: 5173.13,
      progress: 0.0,
    },
    {
      symbol: 'Kirk',
      owner: 'TG8sTVfXh9A529zGJjD1BP87q69ydwNUro',
      title: 'Tron Kirk',
      description: 'https://x.com/Poloniex/status/1830855747766198525',
      image:
        'https://cdn.sunpump.meme/public/logo/Kirk_TG8sTV_ER0xbd29ttOG.png',
      twitter: '',
      telegram: '',
      website: 'https://x.com/Poloniex/status/1830855747766198525',
      marketCap: 5173.13,
      progress: 0.0,
    },
  ];

  return (
    <main>
      <Banner />
      <ControlPanel />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 py-6">
        {projects.map((project, key) => {
          return <Card key={key} {...project} />;
        })}
      </div>
    </main>
  );
}
