import React from "react";
import introImg1 from "../../assets/about/introImg1.svg";
import introImg2 from "../../assets/about/introImg2.svg";
import introImg3 from "../../assets/about/introImg3.svg";
import categoryIcon1 from "../../assets/about/categoryIcon1.svg";
import categoryIcon2 from "../../assets/about/categoryIcon2.svg";
import categoryIcon3 from "../../assets/about/categoryIcon3.svg";
import playCircle from "../../assets/about/playCircle.svg";
import facebook from "../../assets/about/facebook.svg";
import instagram from "../../assets/about/instagram.svg";
import twitter from "../../assets/about/twitter.svg";

import teamMemberImage from "../../assets/about/teamMemberImage.svg";
import { useScroll } from "../animation/useScroll";
import {
  downAnimation,
  leftAnimation,
  rightAnimation,
  upAnimation,
  zoomAnimation,
} from "../animation/animation";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className=" md:mt-[70%] xl:mt-20   pt-16" id="about">
      <Intro />
      <IntroCards />
      <AboutUs />
      <AboutCategory />
      <Category />
      <SelflessTeam />
    </div>
  );
};

// ****** Intro *******

const Intro = () => {
  const [element, controls] = useScroll();
  return (
    <motion.div
      className="py-20 px-4 xl:py-20 xl:px-20  relative"
      ref={element}
      variants={zoomAnimation}
      animate={controls}
      transition={{
        delay: 0.02,
        type: "tween",
        duration: 0.8,
      }}
    >
      <p className="text-center text-[32px] xl:text-[36px] font-bold mb-5">
        Be The <span className="text-primary">Change</span>{" "}
      </p>
      <p className="text-center text-[14px] xl:text-[24px] text-clr-0-0-50">
        Eu viverra erat fusce tortor cum libero, pharetra. Nunc cursus cursus
        odio convallis aliquam in nunc. Commodo ultrices massa urna gravida
        interdum fringilla massa cum.
      </p>
    </motion.div>
  );
};
// ****** Intro *******
// ****** IntroCards *******

const IntroCards = () => {
  const introCardArray = [
    {
      id: 1,
      icon: introImg1,
      text: "Help",
      desc: "Mattis et aliquam fermentum sed sagittis eu elit mauris. Nisl eros velneque vitae lorem molestie.",
      active: false,
    },
    {
      id: 2,
      icon: introImg2,
      text: "Donation",
      desc: "Mattis et aliquam fermentum sed sagittis eu elit mauris. Nisl eros velneque vitae lorem molestie.",
      active: true,
    },
    {
      id: 3,
      icon: introImg3,
      text: "Volunteer",
      desc: "Mattis et aliquam fermentum sed sagittis eu elit mauris. Nisl eros velneque vitae lorem molestie.",
      active: false,
    },
  ];
  return (
    <div className="xl:flex xl:justify-evenly">
      {introCardArray.map(({ id, icon, text, desc, active }) => (
        <IntroCard
          key={id}
          icon={icon}
          text={text}
          desc={desc}
          active={active}
        />
      ))}
    </div>
  );
};

const IntroCard = ({ icon, text, desc, active }) => {
  const [element, controls] = useScroll();
  return (
    <motion.div
      className={`flex flex-col justify-between items-center   relative mx-auto mb-20 xl:my-0 w-[90%] xl:w-[330px] h-[350px] p-5 text-center rounded-[30px]  ${
        active ? "bg-primary" : "bg-clr-205-79-50-0.05 "
      }`}
      ref={element}
      variants={zoomAnimation}
      animate={controls}
      transition={{
        delay: 0.02,
        type: "tween",
        duration: 0.8,
      }}
    >
      <img src={icon} alt="" className="mx-auto" />
      <p
        className={`text-[24px] bold ${
          active ? "text-white" : "text-primary"
        } `}
      >
        {text}
      </p>
      <p className={`text-[14px] ${active ? "text-white" : "text-clr-0-0-50"}`}>
        {desc}
      </p>
      <button
        className={`inline px-14 py-3 text-[16px]   rounded-[30px] ${
          active
            ? "bg-white text-primary"
            : "text-primary border border-primary"
        } `}
      >
        Learn More
      </button>
    </motion.div>
  );
};
// ****** IntroCards *******
// ****** AboutUs *******

