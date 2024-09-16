'use client';

import { useRouter } from 'next/navigation';
import { FaAngleLeft } from 'react-icons/fa';

export default function Layout({
  banner,
  chart,
  comment,
  holders,
  trading,
}: {
  banner: React.ReactNode;
  chart: React.ReactNode;
  comment: React.ReactNode;
  holders: React.ReactNode;
  trading: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-6">
      <button
        className="flex gap-1 items-center text-gray-400 hover:text-white duration-200 w-fit rounded-md px-2"
        onClick={router.back}
      >
        <FaAngleLeft /> <span>Back</span>
      </button>
      {banner}
      <div className="grid grid-cols-11 gap-6">
        <div className="col-span-12 md:col-span-7">{chart}</div>
        <div className="col-span-12 md:col-span-4">{trading}</div>
      </div>
      <div className="grid grid-cols-11 gap-6">
        <div className="col-span-12 md:col-span-7">{comment}</div>
        <div className="col-span-12 md:col-span-4">{holders}</div>
      </div>
    </div>
  );
}
