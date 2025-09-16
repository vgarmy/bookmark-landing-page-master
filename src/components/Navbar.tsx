import { useState } from 'react';
import logo from '../assets/images/logo-bookmark.svg';
import whitelogo from '../assets/images/logo-bookmark-white.svg';
import hamburger from '../assets/images/icon-hamburger.svg';
import close from '../assets/images/icon-close.svg';
import facebook from '../assets/images/icon-facebook.svg';
import twitter from '../assets/images/icon-twitter.svg';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navigation py-[40px] lg:py-[55px] px-[32px] lg:px-[150px] w-full flex items-center justify-between">
            {/* Logo */}
            <div className="navigation__logo z-50">
                <img
                    src={isOpen ? whitelogo : logo }
                    alt="The Bookmark logo"
                    className="transition duration-300"
                />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block navigation__nav">
                <ul className="navigation__items flex flex-row gap-10 uppercase items-center font-medium">
                    <li className="navigation__item text-xs hover:text-[var(--Red-400)] cursor-pointer">Features</li>
                    <li className="navigation__item text-xs hover:text-[var(--Red-400)] cursor-pointer">Pricing</li>
                    <li className="navigation__item text-xs hover:text-[var(--Red-400)] cursor-pointer">Contact</li>
                    <li className="navigation__item text-xs">
                        <button className="navigation__button navigation__button--login uppercase border bg-[var(--Red-400)] hover:bg-white hover:text-[var(--Red-400)] text-white px-6 py-2 rounded cursor-pointer hover:border-1 hover:border-[var(--Red-400)]">
                            Login
                        </button>
                    </li>
                </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden relative z-30">
                <button onClick={() => setIsOpen(true)}>
                    <img src={hamburger} alt="Hamburger menu" />
                </button>
            </div>

            {/* Mobile Fullscreen Menu */}
            {isOpen && (
                <div className="navigation__nav fixed inset-0 bg-[var(--Blue-950)]/95 text-white z-40 flex flex-col px-[32px] lg:px-[150px] py-[40px] h-screen">
                    {/* Close Button */}
                    <div className="navigation__button navigation__button--close absolute top-[40px] right-[32px] z-50">
                        <button onClick={() => setIsOpen(false)}>
                            <img src={close} alt="Close menu" />
                        </button>
                    </div>

                    {/* Menu Items */}
                    <ul className="navigation__items space-y-8 text-xl uppercase font-medium text-center mt-[100px]">
                        <li className="navigation__item cursor-pointer">Features</li>
                        <li className="navigation__item cursor-pointer">Pricing</li>
                        <li className="navigation__item cursor-pointer">Contact</li>
                        <li className="navigation__item">
                            <button className="navigation__button navigation__button--login px-[120px] bg-[var(--Blue-950)] border border-white text-white py-2 rounded-md uppercase">
                                Login
                            </button>
                        </li>
                    </ul>

                    {/* Spacer to push social icons to bottom */}
                    <div className="flex-grow" />

                    {/* Social Icons */}
                    <div className="navigation__social mb-[40px]">
                        <ul className="navigation__social-items flex flex-row gap-12 justify-center">
                            <li className="navigation__social-item cursor-pointer">
                                <img src={facebook} alt="Facebook link" />
                            </li>
                            <li className="navigation__social-item cursor-pointer">
                                <img src={twitter} alt="Twitter link" />
                            </li>
                        </ul>
                    </div>
                </div>
            )}

        </nav>
    );
}

export default Navbar;
