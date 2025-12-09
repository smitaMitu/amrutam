import Question from './Question'
import Reply from './Reply'
import { AiOutlineHeart } from "react-icons/ai";
import { GoComment } from "react-icons/go";
const QuestionAnswer = () => {
  return (
    <div className='p-[16px] grid gap-7 border-t-[#E0E0E0] border-t-2'>
        <Question />
        <Reply />

        <div className='max-w-500 m-auto py-4 border-t-[#E0E0E0] border-t-2 pr-5 flex gap-5'>
            <span className='flex items-center gap-1 text-xl text-[#8D8D8D]'><AiOutlineHeart className="inline-flex text-gray-400 fill-gray-400 me-1"/> 23 Likes</span>
            <span className='flex items-center gap-1 text-xl text-[#8D8D8D]'><GoComment className="inline-flex text-gray-400 fill-gray-400 me-1"/> 10 Reply</span>
            <span className='flex items-center gap-1 text-xl text-[#8D8D8D]'><AiOutlineHeart className="inline-flex text-gray-400 fill-gray-400 me-1"/> 3 Saves</span>
        </div>
    </div>
  )
}

export default QuestionAnswer