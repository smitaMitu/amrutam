import React from 'react'
const Card = ({imgsrc, title,index}) => {
    return (
        <div key={index} className="flex flex-col justify-start items-center w-[28%] md:w-auto">
            <img src={`../src/assets/${imgsrc}`} alt="" className="mb-2 w-[84px] h-[84px]"/>
            <p className="text-[14px] md:text-[18px] leading-[1.5] font-medium">{title}</p>
        </div>
    )
}
const Uses = () => {
    const list = [
        {
            imgsrc: "constipation.png",
            title: "Agnimandya "
        },
        {
            imgsrc: "constipation.png",
            title: "Grahani Rog"
        },
        {
            imgsrc: "constipation.png",
            title: "Arsha"
        },
        {
            imgsrc: "constipation.png",
            title: "Udara Shula"
        },
        {
            imgsrc: "constipation.png",
            title: "Gudasotha "
        },
    ]
  return (
    <div className="md:grid flex flex-wrap justify-center gap-5 md:gap-2 place-items-center  md:grid-cols-5">
        {
            list.map((item,index) => <Card index={index} imgsrc={item.imgsrc} title={item.title} />)
        }
    </div>
  )
}

export default Uses;