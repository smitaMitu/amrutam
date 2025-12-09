import Logo from "../../assets/admin-logo.png";
import { HiDotsVertical } from "react-icons/hi";

const Question = () => {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                    <img
                        src={Logo}
                        alt="Profile"
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="text-[18px] font-normal text-[#1E1E1E]">
                            Anonymous
                        </h3>
                        <p className="text-[14px] text-gray-400">
                            5 days ago
                        </p>
                    </div>
                </div>
                <HiDotsVertical className='cursor-pointer text-2xl' />
            </div>
            <div>
                <h4 className="text-[16px] font-medium text-black mb-1">
                    Question: Can Ayurveda help with stress and mental health issues?
                </h4>
                <p className="text-[14px] text-[#1F1F1F] leading-relaxed">
                    Explores the potential benefits of traditional Ayurvedic practices in managing stress and improving mental well-being, examining holistic approaches like herbal remedies, meditation, and lifestyle adjustments.
                </p>
            </div>
            <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400">
                    <span>Replies</span> . <span>10 reply</span>
                </p>
                <a href="#" className="text-sm text-[#3A643B]! font-medium hover:underline">
                    View All 9 Replies
                </a>
            </div>
        </div>
    )
}

export default Question