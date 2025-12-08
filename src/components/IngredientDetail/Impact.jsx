import ImpactImg from "../../assets/impact.png"
const Card = ({imgsrc, text1, text2}) => {
    return (
        <div className="flex flex-col justify-center">
            <img src={imgsrc} alt="" className="mb-2"/>
            <p className="text-[14px] md:text-[20px] text-center"><span className="text-[#767676]">{text1}</span> <span className="text-[#404040]">{text2}</span></p>
        </div>
    )
}
const Impact = () => {
  return (
    <div className='flex gap-5 md:gap-7'>
        <Card imgsrc={ImpactImg} text1={"Vata"} text2={"Balanced"} />
        <Card imgsrc={ImpactImg} text1={"Kapha"} text2={"Balanced"} />
        <Card imgsrc={ImpactImg} text1={"Pitta"} text2={"Unbalanced"} />
    </div>
  )
}

export default Impact