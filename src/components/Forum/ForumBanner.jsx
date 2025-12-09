import "../../styles/ForumBanner.css"
import { IoSearch } from "react-icons/io5";
const ForumBanner = ({ title }) => {
    return (
        <div className='w-full h-[202px] forum-banner items-center justify-center hidden md:flex mb-8'>
            <div className="container flex flex-col items-center justify-center  gap-9">
                <h1 className="text-[36px] text-[var(--clr-neutral-950)] font-semibold capitalize">{title}</h1>
               
            </div>

        </div>
    )
}

export default ForumBanner