const AboutUs = () => {
  const [element, controls] = useScroll();
  return (
    <motion.div className="w-[90%]  h-full xl:px-20  mt-[10%] mx-auto ">
      <motion.p
        className="text-[20px] text-primary mb-3"
        ref={element}
        variants={zoomAnimation}
        animate={controls}
        transition={{
          delay: 0.02,
          type: "tween",
          duration: 0.8,
        }}
      >
        ABOUT US{" "}
      </motion.p>
      <motion.div
        className="xl:flex xl:justify-between xl:items-center"
        ref={element}
        variants={upAnimation}
        animate={controls}
        transition={{
          delay: 0.02,
          type: "tween",
          duration: 0.8,
        }}
      >
        <p className="text-[30px] xl:text-[50px]">
          We are here to support <br />
          <span className="text-primary">vulnerable</span> communities.
        </p>
        <button className="mt-10 xl:mt-0 btn-primary absolute left-[50%] -translate-x-1/2 xl:relative xl:left-0">
          Donate Now
        </button>
      </motion.div>
    </motion.div>
  );
};
// ****** AboutUs *******
// ****** AboutCategory *******

const AboutCategory = () => {
  const [element, controls] = useScroll();
  const categoryListArray = [
    {
      id: 1,
      icon: categoryIcon1,
      text: "CATEGORY 1",
      desc: " Mattis et aliquam fermentum sed sagittis eu elit mauris. Nisl erosvel neque vitae lorem molestie.",
    },
    {
      id: 2,
      icon: categoryIcon2,
      text: "CATEGORY 2",
      desc: " Mattis et aliquam fermentum sed sagittis eu elit mauris. Nisl erosvel neque vitae lorem molestie.",
    },
    {
      id: 3,
      icon: categoryIcon3,
      text: "CATEGORY 3",
      desc: " Mattis et aliquam fermentum sed sagittis eu elit mauris. Nisl erosvel neque vitae lorem molestie.",
    },
  ];
  return (
    <div className="w-[90%] mx-auto xl:px-20 xl:flex justify-between items-center mt-20">
      <div>
        <motion.div
          className="bg-category_about_mobile w-full h-[20rem] xl:w-[736px] xl:h-[531px] xl:bg-category_about  bg-no-repeat"
          ref={element}
          variants={zoomAnimation}
          animate={controls}
          transition={{
            delay: 0.02,
            type: "tween",
            duration: 0.8,
          }}
        ></motion.div>

        <div className="w-[150px] h-[10px] bg-primary ml-[27%] xl:mt-20 rounded-[10px] "></div>
      </div>

      <div className="px-2 xl:px-0 xl:w-[580px]  h-full mt-32">
        {categoryListArray.map(({ id, icon, text, desc }) => (
          <AboutCategoryCard key={id} icon={icon} text={text} desc={desc} />
        ))}
      </div>
    </div>
  );
};
// ****** AboutCategory *******
// ****** AboutCategoryCard *******

const AboutCategoryCard = ({ icon, id, text, desc }) => {
  const [element, controls] = useScroll();
  return (
    <motion.div
      className="xl:flex justify-between pb-10 border-b border-clr-0-0-78 mt-10"
      ref={element}
      variants={upAnimation}
      animate={controls}
      transition={{
        delay: 0.02,
        type: "tween",
        duration: 0.8,
      }}
    >
      <img src={icon} alt="" />
      <div className="xl:ml-8">
        <p className="text-[24px] font-bold mb-1 mt-3 xl:mt-0">{text}</p>
        <p className="text-[16px] text-clr-0-0-50">{desc}</p>
      </div>
    </motion.div>
  );
};
// ****** AboutCategoryCard *******

