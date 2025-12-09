import ReplyImg from "../../assets/reply.png";
import { HiDotsVertical } from "react-icons/hi";
import { AiFillHeart } from "react-icons/ai";
import { RiSearch2Line } from "react-icons/ri";
const Reply = () => {
    return (
        <div className="flex flex-col gap-3 max-w-[90%] p-4 ml-auto bg-[#F3FAF1] rounded-xl">
            <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">
                    <img
                        src={ReplyImg}
                        alt="Profile"
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="text-[16px] font-medium text-black">
                            Dr. Mathew Adams
                        </h3>
                        <p className="text-[14px] text-[#8D8D8D]">
                            5 days ago
                        </p>
                    </div>
                </div>
                <HiDotsVertical className='cursor-pointer text-2xl' />
            </div>
            <div>                
                <p className="text-[14px] text-[#000000] leading-relaxed">
                    <strong>Ans.</strong> Ayurveda offers holistic approaches like herbal remedies, lifestyle adjustments, and relaxation techniques to alleviate stress and support mental well-being. It emphasizes personalized care and natural methods to address the root causes of mental health challenges, promoting balance and harmony in mind and body.
                </p>
            </div>
            <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400 flex w-[50%] items-center">
                    <span><AiFillHeart className="inline-flex text-gray-400 fill-gray-400"/> 2</span> &nbsp;&nbsp;&nbsp;&nbsp; <span><RiSearch2Line className="inline-flex"/>10</span>
                </p>
            </div>

        </div>
    )
}

export default Reply