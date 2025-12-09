
import ForumBanner from '../components/Forum/ForumBanner'
import Profile from "../assets/profile.png";
import QuestionAnswer from '../components/Forum/QuestionAnswer';
import { IoFilterSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
const ForumPage = () => {
  return (
    <main className='bg-white'>
      <ForumBanner />

      <div className='container max-w-[709px] '>
        <div className='border border-[#E0E0E0] rounded-2xl'>
          <div className='p-[16px] border-b-[#E0E0E0]'>
            <div className="flex border-b border-gray-300">
              <button
                className="w-full px-6 py-3 text-[#3A643B]! text-[20px] font-semibold! border-0! border-b-2! rounded-none! border-[#3A643B]! active bg-transparent!"
              >
                Questions
              </button>
              <button
                className="w-full px-6 py-3 text-[#B8B8B8]! text-[20px] font-semibold! border-0! border-b-2! rounded-none! border-[#B8B8B8]! bg-transparent!"
              >
                Thoughts
              </button>
            </div>
              <form className="flex justify-start items-center gap-4 relative mt-6">
                <IoSearch className="absolute top-2.5 left-2.5 text-2xl text-[var(--clr-neutral-900)] font-light" />
                <input type="text" id="search" name="search" className="w-full h-[48px] bg-white border border-[#E0E0E0] rounded-lg px-9 py-1" placeholder="Hair Fall" />
                <button className="w-[48px] h-[48px] bg-white searchBtn flex items-center justify-center border border-[#E0E0E0]! rounded-lg! text-[#2E2F2E]! text-2xl! p-0!"><IoFilterSharp className='text-[#2E2F2E]' /></button>

              </form>
            <div className="flex items-center justify-between py-6 pb-3">
              <div className="flex items-center gap-3">
                <img
                  src={Profile}
                  alt="Profile"
                  className="w-12 h-12 rounded-full object-cover border-0"
                />
                <span className="text-1 font-semibold text-[#3A643B]">
                  Priya Singh
                </span>
              </div>

              <button className=" text-white px-18! py-2 rounded-xl! font-medium text-[14px]!">
                Ask Question
              </button>

            </div>
          </div>
          <QuestionAnswer />
          <QuestionAnswer />
          <QuestionAnswer />
          <QuestionAnswer />
        </div>
        <div className='py-5 grid place-items-center'>
          <Link className='text-2xl text-black my-5 mx-auto flex items-center gap-2'>Load More <MdKeyboardDoubleArrowDown /></Link>
        </div>

      </div>
    </main >
  )
}

export default ForumPage