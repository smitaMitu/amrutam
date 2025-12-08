
import TickMark from "../../assets/tick.png"
const Text = ({text}) => {
        return(
            <div className='flex'>
                <div className='w-[30px] h-[30px] shrink-0 me-3'>
                    <img src={TickMark} alt='' />
                </div>
                <p className='md:text-[20px] text-[14px] text-[#161616]'>{text}</p>
            </div>
        )
    }
const InfoList = () => {
    
    return (
        <div className='flex flex-col gap-2'>
            <Text text="Chitrak is valued because it helps lower blood sugar, boosts digestion, and reduces anxiety."/>
            <Text text={"It also protects the skin and speeds up wound healing with its antioxidant and antimicrobial properties."} />
            <Text text={"It is most used in Ayurvedic medicines for indigestion."} />
            
        </div>
    )
}

export default InfoList