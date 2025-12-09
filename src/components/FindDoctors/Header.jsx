

const Header = ({title, text}) => {
  return (
    <div className='text-center my-6'>
        <h2 className='md:text-[40px] text-[24px] text-[#3A643C] font-semibold '>{title}</h2>
        <p className="text-[#4C4C4C] md:text-[20px] text-[16px]">{text}</p>
    </div>
  )
}

export default Header