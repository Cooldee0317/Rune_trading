'use client';
import { IoSend } from 'react-icons/io5';

const Comment = ({ params }: { params: { rune: string } }) => {
  return (
    <div>
      <h2 className="text-lg font-bold">Comments</h2>
      <div className="bg-shade-95 p-4 rounded-xl flex flex-col gap-4 w-full mt-2">
        <div className="p-2 flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <div className="text-xs underline text-ord-sky">3BN...KhB</div>
            <div className="px-4 py-2 rounded-full bg-ord-blue/10 w-fit">
              <span>This is so ugly and yet so beautifull</span>
              <span className="text-xs text-gray-300 ml-4">12 mins ago</span>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <div className="text-xs underline text-ord-sky">3BN...KhB</div>
            <div className="px-4 py-2 rounded-full bg-ord-blue/10 w-fit">
              <span>Someone make a x community</span>
              <span className="text-xs text-gray-300 ml-4">12 mins ago</span>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <div className="text-xs underline text-ord-sky">3BN...KhB</div>
            <div className="px-4 py-2 rounded-full bg-ord-blue/10 w-fit">
              <span>#11055460 so ugly so izzz</span>
              <span className="text-xs text-gray-300 ml-4">12 mins ago</span>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <div className="text-xs underline text-ord-sky">3BN...KhB</div>
            <div className="px-4 py-2 rounded-full bg-ord-blue/10 w-fit">
              <span>who can make a banner</span>
              <span className="text-xs text-gray-300 ml-4">12 mins ago</span>
            </div>
          </div>
        </div>

        <div className="mt-2 flex gap-2 border border-gray-600 rounded-full p-2">
          <input
            type="text"
            placeholder="Comment"
            className="w-full text-lg bg-transparent p-1 focus:outline-none px-3"
          />
          <button className="bg-ord-sky w-[4rem] h-[3rem] rounded-full flex justify-center items-center hover:shadow-[0px_0px_15px_rgba(255,255,255,0.5)]">
            <IoSend className="text-2xl ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
