import { FaFacebook } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { SlSocialDribbble } from 'react-icons/sl';

function Footer() {
  return (
    <>
      <footer
        id="dark-theme"
        className="flex flex-col w-full gap-4 px-8 py-16 bg-[#1f2937]"
      >
        <div className="flex  items-center justify-between gap-8 text-[#ffffffef]">
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <label className="text-xl font-bold">SOLUTIONS</label>
            <ul className="flex flex-col gap-6 ">
              <li>Marketing</li>
              <li>Analytics</li>
              <li>Commerce</li>
              <li>Insights</li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <label className="text-xl font-bold">SUPPORT</label>
            <ul className="flex flex-col gap-6">
              <li>Pricing</li>
              <li>Documentation</li>
              <li>Guides</li>
              <li>API Status</li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <label className="text-xl font-bold">COMPANY</label>
            <ul className="flex flex-col gap-6 ">
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>Partners</li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <label className="text-xl font-bold">SUPPORT</label>
            <ul className="flex flex-col gap-6 ">
              <li>Pricing</li>
              <li>Documentation</li>
              <li>Guides</li>
              <li>API Status</li>
            </ul>
          </div>
          <div>
            <div className="flex flex-col gap-4 xsm:flex-row md:p-0">
              <input
                className="px-4 py-3 text-lg text-black transition-all duration-300 rounded-lg focus:outline-none focus:right-1 "
                placeholder="Enter your email"
                type="text"
              />
              <button className="px-6 py-4 font-semibold bg-[#000] rounded-lg">
                Subscribe
              </button>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <p>SUBSCRIBE TO OUR NEWSLETTER</p>
              <p className="text-gray-300">
                The latest news, article, resources, sent to your inbox weekly
              </p>
            </div>
            <div className="flex gap-6 p-2 mt-4 text-3xl rounded-md social-wrapper">
              <FaFacebook />
              <BsTwitter />
              <FaLinkedin />
              <FaInstagram />
              <IoLogoYoutube />
              <SlSocialDribbble />
            </div>
          </div>
        </div>
        <div className="w-full h-px m-auto bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
      </footer>
    </>
  );
}

export default Footer;
