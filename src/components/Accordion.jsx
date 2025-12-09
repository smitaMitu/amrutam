import React,{useState} from 'react'
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
const Accordion = ({faq}) => {
    const [openIndex, setOpenIndex] = useState(null);
    
        const toggleFaq = (index) => {
            setOpenIndex(openIndex === index ? null : index);
        };
  return (
    <div>
        <div className="space-y-4">
                                {faq.map((faq, index) => (
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
  )
}

export default Accordion