// ************ Category *************
const Category = () => {
  const [element, controls] = useScroll();

  return (
    <div className="xl:flex justify-between items-center px-4 xl:px-20 my-40">
      <motion.div
        className="h-full xl:w-[640px]  xl:h-[420px] flex flex-col items-start justify-around"
        ref={element}
        variants={leftAnimation}
        animate={controls}
        transition={{
          delay: 0.02,
          type: "tween",
          duration: 0.8,
        }}
      >
        <p className="text-[16px] text-primary ">CATEGORY</p>
        <p className="text-[30px] xl:text-[50px] font-bold mt-4 mb-8">
          Ensuring medicine for all <br className="hidden xl:block" />
          the children.
        </p>
        <p className="text-clr-0-0-53 mb-10">
          Facilisis diam ac augue lorem placerat dignissim feugiat amet orci.
          Urna, ante blandit diam in dui, nulla praesent. Dignissim feugiat amet
          orci. Urna, ante blandit diam in dui, nulla praesent.
        </p>
        <button className="btn-primary">Watch Now</button>
      </motion.div>
      <motion.div
        className="mt-20 xl:mt-0 xl:w-[420px] h-[420px] bg-play_video bg-cover bg-no-repeat flex justify-center items-center"
        ref={element}
        variants={zoomAnimation}
        animate={controls}
        transition={{
          delay: 0.02,
          type: "tween",
          duration: 0.8,
        }}
      >
        <img src={playCircle} alt="" />
      </motion.div>
    </div>
  );
};
// ************ Category *************
// ************ SelflessTeam *************

const SelflessTeam = () => {
  return (
    <div className="px-4 xl:px-20">
      <SelflessIntro />
      <SelflessTeamMember />
    </div>
  );
};

const SelflessIntro = () => {
  const [element, controls] = useScroll();
  return (
    <motion.div
      ref={element}
      variants={zoomAnimation}
      animate={controls}
      transition={{
        delay: 0.02,
        type: "tween",
        duration: 0.8,
      }}
    >
      <p className=" text-[32px] xl:text-[50px] font-bold mb-5">
        Our <span className="text-primary">Selfless</span> Team
      </p>
      <p className="text-clr-0-0-60 xl:text-[26px] text-[16px]">
        Mattis et aliquam fermentum sed sagittis eu elit mauris.
        <br className="hidden xl:block" /> Nisl eros vel neque vitae lorem
        molestie.
      </p>
    </motion.div>
  );
};

const SelflessTeamMember = () => {
  const selflessTeamArray = [
    {
      id: 1,
      name: "Person1",
    },
    {
      id: 2,
      name: "Person2",
    },
    {
      id: 3,
      name: "Person3",
    },
  ];

  return (
    <motion.div className="flex flex-col gap-y-20 xl:flex xl:flex-row justify-around mt-20">
      {selflessTeamArray.map(({ id, name }) => (
        <SelflessTeamCard key={id} name={name} />
      ))}
    </motion.div>
  );
};

const SelflessTeamCard = ({ name }) => {
  const [element, controls] = useScroll();

  return (
    <motion.div
      className="xl:w-[230px] h-auto flex flex-col justify-center items-center"
      ref={element}
      variants={downAnimation}
      animate={controls}
      transition={{
        delay: 0.02,
        type: "tween",
        duration: 0.8,
      }}
    >
      <img src={teamMemberImage} alt="" />
      <p className="text-[28px] mt-10 mb-3 font-bold">{name}</p>
      <p className="text-primary mb-10 text-[18px]">(Volunteer)</p>

      <div className="flex">
        <img src={facebook} alt="" />
        <img src={instagram} alt="" className="mx-6" />
        <img src={twitter} alt="" />
      </div>
    </motion.div>
  );
};

// ************ SelflessTeam *************
export default About;
