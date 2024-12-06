import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; 

const FAQ = () => {
    const faqs = [
        {
            question: "What services do you offer to help businesses succeed?",
            answer: "We offer a wide range of services, including ERP solutions, AI-powered software, and hardware products designed to enhance efficiency and productivity."
        },
        {
            question: "How can your ERP services benefit my business?",
            answer: "Our ERP solutions streamline your business operations, helping you manage resources, finances, and processes more effectively, resulting in improved productivity and cost savings"
        },
        {
            question: "Can you customize your solutions to meet our specific business needs?",
            answer: "Absolutely! We understand that every business is unique. We offer customization options to tailor our solutions to your specific requirements and industry."
        },
        {
            question: "How can your hardware products, like GPS tracking systems, benefit my business?",
            answer: "Our hardware products improve asset management and vehicle tracking, providing real-time data that can enhance safety, security, and operational efficiency."
        },

    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="container mx-auto px-4 pb-32 md:pb-60 pt-20">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Frequently Asked Questions</h2>
            <div className='flex md:flex-row flex-col space-x-0 md:space-x-6 mt-12'>
                <div>
                    <div>
                        <div className='text-3xl rounded-lg md:text-6xl font-bold border-l-4 border-purple-700 md:rounded-xl pl-4'>
                            Implementing <span className='text-purple-700'>AI</span> to make a difference
                        </div>
                    </div>
                    <div className='text-lg my-8'>
                        We aim to integrate AI driven solutions to industries and businesses to Improve efficiency.
                    </div>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white shadow-sm rounded-lg overflow-hidden border-2 border-gray-100">
                            <button
                                className="bg-purple-100 w-full text-left p-4 flex justify-between items-center text-lg font-semibold text-gray-800 focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span>{faq.question}</span>
                                <span className="text-gray-600">
                                    {activeIndex === index ? (
                                        <FaChevronUp className="transition-transform transform rotate-180" />
                                    ) : (
                                        <FaChevronDown className="transition-transform transform rotate-0" />
                                    )}
                                </span>
                            </button>

                            <div
                                className={`transition-all duration-500 overflow-hidden ${activeIndex === index ? 'max-h-[500px]' : 'max-h-0'}`}
                                style={{ transitionProperty: 'max-height' }}
                            >
                                <p className="p-4 text-gray-600">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default FAQ;
