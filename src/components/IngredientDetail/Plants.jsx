
const Card = ({imgsrc, heading,desc,index}) => {
    return (
        <div key={index} className="flex flex-col justify-start items-center p-0 w-[50%] md:w-auto">
            <img src={`../src/assets/${imgsrc}`} alt="" className="mb-2 w-[47px]"/>
            <p className="text-[14px] md:text-[18px] leading-[1.5] font-bold">{heading}</p>
            <p className="text-[14px] md:text-[14px] leading-[1.5] font-normal text-center">{desc}</p>
        </div>
    )
}
const Plants = () => {
    const list = [
        {
            imgsrc: "plant.png",
            heading: "Root",
            desc: "Digestion, Skin conditions, manage blood sugar level."
        },
        {
            imgsrc: "plant.png",
            heading: "Root bark",
            desc: "Manage obesity, metabolism and assit in weight loss."
        },
        {
            imgsrc: "plant.png",
            heading: "Leaves ",
            desc: "Used externally for skin conditions and wounds. "
        },
         
    ]
  return (
    <div className="md:grid flex flex-wrap justify-center md:grid-cols-3">
        {
            list.map((item,index) => <Card index={index} imgsrc={item.imgsrc} heading={item.heading} desc={item.desc}/>)
        }
    </div>
  )
}

export default Plants