import React, { useEffect, useState } from "react";
import logoImage from "../../assets/home/logo.svg";
import circle1 from "../../assets/home/banner/circle1.svg";
import circle2 from "../../assets/home/banner/circle2.svg";
import circle3 from "../../assets/home/banner/circle3.svg";
import { FiAlignLeft, FiX } from "react-icons/fi";
import "./Home.css";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import {
  leftAnimation,
  zoomAnimation,
} from "../animation/animation";
import { useScroll } from "../animation/useScroll";

const menuData = [
  {
    id: 1,
    item: "Home",
    link_id: "home",
  },
  {
    id: 2,
    item: "About",
    link_id: "about",
  },
  {
    id: 3,
    item: "Donation",
    link_id: "donation",
  },
  {
    id: 4,
    item: "Blog",
    link_id: "blog",
  },
  {
    id: 5,
    item: "Contact",
    link_id: "contact",
  },
];
const Home = ({ currentHeight }) => {
  const [menuActive, setMenuActive] = useState(false);
  const handleMenuActive = () => {
    setMenuActive(!menuActive);
  };
  return (
    <section
      className="relative min-h-[140vh]   xl:min-h-screen w-full  "
      id="home"
    >
      <Header
        handleMenuActive={handleMenuActive}
        currentHeight={currentHeight}
      />
      <Banner />
      <HumbagerMenuItems
        menuActive={menuActive}
        handleMenuActive={handleMenuActive}
      />{" "}
    </section>
  );
};
// ******************* Header ******************

const Header = ({ handleMenuActive, currentHeight }) => {
  return (
    <div className="bg-white fixed w-full top-0 left-0 py-2 px-5 xl:px-20 flex justify-between items-center z-[100] shadow-bg-shadow-header">
      <Logo />
      <Menu currentHeight={currentHeight} />
      <Profile />
      <HumbagerMenu handleMenuActive={handleMenuActive} />
    </div>
  );
};

const Logo = () => {
  const [element, controls] = useScroll();
  return (
    <motion.img
      src={logoImage}
      ref={element}
      variants={zoomAnimation}
      animate={controls}
      transition={{
        delay: 0.02,
        type: "tween",
        duration: 0.5,
      }}
    />
  );
};

const Menu = () => {


  let activeDot =
    " before:content-[''] before:absolute before:block before:w-1 before:h-1 before:bg-primary  before:rounded-full before:top-7 before:left-[50%] before:-translate-x-1/2 transition-all ease-in-out delay-[3000] text-primary relative";

  return (
    <ul className="hidden  xl:flex items-center justify-center list-none gap-x-[65px]  cursor-pointer">
      {menuData.map(({ id, item, link_id }) => (
        <Link activeClass={activeDot} smooth spy to={link_id}>
          <li
            key={id}
            onClick={() => setActive(id)}
          >
            {item}
          </li>
        </Link>
      ))}
    </ul>
  );
};

const Profile = () => {
  const button = " px-6 py-1 border border-primary rounded-[24px]";
  return (
    <div>
      <button className={`hidden xl:inline-block ${button} text-primary mr-5`}>
        SignIn
      </button>
      <button
        className={`hidden xl:inline-block ${button} bg-primary  text-white`}
      >
        SignUp
      </button>
    </div>
  );
};

const HumbagerMenu = ({ handleMenuActive }) => {
  return (
    <div
      className="xl:hidden w-[45px] h-[45px] bg-primary text-white grid place-items-center rounded-full text-[24px] cursor-pointer"
      onClick={handleMenuActive}
    >
      <FiAlignLeft />
    </div>
  );
};

