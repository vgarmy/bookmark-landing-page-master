import logo from '../assets/images/logo-bookmark-footer.svg';
import facebook from '../assets/images/icon-facebook.svg';
import twitter from '../assets/images/icon-twitter.svg';

function Footer() {



    return (
<footer className="flex flex-col md:flex-row items-center gap-10 py-[40px] md:py-[30px] md:px-[165px] bg-[var(--Blue-950)] w-full">
  {/* Logo */}
  <img src={logo} alt="The Bookmark logo" />

  {/* Navigation */}
  <ul className="flex flex-col md:flex-row gap-10 uppercase text-xs text-white items-center mt-1">
    <li className="cursor-pointer hover:text-[var(--Red-400)]">Features</li>
    <li className="cursor-pointer hover:text-[var(--Red-400)]">Pricing</li>
    <li className="cursor-pointer hover:text-[var(--Red-400)]">Contact</li>
  </ul>

  {/* Social icons */}
  <ul className="flex flex-row gap-12 items-center mx-auto md:ml-auto">
    <li className="cursor-pointer">
      <img src={facebook} alt="Facebook link" className="h-5" />
    </li>
    <li className="cursor-pointer">
      <img src={twitter} alt="Twitter link" className="h-5" />
    </li>
  </ul>
</footer>





    )
}

export default Footer
