import React from 'react'
const Card = ({imgsrc, title,index}) => {
    return (
        <div key={index} className="flex flex-col justify-start items-center">
            <img src={`../src/assets/${imgsrc}`} alt="" className="mb-2 w-[47px]"/>
            <p className="text-[14px] md:text-[18px] leading-[1.5] font-medium">{title}</p>
        </div>
    )
}
const Formulation = () => {
    const list = [
        {
            imgsrc: "formula.png",
            title: "Chitrak Haritaki"
        },
        {
            imgsrc: "formula.png",
            title: "Chitrakadi Vati "
        },
        {
            imgsrc: "formula.png",
            title: "Kalyanagulam"
        },
        {
            imgsrc: "formula.png",
            title: "Chitrakadi Churna"
        },
    ]
  return (
    <div className="grid grid-cols-2 md:grid-cols-4">
        {
            list.map((item,index) => <Card index={index} imgsrc={item.imgsrc} title={item.title} />)
        }
    </div>
  )
}

export default Formulation