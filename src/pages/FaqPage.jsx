import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import SearchSection from "../components/SearchSection";
import AppSection from "../components/AppSection";

const faqs = [
    {
        question: "What is your return policy?",
        answer:
            "You can return any product within 7 days of delivery if it is unused and in original packaging."
    },
    {
        question: "How long does shipping take?",
        answer:
            "Shipping usually takes 3–5 business days depending on your location."
    },
    {
        question: "Do you offer cash on delivery?",
        answer:
            "Yes, we offer Cash on Delivery (COD) on selected products and locations."
    },
    {
        question: "Is my payment information secure?",
        answer:
            "Yes, all transactions are encrypted and processed through secure payment gateways."
    },
    {
        question: "How can I contact customer support?",
        answer:
            "You can contact our support team via email or live chat available on our website."
    }
];

export default function FaqPage() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <main>
            <SearchSection title={"Faq"} />
            <div className="container">
                <div className="w-full justify-center items-start flex space-y-3 gap-7 ">
                    <button
                        className="px-0! py-3 text-[#3A643B]! text-[20px] font-semibold! border-0! border-b-2! rounded-none! border-[#3A643B]! active bg-transparent!"
                    >
                        Consultation
                    </button>
                    <button
                        className="px-0! py-3 text-[#414141]! text-[20px] font-semibold! border-0!  rounded-none! bg-transparent!"
                    >
                        Wallet
                    </button>
                    <button
                        className="px-0! py-3 text-[#414141]! text-[20px] font-semibold! border-0!  rounded-none! bg-transparent!"
                    >
                        Forum
                    </button>
                    <button
                        className="px-0! py-3 text-[#414141]! text-[20px] font-semibold! border-0!  rounded-none! bg-transparent!"
                    >
                        Shop
                    </button>
                </div>
                <div className="max-w-5xl mx-auto p-5 rounded-xl">

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border-b border-gray-200 pb-4"
                            >
                                {/* Question Row */}
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex justify-between items-center text-left bg-transparent! text-[var(--clr-neutral-1000)] p-0!"
                                >
                                    <span className="text-[20px] font-medium text-gray-800">
                                        {faq.question}
                                    </span>
                                    {openIndex === index ? (
                                        <FiChevronUp className="text-xl text-gray-600" />
                                    ) : (
                                        <FiChevronDown className="text-xl text-gray-600" />
                                    )}
                                </button>

                                {/* Answer */}
                                {openIndex === index && (
                                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <AppSection />
        </main>
    );
}
