import { useState } from "react";
import arrow from "../assets/images/icon-arrow.svg";
import redarrow from "../assets/images/icon-arrow-red.svg";

type FAQItem = {
    question: string;
    answer: string;
};

function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faq: FAQItem[] = [
        {
            question: "What is Bookmark?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
        },
        {
            question: "How can I request a new browser?",
            answer:
                "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies.",
        },
        {
            question: "Is there a mobile app?",
            answer:
                "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus.",
        },
        {
            question: "What about other Chromium browsers?",
            answer:
                "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
        },
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="flex flex-col gap-8 py-[100px]">
            <div className="text-center">
                <h2 className="text-3xl font-medium">Frequently Asked Questions</h2>
            </div>

            <div className="text-center w-3/4 md:w-2/4 mx-auto">
                <p className="text-gray-500">
                    Here are some of our FAQs. If you have any other questions you’d like
                    answered please feel free to email us.
                </p>
            </div>

            <div className="w-4/5 md:w-2/4 mx-auto">
                {faq.map((item: FAQItem, index: number) => (
                    <div
                        key={index}
                        className="border-b border-gray-300 py-4 cursor-pointer"
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="flex items-center justify-between">
                            {/* Question on the left */}
                            <span className="font-medium text-gray-800 hover:text-[var(--Red-400)] cursor-pointer">{item.question}</span>

                            {/* Arrow on the right */}
                            <img
                                src={openIndex === index ? redarrow : arrow} // swap SVGs
                                alt="arrow"
                                className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : "rotate-0"
                                    }`}
                            />
                        </div>

                        {/* Answer */}
                        <div
                            className={`mt-3 text-gray-500 text-sm transition-all duration-500 overflow-hidden ${openIndex === index
                                    ? "max-h-40 opacity-100"
                                    : "max-h-0 opacity-0"
                                }`}
                        >
                            {item.answer}
                        </div>
                    </div>
                ))}
            </div>

                <button
                    className="cursor-pointer inline-block w-auto mx-auto border hover:bg-white hover:border-[var(--Blue-600)] hover:text-[var(--Blue-600)] shadow-lg text-xs text-white rounded-md px-6 py-3 bg-[var(--Blue-600)]"
                >
                    More info
                </button>

        </section>
    );
}

export default FAQ;
