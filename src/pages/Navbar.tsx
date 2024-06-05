import { Socials } from "./../constants/data";
import React from "react";
import NavLogo from "./../images/NavLogo.png"
import USA from "./../images/america_flag.png";
import SPAIN from "./../images/spain_flag.png";
import KURDISTAN from "./../images/kurdistan_flag.png";
import { Translate } from "../Translation";
const Navbar = () => {
  const ChangeTranslate = (to)=>{
    localStorage.setItem("Translate", to);
    window.location.reload();
  }
  return (
    <div>
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px] nav">
        
          <a href="/"
            className="h-auto w-auto sm:w-full flex flex-row items-center"
          >
            <img
              src={NavLogo}
              alt="logo"
              width={70}
              height={70}
              className="cursor-pointer hover:animate-slowspin rounded"
            />

            <span className="font-bold ml-[10px] md:block text-gray-300">
              Green House South
            </span>
          </a>
          <div className="w-[600px] h-full flex flex-row items-center justify-between md:mr-20 none-mobile">
            <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
              <a href="/Jobs" className="cursor-pointer">
                {Translate("Jobs")}
              </a>
              <a href="#services" className="cursor-pointer">
                {Translate("WorkForce")}
              </a>
              <a href="https://www.green-house-recruitment.com" className="cursor-pointer">
                {Translate("AlreadyCandiate")}
              </a>
              <a href="/Contact" className="cursor-pointer">
                {Translate("ContactUs")}
              </a>
              <a href="/About" className="cursor-pointer">
                {Translate("AboutUs")}
              </a>
            </div>
          </div>
          <button className="mobile text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">

          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
          </svg>

          </button>
        <div className="flex flex-row gap-5 none-mobile">
            <img
              src={USA}
              alt="USA - English"
              width={24}
              height={24}
              onClick={()=>{ChangeTranslate("en")}}
            />
            <img
              src={SPAIN}
              alt="Spain - Spanish"
              width={24}
              height={24}
              onClick={()=>{ChangeTranslate("sp")}}
            />
            <img
              src={KURDISTAN}
              alt="Kurdistan - Kurdish(Sorani)"
              width={24}
              height={24}
              onClick={()=>{ChangeTranslate("ku")}}
            />
        </div>
      </div>
    </div>
         <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
              <h5 id="offcanvasRightLabel" className="text-4xl">Menu</h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                        <div className="w-auto mobile">
                        <div className="flex flex-column items-start justify-between w-full h-full text-black">
                          <a href="/Jobs" className="cursor-pointer h-[40px]">
                            Jobs
                          </a>
                          <a href="#services" className="cursor-pointer h-[40px]">
                            Our Services
                          </a>
                          <a href="https://www.green-house-recruitment.com" className="cursor-pointer h-[40px]">
                            Already a candidate
                          </a>
                          <a href="/Contact" className="cursor-pointer h-[40px]">
                            Contact us
                          </a>
                          <a href="/About" className="cursor-pointer h-[40px]">
                            About us
                          </a>
                        </div>
                      </div>
            </div>
          </div>
    </div>
  );
};

export default Navbar;
