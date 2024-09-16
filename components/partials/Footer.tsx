import { FaDiscord, FaMedium, FaTelegram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-shade-95 lg:bg-transparent">
      <div className="container mt-[5.5rem] lg:my-[6.25rem] px-6 py-[4.5rem] lg:py-0 flex flex-col gap-y-[4.5rem]">
        <div className="w-full flex flex-col items-center gap-y-8 lg:py-10 rounded-xl lg:bg-shade-95">
          <div className="w-full max-w-md flex items-center gap-x-6 justify-between lg:max-w-[58rem]">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[3.5rem] lg:w-fit h-[3.5rem] lg:h-[5.125rem] py-3.5 px-3 lg:px-6 transition-colors duration-300 ease-in-out rounded-lg flex items-center justify-center gap-x-4 font-inter bg-ord-blue/20 hover:bg-ord-sky"
            >
              <div className="hidden lg:block">
                <div className="font-light text-sm uppercase">follow our</div>
                <div className="font-bold text-xl first-letter:uppercase">
                  twitter
                </div>
              </div>
              <FaTwitter className="text-3xl" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[3.5rem] lg:w-fit h-[3.5rem] lg:h-[5.125rem] py-3.5 px-3 lg:px-6 transition-colors duration-300 ease-in-out rounded-lg flex items-center justify-center gap-x-4 font-inter bg-ord-blue/20 hover:bg-ord-sky"
            >
              <div className="hidden lg:block">
                <div className="font-light text-sm uppercase">follow our</div>
                <div className="font-bold text-xl first-letter:uppercase">
                  Discord
                </div>
              </div>
              <FaDiscord className="text-3xl" />
            </a>{' '}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[3.5rem] lg:w-fit h-[3.5rem] lg:h-[5.125rem] py-3.5 px-3 lg:px-6 transition-colors duration-300 ease-in-out rounded-lg flex items-center justify-center gap-x-4 font-inter bg-ord-blue/20 hover:bg-ord-sky"
            >
              <div className="hidden lg:block">
                <div className="font-light text-sm uppercase">follow our</div>
                <div className="font-bold text-xl first-letter:uppercase">
                  Telegram
                </div>
              </div>
              <FaTelegram className="text-3xl" />
            </a>{' '}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[3.5rem] lg:w-fit h-[3.5rem] lg:h-[5.125rem] py-3.5 px-3 lg:px-6 transition-colors duration-300 ease-in-out rounded-lg flex items-center justify-center gap-x-4 font-inter bg-ord-blue/20 hover:bg-ord-sky"
            >
              <div className="hidden lg:block">
                <div className="font-light text-sm uppercase">follow our</div>
                <div className="font-bold text-xl first-letter:uppercase">
                  Medium
                </div>
              </div>
              <FaMedium className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="border-t-ord-sky border-t h-[3.25rem] w-full flex items-center justify-between lg:text-xl container text-gray-400 px-6 md:px-0">
        <div className="flex justify-center flex-wrap text-sm font-light">
          <span>© {new Date().getFullYear()} ordinals.fun. &nbsp;</span>
        </div>
        <div className="flex justify-center flex-wrap text-sm font-light">
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
