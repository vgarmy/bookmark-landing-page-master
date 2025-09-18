import { useState } from "react";
const basePath = import.meta.env.BASE_URL + "/images"

function Carousel() {
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        {
            title: "Simple Bookmarking",
            content:
                "Bookmark your favorite sites with just one click. Organize them however you like and access them easily.",
            mobile: `${basePath}/illustration-features-tab-1.svg`,
        },
        {
            title: "Speedy Searching",
            content:
                "Our powerful search feature will help you find saved sites in no time. No need to trawl through all of your bookmarks.",
            mobile: `${basePath}/illustration-features-tab-2.svg`,
        },
        {
            title: "Easy Sharing",
            content:
                "Share your bookmarks and collections with others. Create a shareable link and send it to friends and family.",
            mobile: `${basePath}/illustration-features-tab-3.svg`,
        }
    ];

    return (
        <section className="flex flex-col gap-5 h-full mt-[50px]">
            <div className="carousel text-center">
                <h2 className="text-3xl font-medium">Features</h2>
            </div>

            <div className="carousel__info text-center w-3/4 md:w-3/7 mx-auto">
                <p>
                    Our aim is to make it quick and easy for you to access your favourite
                    websites. Your bookmarks sync between your devices so you can access
                    them on the go.
                </p>
            </div>

            {/* Navigation Links */}
            <div className="carousel__links flex justify-center">
                <div className="flex flex-col md:flex-row space-x-8 border-b border-gray-300">
                    {slides.map((slide, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveSlide(index)}
                            className={`relative pb-4 cursor-pointer transition-colors  ${activeSlide === index
                                ? "text-red-500"
                                : "text-gray-500 hover:text-red-500"
                                }`}
                        >
                            {activeSlide === index && (
                                <span className="text-center md:absolute md:left-0 md:right-0 -bottom-[1px] border-b-2 border-red-500"></span>
                            )}
                            {slide.title}
                        </button>
                    ))}
                </div>
            </div>
            {/* Slides */}
            <div className="carousel__sliders flex flex-col md:flex-row gap-10 py-[90px] items-center justify-center">
                {/* Bild */}
                <div className="relative w-full md:w-1/2 flex items-center justify-center h-[300px] md:h-[450px] pb-[50px]">
                    <img
                        src={slides[activeSlide].mobile}
                        className="carousel__sliders-image relative z-20 max-h-full object-contain"
                    />
                    <div className="absolute bottom-0 left-0 h-[200px] md:h-[350px] w-2/3 bg-[var(--Blue-600)] z-0 rounded-r-[150px]" />
                </div>


                {/* Text */}
                <div className="w-full md:w-1/2 flex flex-col text-center md:text-left justify-center px-4 md:px-0 gap-3">
                    <h3 className="carousel__sliders-title text-2xl mb-3 font-medium">{slides[activeSlide].title}</h3>
                    <p className="carousel__sliders-content text-gray-600 max-w-md">{slides[activeSlide].content}</p>
                    <button
                        className="cursor-pointer inline-block w-auto self-center md:self-start border hover:bg-white hover:border-[var(--Blue-600)] hover:text-[var(--Blue-600)] shadow-lg text-xs text-white rounded-md px-6 py-3 bg-[var(--Blue-600)]"
                    >
                        More info
                    </button>

                </div>
            </div>
        </section>
    );
}

export default Carousel;
