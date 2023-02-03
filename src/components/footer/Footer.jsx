import React from "react";
import footerLogoImage from "../../assets/footer/logo.svg";
import facebook from "../../assets/footer/facebook.svg";
import instagram from "../../assets/footer/instagram.svg";
import twitter from "../../assets/footer/twitter.svg";
import { motion } from "framer-motion";
import { useScroll } from "../animation/useScroll";
import {
  leftAnimation,
  rightAnimation,
  zoomAnimation,
} from "../animation/animation";

const Footer = () => {
  const [element, controls] = useScroll();

  return (
    <div className="px-5 xl:px-20  w-full overflow-hidden ">
      <motion.img
        ref={element}
        src={footerLogoImage}
        alt=""
        className="my-[20%] xl:my-[10%] mx-auto"
        variants={zoomAnimation}
        animate={controls}
        transition={{
          delay: 0.03,
          type: "tween",
          duration: 0.8,
        }}
      />
      <div className="xl:flex justify-between items-center xl:px-20 border-b border-clr-205-79-50-0.03 py-10  ">
        <Menu element={element} controls={controls} />
        <Social element={element} controls={controls} />
      </div>
      <FooterCopyRight element={element} controls={controls} />
    </div>
  );
};

const Menu = ({ element, controls }) => {
  return (
    <motion.ul
      className="grid grid-cols-2 gap-x-10 gap-y-5 xl:flex w-[40%] mx-auto text-primary text-[16px]  justify-between mb-10 xl:mb-0 items-center "
      ref={element}
      variants={leftAnimation}
      animate={controls}
      transition={{
        delay: 0.02,
        type: "tween",
        duration: 0.8,
      }}
    >
      <li>About</li>
      <li>Donation</li>
      <li>Blog</li>
      <li>Content</li>
    </motion.ul>
  );
};

const Social = ({ element, controls }) => {
  return (
    <motion.div
      className="flex mx-auto  justify-center "
      ref={element}
      variants={rightAnimation}
      animate={controls}
      transition={{
        delay: 0.02,
        type: "tween",
        duration: 0.8,
      }}
    >
      <img src={facebook} alt="" />
      <img src={instagram} alt="" className="mx-10 xl:mx-10" />
      <img src={twitter} alt="" />
    </motion.div>
  );
};

const FooterCopyRight = ({ element, controls }) => {
  return (
    <div className="flex flex-col gap-y-10 xl:flex xl:flex-row xl:justify-between my-10 text-clr-0-0-21">
      <motion.p
        className="text-center text-[14px] whitespace-nowrap"
        ref={element}
        variants={leftAnimation}
        animate={controls}
        transition={{
          delay: 0.04,
          type: "tween",
          duration: 0.8,
        }}
      >
        &copy; 2022 ABC. All rights reserved.
      </motion.p>
      <motion.ul
        className="w-full xl:w-[20%] flex justify-between text-[14px]"
        ref={element}
        variants={rightAnimation}
        animate={controls}
        transition={{
          delay: 0.04,
          type: "tween",
          duration: 0.8,
        }}
      >
        <li className="xl:mr-5">Terms of Service</li>
        <li>Privacy Policy</li>
      </motion.ul>
    </div>
  );
};

export default Footer;
