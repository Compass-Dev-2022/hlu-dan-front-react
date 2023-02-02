import React from "react";
import footerLogoImage from "../../assets/footer/logo.svg";
import facebook from "../../assets/footer/facebook.svg";
import instagram from "../../assets/footer/instagram.svg";
import twitter from "../../assets/footer/twitter.svg";

const Footer = () => {
  return (
    <div className="px-5 xl:px-20  w-full ">
      <img
        src={footerLogoImage}
        alt=""
        className="my-[20%] xl:my-[10%] mx-auto"
      />
      <div className="xl:flex justify-between items-center xl:px-20 border-b border-clr-205-79-50-0.03 py-10">
        <Menu />
        <Social />
      </div>
      <FooterCopyRight />
    </div>
  );
};

const Menu = () => {
  return (
    <ul className="grid grid-cols-2 gap-x-10 gap-y-8 xl:flex w-[40%] mx-auto text-primary text-[16px]  justify-between mb-10">
      <li>About</li>
      <li>Donation</li>
      <li>Blog</li>
      <li>Content</li>
    </ul>
  );
};

const Social = () => {
  return (
    <div className="flex w-[40%] xl:w-full mx-auto">
      <img src={facebook} alt="" />
      <img src={instagram} alt="" className="mx-10 xl:mx-10" />
      <img src={twitter} alt="" />
    </div>
  );
};

const FooterCopyRight = () => {
  return (
    <div className="flex flex-col gap-y-10 xl:flex xl:flex-row xl:justify-between my-10 text-clr-0-0-21">
      <p className="text-center text-[14px] whitespace-nowrap">
        &copy; 2022 ABC. All rights reserved.
      </p>
      <ul className="w-full xl:w-[20%] flex justify-between text-[14px]">
        <li className="xl:mr-5">Terms of Service</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  );
};

export default Footer;
