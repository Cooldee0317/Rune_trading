import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import Dropdown from '../UI/Dropdown';
import { MdRefresh } from 'react-icons/md';

const ControlPanel = () => {
  const options = ['Recent', 'Market Cap', 'Trading Volume'];
  const [selectedOption, setSelectedOption] = useState('');
  const [tradable, setTradable] = useState(false);

  return (
    <div className="flex justify-between gap-2 flex-col sm:flex-row">
      <div
        tabIndex={0}
        className="px-4 rounded-md border border-gray-600 focus-within:border-gray-400 hover:shadow-[0px_0px_15px_rgba(255,255,255,0.5)] focus-within:shadow-[0px_0px_15px_rgba(255,255,255,0.5)] focus-within:outline-none flex gap-2 items-center"
      >
        <FaSearch className="text-xl text-gray-400" />
        <input
          type="search"
          className="w-full h-full bg-transparent py-3 focus:outline-none"
          placeholder="Search for tokens"
        />
      </div>

      <div className="flex gap-2">
        <Dropdown
          options={options}
          selectedOption={selectedOption}
          onOptionSelect={(option) => setSelectedOption(option)}
        />

        <div
          onClick={() => setTradable(!tradable)}
          className="flex items-center border border-gray-600 rounded-md gap-2 px-4 py-2 hover:shadow-[0px_0px_15px_rgba(255,255,255,0.5)] cursor-pointer"
        >
          <span
            className={`w-4 h-4 flex items-center justify-center border border-gray-400 rounded-sm ${
              tradable ? 'bg-ord-sky' : 'bg-shade-80'
            }`}
          >
            {tradable && (
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            )}
          </span>
          <input type="checkbox" className="hidden" checked={tradable} readOnly />
          Tradable
        </div>

        <button className="flex items-center cursor-pointer border border-gray-600 rounded-md px-4 hover:shadow-[0px_0px_15px_rgba(255,255,255,0.5)]">
          <MdRefresh className='text-xl'/>
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
