import "../styles/SearchSection.css"
import SearchIcon from "../assets/search.svg"
import { IoSearch } from "react-icons/io5";
const SearchSection = ({ title }) => {
    return (
        <div className='w-full h-[202px] search-section items-center justify-center hidden md:flex mb-8'>
            <div className="container flex flex-col items-center justify-center  gap-9">
                <h1 className="text-[36px] text-[var(--clr-neutral-950)] font-semibold capitalize">{title}</h1>
                <div>
                    <form className="flex justify-center items-center gap-4 relative">
                        <IoSearch className="absolute top-2.5 left-2.5 text-2xl text-[var(--clr-neutral-900)] font-light" />
                        <input type="text" id="search" name="search" className="w-[530px] h-[48px] bg-white rounded-lg px-1 py-1" placeholder="Search for Kuntal Care" />
                        <button className="w-[48px] h-[48px] bg-white searchBtn flex items-center justify-center"><img src={SearchIcon} alt="" /></button>

                    </form>
                </div>
            </div>

        </div>
    )
}

export default SearchSection