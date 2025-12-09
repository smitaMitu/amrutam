import React from 'react'

const TabSection = () => {
    const data = [
    {
      title: "Natural Wellness",
      img: "iphone.png",
      reverse: false,
      shift: "down",
    },
    {
      title: "Ayurvedic Care",
      img: "iphone.png",
      reverse: true, // Middle column (image first),
      shift: "up",
    },
    {
      title: "Holistic Treatment",
      img: "iphone.png",
      reverse: false,
      shift: "down",
    },
  ];
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
        {data.map((item, index) => (
          <div key={index} className={`flex flex-col items-center  
            ${item.shift === "down"
                ? "md:mt-12"  // shift down
                : "md:-mt-12" // shift up
            }
          `}>

            {item.shift === "up" ? (
              <>
                <img
                  src={`../src/assets/${item.img}`}
                  alt={item.title}
                  className="w-full max-w-[250px] rounded-xl object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-[#3A643C]">
                  {item.title}
                </h3>
              </>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-[#3A643C] mb-4">
                  {item.title}
                </h3>
                <img
                  src={`../src/assets/${item.img}`}
                  alt={item.title}
                  className="w-full max-w-[250px] rounded-xl object-cover"
                />
              </>
            )}

          </div>
        ))}
      </div>
    </div>
  )
}

export default TabSection