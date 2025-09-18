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
        <section className="flex flex-col gap-5 h-full py-[50px]">
            <div className="carousel text-center">
                <h2 className="text-3xl font-medium">Download the extension</h2>
            </div>

            <div className="carousel__info text-center w-3/4 md:w-3/7 mx-auto">
                <p>
                    We’ve got more browsers in the pipeline. Please do let us know if you’ve
                    got a favourite you’d like us to prioritize.
                </p>
            </div>

            {/* Cards */}
            <div className="cards relative flex justify-center gap-10 flex-wrap mt-10">
                {cards.map((card, index) => {
                    const offset = 20 * index;

                    return (
                        <div
                            key={index}
                            style={{ transform: `translateY(${offset}px)` }}
                            className="card bg-white shadow-lg rounded-lg text-center w-[300px] h-auto pb-5"
                        >
                            <img src={card.mobile} alt={card.title} className="mx-auto my-6" />
                            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                            <p className="text-gray-600 mb-4">{card.content}</p>
                            <img src={dots} alt="" className="my-4" />
                            <button className="cursor-pointer border hover:bg-white hover:border-[var(--Blue-600)] hover:text-[var(--Blue-600)] shadow-lg text-base md:text-xs text-white rounded-md px-6 py-3 bg-[var(--Blue-600)]">
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
