import React from 'react'

const WhyChoose = () => {
    const rows = [
        {
            title: "Instant FREE 5-Mins Call",
            desc: "We understand the importance of building trust with your patients. That’s why Amrutam offers a free 5-minute call, helping you connect instantly and foster lasting patient relationships with ease.",
            img: "why1.png",
        },
        {
            title: "Forum for Meaningful Connections",
            desc: "We value your journey in Ayurveda .The Amrutam Forum helps you engage with patients, answer questions, while the 'Thoughts' section allows you to share deeper Ayurvedic wisdom.",
           img: "why2.png",
        },
        {
            title: "Choose Your Session Mode",
            desc: "Amrutam offers you to connect with patients via Instant Chat, Instant Call, or Schedule Video call. Each option offers flexibility and personalized care to suit individual needs.",
            img: "why3.png",
        },
        {
            title: "Smart Wallet",
            desc: "We understand the need for seamless transactions. With Amrutam Wallet, you can easily withdraw payments, and for your security, a one-time password is sent to your registered mobile number during withdrawals.",
            img: "why4.png",
        },
    ];
    return (
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
            {rows.map((row, index) => (
                <div
                    key={index}
                    className={`flex flex-col items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                        }`}
                >
                    {/* Image */}
                    <div className="w-full md:w-1/2">
                        <img
                            src={`../src/assets/${row.img}`}
                            alt={`Row ${index + 1}`}
                            className="w-auto rounded-xl object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-1/2 md:px-[30px]">
                        <h2 className="md:text-[28px] text-[24px] font-bold text-[#3A643C] mb-1">
                            {row.title}
                        </h2>
                        <p className="text-[#666666] text-[18px]">{row.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default WhyChoose