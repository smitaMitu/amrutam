
const Card = ({imgsrc, text,index}) => {
    return (
        <div key={index} className="flex flex-col justify-start p-3 bg-[#FFE9CB] rounded-2xl">
            <img src={`../src/assets/${imgsrc}`} alt="" className="mb-2 w-[47px]"/>
            <p className="text-[14px] md:text-[20px] leading-[1.5]">{text}</p>
        </div>
    )
}
const Benifits = () => {
    const list = [
        {
            imgsrc: "benifit.png",
            text: "Calms the nervous system and reduces anxiety."
        },
         {
            imgsrc: "benifit.png",
            text: "Reduces cholesterol and supports weight loss."
        },
         {
            imgsrc: "benifit.png",
            text: "Manages diabetes by lowering blood sugar levels."
        },
         {
            imgsrc: "benifit.png",
            text: "Beneficial in Hemorrhoids of Vata origin."
        },
         {
            imgsrc: "benifit.png",
            text: "Improves digestion and boosts metabolism."
        },
        {
            imgsrc: "benifit.png",
            text: "Prevents deposits in arteries, supporting heart health."
        },
        {
            imgsrc: "benifit.png",
            text: "Treats skin conditions like acne and dermatitis."
        },
        {
            imgsrc: "benifit.png",
            text: "Speeds up wound healing and promotes new skin growth."
        },
    ]
  return (
    <div className="grid grid-cols-2 gap-3 gap-x-6">
        {
            list.map((item,index) => <Card index={index} imgsrc={item.imgsrc} text={item.text}/>)
        }
        
    </div>
  )
}

export default Benifits