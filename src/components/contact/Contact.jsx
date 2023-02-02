import React from "react";
import contactIcon1 from "../../assets/contact/contact_icon1.svg";
import contactIcon2 from "../../assets/contact/contact_icon2.svg";
import contactIcon3 from "../../assets/contact/contact_icon3.svg";
import contactIcon4 from "../../assets/contact/contact_icon4.svg";
import journey from "../../assets/contact/journey.svg";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="relative">
      <Impact />
      <Journey />
    </div>
  );
};

const Impact = () => {
  const contactArray = [
    {
      id: 1,
      icon: contactIcon1,
      title: "Category1",
      desc: "Mattis et aliquam fermentum sed sagittis eu elit mauris.",
    },
    {
      id: 2,
      icon: contactIcon2,
      title: "Category2",
      desc: "Mattis et aliquam fermentum sed sagittis eu elit mauris.",
    },
    {
      id: 3,
      icon: contactIcon3,
      title: "Category3",
      desc: "Mattis et aliquam fermentum sed sagittis eu elit mauris.",
    },
    {
      id: 4,
      icon: contactIcon4,
      title: "Category4",
      desc: "Mattis et aliquam fermentum sed sagittis eu elit mauris.",
    },
  ];
  return (
    <div className="flex justify-between px-5 xl:px-20 relative">
      <div className=" xl:w-[40rem] xl:h-[40rem] 2xl:w-[46rem] 2xl:h-[48rem] bg-contact-image bg-no-repeat bg-cover "></div>
      <div className="xl:w-[582px]">
        <p className="text-[30px] xl:text-[50px] text-primary">
          Let's make an impact
        </p>
        <p className="text-[18px] text-clr-0-0-60 mt-5">
          Mattis et aliquam fermentum sed sagittis eu elit mauris. Nisl eros vel
          neque vitae lorem molestie.
        </p>
        <div className="grid grid-cols-1 xl:grid-cols-[243px_243px]   mt-10 gap-10">
          {contactArray.map(({ icon, title, desc }) => (
            <div className="grid grid-cols-[50px,200px] ">
              <img src={icon} alt="" className="mt-1" />
              <div>
                <p className="font-bold">{title}</p>
                <p className="text-[12px] text-clr-0-0-60 mt-1">{desc} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Journey = () => {
  return (
    <>
      <div className="relative  xl:py-10 2xl:py-0       h-[70rem] xl:h-[56rem] 2xl:h-[60rem]     flex flex-col xl:flex-row  xl:px-20 mt-10 xl:-mt-[16rem] before:absolute before:bottom-0 before:left-[50%] before:contents-[''] before:w-screen before:h-full before:bg-primary before:rounded-b-full before:origin-bottom before:-translate-x-1/2 before:scale-[1.8] 	xl:before:scale-[1.8] 2xl:before:scale-[4]  overflow-hidden">
        <div className=" z-50 mx-auto w-full xl:w-[1300rem]    xl:flex justify-between items-center">
          <div className="xl:w-[600px] px-5 py-5 xl:py-0 xl:px-0">
            <p className="text-[32px] xl:text-[46px] text-white">
              Be A Part Of Our Journey
            </p>
            <p className="text-[20px] text-clr-0-0-92 mt-8 mb-20">
              Mattis et aliquam fermentum sed sagittis eu elit mauris. Nisl eros
              vel neque vitae lorem molestie.Mattis et aliquam fermentum sed
              sagittis eu elit mauris. Nisl eros vel neque vitae lorem molestie.
            </p>

            <div className="flex">
              <input
                className="py-3 px-6 text-primary placeholder:text-primary xl:w-[400px] rounded-[30px] focus:border-none focus:outline-none"
                placeholder="Enter your email"
              />
              <button className="btn-primary bg-black ml-3 xl:ml-10">
                Submit
              </button>
            </div>
          </div>
          <img
            src={journey}
            alt=""
            className="w-[330px] h-[428px] mt-20 xl:mt-0  mx-auto xl:w-[475.81px] xl:h-[622px] object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;