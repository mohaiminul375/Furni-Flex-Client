import React from "react";
import logo from "../../../src/assets/icon.png";
import { Link } from "react-router-dom";
import social from '../../../src/assets/social icons.png'
import us_flag from "../../../src/assets/us-flag.png"
const Footer = () => {
  return (
    <footer className="mt-20 bg-[#0E0E0E] px-10 py-10 text-white">
      <section className="grid md:grid-cols-4">
        {/* logo */}
        <div>
          <div className=" flex items-center justify-start gap-2">
            <img src={logo} alt="logo" className="w-7" />
            <h1 className="md:text-2xl font-bold text-white">
              Furni<span className="text-[#1E99F5]">Flex</span>
            </h1>
          </div>
        </div>

        <div className="text-left">
          <h3 className="font-bold text-xl mb-5">About Us</h3>
          <div className="flex flex-col justify-center items-start space-y-2">
            <Link className="text-[#81859F]" to="/">
              Master Plan
            </Link>
            <Link className="text-[#81859F]" to="/">
              Jobs
            </Link>
            <Link className="text-[#81859F]" to="/">
              Invest
            </Link>
            <Link className="text-[#81859F]" to="/">
              Pressroom
            </Link>
            <Link className="text-[#81859F]" to="/">
              Blog
            </Link>
            <Link className="text-[#81859F]" to="/">
              Contact
            </Link>
          </div>
        </div>
        <div className="text-left">
          <h3 className="font-bold text-xl mb-5">Explore EEvE</h3>
          <div className="flex flex-col justify-center items-start space-y-2">
            <Link className="text-[#81859F]" to="/">
              Unlock My Robot Power
            </Link>
            <Link className="text-[#81859F]" to="/">
              Starlight
            </Link>
            <Link className="text-[#81859F]" to="/">
              Robot Platform
            </Link>
            <Link className="text-[#81859F]" to="/">
              EEVE Roadmap
            </Link>
          </div>
        </div>
        <div className="text-left">
          <h3 className="font-bold text-xl mb-5">Community&Support</h3>
          <div className="flex flex-col justify-center items-start space-y-2">
            <Link className="text-[#81859F]" to="/">
              Willow X Community
            </Link>
            <Link className="text-[#81859F]" to="/">
              Developer & Marketer Access
            </Link>
            <Link className="text-[#81859F]" to="/">
              Special Case
            </Link>
            <Link className="text-[#81859F]" to="/">
              EEVE Roadmap
            </Link>
          </div>
        </div>
      </section>
      <hr className="my-5"/>
      <section className="">
        <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-0">
            {/*left */}
            <div>
                 <img src={social} alt="" />
            </div>
            {/* middle */}
            <div className="flex flex-col md:flex-row justify-between gap-5 text-[#81859F]">
               <p>March22 Recap</p>
               <p>Private Policy</p>
               <p>General Terms</p>
               <p>Contacts
               </p>
            </div>
            {/* right */}
            <div className="text-[#81859F]">
                <p className="flex items-center gap-1"><img src={us_flag} alt='us-flag' />United State(English)</p>
            </div>
        </div>
        <p className="md:text-center mt-5 text-[#81859F]">EEVE © 2024. All rights reserved.</p>
      </section>
    </footer>
  );
};

export default Footer;
