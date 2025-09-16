import dots from '../assets/images/bg-dots.svg'
const basePath = import.meta.env.BASE_URL + "/images"

function Download() {

    const cards = [
        {
            title: "Add to Chrome",
            content: "Minimum version 62",
            button: "Add & Install Extension",
            mobile: `${basePath}/logo-chrome.svg`,
        },
        {
            title: "Add to Firefox",
            content: "Minimum version 55",
            button: "Add & Install Extension",
            mobile: `${basePath}/logo-firefox.svg`,
        },
        {
            title: "Add to Opera",
            content: "Minimum version 46.",
            button: "Add & Install Extension",
            mobile: `${basePath}/logo-opera.svg`,
        }
    ];

    return (
        <section className="flex flex-col gap-5 h-full mt-[50px]">
            <div className="carousel text-center">
                <h2 className="text-3xl font-medium">Download the extension</h2>
            </div>

            <div className="carousel__info text-center w-3/7 mx-auto">
                <p>
                    We’ve got more browsers in the pipeline. Please do let us know if you’ve
                    got a favourite you’d like us to prioritize.
                </p>
            </div>

            {/* Cards */}
            <div className="cards flex justify-center gap-10 flex-wrap mt-10">
                {cards.map((card, index) => {
                    let marginTopClass = '';
                    if (index === cards.length - 1) {
                        marginTopClass = 'mt-[40px]';
                    } else if (index !== 0) {
                        marginTopClass = 'mt-[20px]';
                    }

                    return (
                        <div
                            key={index}
                            className={`card bg-white shadow-lg rounded-lg text-center ${marginTopClass}`}
                        >
                            <img src={card.mobile} alt={card.title} className="mx-auto my-6" />
                            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                            <p className="text-gray-600 mb-4">{card.content}</p>
                            <img src={dots} alt="" className="my-4" />
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-3">
                                {card.button}
                            </button>
                        </div>
                    );
                })}
            </div>

        </section >
    );
}

export default Download;
