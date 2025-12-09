import React from "react";
import { FaStar } from "react-icons/fa";

const DoctorsCards = () => {
  const doctors = [
    {
      name: "Dr. Anjali Mehta",
      role: "Ayurvedic Specialist",
      desc: "Expert in holistic therapies with more than a decade of hands-on experience.",
      img: "doctor.png",
      rating: 4,
    },
    {
      name: "Dr. Rahul Sharma",
      role: "Skin Care Expert",
      desc: "Specialist in natural skincare solutions focused on long-lasting healthy results.",
      img: "doctor.png",
      rating: 5,
    },
    {
      name: "Dr. Priya Singh",
      role: "Wellness Consultant",
      desc: "Dedicated to preventive healthcare and improving lifestyle through natural methods.",
      img: "https://via.placeholder.com/120",
      rating: 3,
    },
  ];

  return (
   <div className="max-w-6xl mx-auto py-4">
      <div className="flex flex-wrap justify-center gap-5">

        {doctors.map((doc, index) => (
          <div
            key={index}
            className={`bg-[#FFEEC3] border border-gray-200 rounded-2xl p-4 py-5 shadow-sm transition-all duration-300
            ${window.innerWidth>678 && index === 1  ? "scale-110" : "scale-95"}`}
            style={{ width: "350px" }}
          >
            {/* Row 1: Image + Info */}
            <div className="flex items-center gap-4 mb-4">
              {/* Profile Image */}
              <img
                src={`../src/assets/${doc.img}`}
                alt={doc.name}
                className="w-14 h-14 rounded-full object-cover border shrink-0"
              />

              {/* Name + Role + Stars */}
              <div>
                <h3 className="text-[14px] font-semibold text-black">
                  {doc.name} <span className="text-sm text-gray-500 text-[12px]">{doc.role}</span>
                </h3>
                

                {/* Stars */}
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-sm ${
                        i < doc.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Row 2: Description */}
            <p className="text-sm text-gray-500 leading-relaxed">
              {doc.desc}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default DoctorsCards;