const HumbagerMenuItems = ({ menuActive, handleMenuActive }) => {
  return (
    <div
      className={`fixed w-screen h-screen xl:hidden  bg-primary z-[800] flex justify-center items-center transition-all ease-in duration-300 cursor-pointer    ${
        menuActive ? "" : "-translate-y-[100%]  "
      }`}
    >
      <div
        className="xl:hidden w-[45px] h-[45px] bg-white text-primary grid place-items-center rounded-full text-[24px] border absolute right-10 top-5"
        onClick={handleMenuActive}
      >
        <FiX />
      </div>
      <ul className="flex flex-col gap-y-8 ">
        {menuData.map(({ id, item, link_id }) => (
          <Link activeClass="activeDot" smooth spy to={link_id}>
            <li
              className="text-center text-[40px] text-white "
              onClick={handleMenuActive}
            >
              {item}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

// ******************* Header ******************

// *************** Banner **********

const Banner = () => {
  const [element, controls] = useScroll();
  const button =
    "px-8 py-3 xl:px-10  xl:py-3 border border-primary rounded-[24px]";

  return (
    <div className="h-full">
      <div className="absolute top-32 xl:top-0 h-full w-full xl:flex xl:flex-row xl:justify-between items-center px-0 xl:px-20 z-0 overflow-hidden  ">
        <motion.div
          className="w-full  xl:max-w-[520px] px-4 xl:px-0 mb-20 xl:mb-0 "
          ref={element}
          variants={leftAnimation}
          animate={controls}
          transition={{
            delay: 0.02,
            type: "tween",
            duration: 0.8,
          }}
        >
          <p className="text-[40px]  xl:text-[60px] text-center xl:text-left text-black font-bold">
            Donating is about
            <br /> making
            <br /> a <span className="text-primary">Difference.</span>
          </p>
          <p className="text-[14px] xl:text-[24px] text-center xl:text-left py-10 text-clr-0-0-50">
            Eu viverra erat fusce tortor cum libero, pharetra. Nunc cursus
            cursus odio convallis aliquam in nunc. Commodo ultrices massa urna
            gravida interdum fringilla massa cum.
          </p>

          <button
            className={`${button} bg-primary text-white absolute left-1/2 xl:left-0  -translate-x-1/2 xl:translate-x-0 xl:relative text-[1rem]`}
          >
            Donate Now
          </button>
        </motion.div>
        <motion.div
          className="bg-form_vector_mobile    xl:bg-form_vector  w-full h-[33rem] md:h-[64rem]  xl:pt-0  xl:w-[717px] xl:h-[675px] bg-no-repeat bg-cover flex items-center justify-center  "
          ref={element}
          variants={zoomAnimation}
          animate={controls}
          transition={{
            delay: 0.02,
            type: "tween",
            duration: 0.8,
          }}
        >
          <DonationForm />
        </motion.div>
      </div>
      <motion.img
        src={circle3}
        alt=""
        className=" absolute top-20  "
        ref={element}
        variants={zoomAnimation}
        animate={controls}
        transition={{
          delay: 0.02,
          type: "tween",
          duration: 0.3,
        }}
      />
      <motion.img
        src={circle1}
        alt=""
        className="absolute right-0 bottom-[58%]  w-[2.75rem] h-[2.75rem] xl:left-0 xl:bottom-0 xl:w-[10rem] xl:h-[10rem]"
        ref={element}
        variants={zoomAnimation}
        animate={controls}
        transition={{
          delay: 0.02,
          type: "tween",
          duration: 0.3,
        }}
      />
      <motion.img
        src={circle2}
        alt=""
        className="absolute bottom-[15.188rem] left-0 xl:bottom-0 xl:left-[50%]"
        ref={element}
        variants={zoomAnimation}
        animate={controls}
        transition={{
          delay: 0.02,
          type: "tween",
          duration: 0.3,
        }}
      />
    </div>
  );
};

const DonationForm = () => {
  const [element, controls] = useScroll();
  const RadioArray = [
    {
      id: 1,
      value: 500,
      text: "$500",
    },
    {
      id: 2,
      value: 1000,
      text: "$1000",
    },
    {
      id: 3,
      value: 2000,
      text: "$2000",
    },
    {
      id: 4,
      value: 5000,
      text: "$5000",
    },
    {
      id: 5,
      value: 10000,
      text: "$10000",
    },
    {
      id: 6,
      value: 50000,
      text: "$50000",
    },
  ];
  return (
    <motion.div
      className="w-[80%]    xl:h-[480px] xl:w-[370px] relative bg-white rounded-[12px] px-5 xl:flex flex-col justify-evenly py-5"
      ref={element}
      variants={zoomAnimation}
      animate={controls}
      transition={{
        delay: 0.05,
        type: "tween",
        duration: 2,
      }}
    >
      <p className="text-black text-[1.228rem]  xl:text-[24px] text-center">
        Donation Amount
      </p>
      <div className="donate_form_weekly_one_time">
        <input type="radio" id="radio1" name="radios" value="all" checked />
        <label htmlFor="radio1" className="px-[31px] py-[10px] xl:px-[53px]  ">
          One-time
        </label>
        <input type="radio" id="radio2" name="radios" value="false" />
        <label htmlFor="radio2" className="px-[31px] py-[10px] xl:px-[53px] ">
          Weekly
        </label>
      </div>
      <form
        action=""
        className="w-full grid  grid-cols-[80px_80px_80px] md:grid-cols-[100px_100px_100px] xl:grid-cols-[100px_100px_100px] gap-y-4 gap-x-2"
      >
        {RadioArray.map(({ id, value, text }) => (
          <div key={id} className="w-full">
            <input
              type="radio"
              name="donate_price"
              className="w-full"
              id={id}
              value={value}
            />
            <label
              htmlFor={id}
              className="lbl-radio price border border-clr-0-0-83 py-2 block text-center text-clr-0-0-60 rounded-[5px] checked:text-white cursor-pointer"
            >
              {text}
            </label>
          </div>
        ))}
      </form>

      <div className="custom_donate_input">
        <input
          type="text"
          name="donate_price"
          id="1"
          placeholder="Custom Amount"
        />
      </div>
      <div className="donate_now_button">
        <button>DONATE NOW</button>
      </div>
    </motion.div>
  );
};

// *************** Banner **********

export default Home;
