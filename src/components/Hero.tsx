import hero from './../assets/images/illustration-hero.svg'

function Hero() {

    return (
        <section className="hero flex flex-col md:flex-row h-full py-[50px]">
            <div className="hero__info w-full md:w-1/2 flex flex-col justify-center p-10 md:p-0 md:pl-[150px] gap-6 order-2 md:order-1 text-center md:text-start">
                <h1 className="hero__title text-4xl font-medium">A Simple Bookmark Manager</h1>
                <p className="hero__info">A clean and simple interface to organize your favourite websites. Open a new
                    browser tab and see your sites load instantly. Try it for free.</p>
                <div className='hero__buttons flex flew-row gap-4 mx-auto md:mx-0'>
                    <button className='hero__chrome cursor-pointer border hover:bg-white hover:border-[var(--Blue-600)] hover:text-[var(--Blue-600)] shadow-lg text-base md:text-xs text-white rounded-md px-6 py-3 bg-[var(--Blue-600)]'>Get it on Chrome</button>
                    <button className='hero__firefox cursor-pointer border hover:bg-white hover:border-gray-950 hover:text-gray-950 shadow-lg text-base md:border-[var(--Grey-50)] md:text-xs text-gray-950 rounded-md px-6 py-3 bg-[var(--Grey-50)]'>Get it on Firefox</button>
                </div>
            </div>
            <div className="hero__img w-full md:w-1/2 relative order-1 md:order-2">
                <img src={hero} alt="A hero image" className="relative z-10"/>
                <div className="absolute bottom-0 right-0 h-[200px] md:h-[400px] w-2/3 bg-[var(--Blue-600)] z-0 rounded-l-[150px]" />
            </div>
        </section>
    )
}

export default Hero
