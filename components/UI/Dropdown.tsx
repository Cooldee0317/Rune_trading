import { useState, useRef, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface DropdownProps {
  options: string[];
  selectedOption: string | null;
  onOptionSelect: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, selectedOption, onOptionSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option: string) => {
    onOptionSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-full hover:shadow-[0px_0px_15px_rgba(255,255,255,0.5)]" ref={dropdownRef}>
      <button
        ref={buttonRef}
        className="border border-gray-600 h-full w-full px-4 py-2 rounded-md text-left flex items-center justify-between focus:outline-none focus:shadow-[0px_0px_15px_rgba(255,255,255,0.5)]"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setIsOpen(!isOpen);
          }
        }}
      >
        {selectedOption || 'Select an option'}
        <FaChevronDown className="ml-2 text-gray-500" />
      </button>
      {isOpen && (
        <ul className="absolute z-20 mt-2 w-full border border-gray-600 rounded-md shadow-lg max-h-60 overflow-y-auto bg-shade-95">
          {options.map((option, index) => (
            <li
              key={index}
              className={`px-4 py-2 cursor-pointer text-sm ${
                selectedOption === option ? 'bg-ord-sky' : 'hover:bg-ord-sky/30'
              }`}
              onClick={() => handleOptionClick(option)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleOptionClick(option);
                }
              }}
              tabIndex={0}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
