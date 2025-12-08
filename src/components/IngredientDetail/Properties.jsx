
const Card = ({imgsrc, heading,subhead,desc,index}) => {
    return (
        <div key={index} className="flex flex-col justify-start items-center p-3">
            <img src={`../src/assets/${imgsrc}`} alt="" className="mb-2 w-[47px]"/>
            <p className="text-[14px] md:text-[18px] leading-[1.5] font-bold">{heading}</p>
            <p className="text-[14px] md:text-[18px] leading-[1.5] font-medium text-center">{subhead}</p>
            <p className="text-[14px] md:text-[16px] leading-[1.5] font-normal text-center">{desc}</p>
        </div>
    )
}
const Properties = () => {
    const list = [
        {
            imgsrc: "toung.png",
            heading: "Rasa",
            subhead: "Katu (Pungent) ",
            desc: "Stimulates salivation and digestion"
        },
        {
            imgsrc: "toung.png",
            heading: "Veerya",
             subhead: "Ushna (Hot)",
            desc: "Increases heat and energy in the body"
        },
        {
            imgsrc: "toung.png",
            heading: "Guna ",
             subhead: "Laghu (Light) , Ruksha (Dry), Tiksna (Sharp)",
            desc: "Easy to digest, reduces heaviness"
        },
        {
            imgsrc: "toung.png",
            heading: "Vipaka",
             subhead: "Katu (Pungent) ",
            desc: "Drying and stimulating even after digestion"
        },
         
    ]
  return (
    <div className="grid grid-cols-2 md:grid-cols-4">
        {
            list.map((item,index) => <Card index={index} imgsrc={item.imgsrc} subhead={item.subhead} heading={item.heading} desc={item.desc}/>)
        }
    </div>
  )
}

export default Properties