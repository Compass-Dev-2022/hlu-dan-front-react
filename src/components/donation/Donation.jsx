import React, { useState } from "react";
import donationImag1 from "../../assets/donation/donationImage1.svg";
import forwardArrow from "../../assets/donation/forwardArrow.svg";

const Donation = () => {
  return (
    <div className="px-5 xl:px-20">
      <Intro />
      <DonationCategories />
    </div>
  );
};
const Intro = () => {
  return (
    <div className=" pb-20 relative">
      <p className="text-center text-[32px] xl:text-[36px] font-bold mb-5">
        Help us <span className="text-primary">Save</span> the world.
      </p>
      <p className="text-center text-[14px] xl:text-[24px] text-clr-0-0-50">
        Mattis et aliquam fermentum sed sagittis eu elit mauris. Nisl
        <br /> eros vel neque vitae lorem molestie.
      </p>
    </div>
  );
};

const DonationCategories = () => {
  return (
    <div>
      <p className="text-[18px] xl:text-[24px] font-bold">CATEGORIES</p>
      <CategoryMenu />

      <CategoryCards />
      <SeeMore />
    </div>
  );
};

const CategoryMenu = () => {
  const [active, setActive] = useState(1);
  const menuData = [
    {
      id: 1,
      item: "All",
    },
    {
      id: 2,
      item: "Category1",
    },
    {
      id: 3,
      item: "Category2",
    },
    {
      id: 4,
      item: "Category3",
    },
  ];

  let activeDot =
    " before:content-[''] before:absolute before:block before:w-1 before:h-6 xl:before:h-1 before:bg-primary  before:rounded-full before:top-7 before:left-[50%] before:-translate-x-1/2 transition-all ease-in-out delay-[3000]";

  return (
    <ul className="relative w-full overflow-hidden flex  list-none gap-x-[40px] xl:gap-x-[65px]  cursor-pointer mt-8 mb-20 pl-5">
      {menuData.map(({ id, item }) => (
        <li
          key={id}
          className={`${
            id === active ? `text-primary ${activeDot}` : "text-clr-0-0-60"
          } relative`}
          onClick={() => setActive(id)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

const CategoryCards = () => {
  const CategoryCardsArray = [
    {
      id: 1,
      cat_name: "Category",
      cat_desc: "Ensuring medicine for all the children.",
    },
    {
      id: 2,
      cat_name: "Category",
      cat_desc: "Ensuring medicine for all the children.",
    },
    {
      id: 3,
      cat_name: "Category",
      cat_desc: "Ensuring medicine for all the children.",
    },
    {
      id: 4,
      cat_name: "Category",
      cat_desc: "Ensuring medicine for all the children.",
    },
    {
      id: 5,
      cat_name: "Category",
      cat_desc: "Ensuring medicine for all the children.",
    },
    {
      id: 6,
      cat_name: "Category",
      cat_desc: "Ensuring medicine for all the children.",
    },
    {
      id: 7,
      cat_name: "Category",
      cat_desc: "Ensuring medicine for all the children.",
    },
    {
      id: 8,
      cat_name: "Category",
      cat_desc: "Ensuring medicine for all the children.",
    },
    {
      id: 9,
      cat_name: "Category",
      cat_desc: "Ensuring medicine for all the children.",
    },
    {
      id: 10,
      cat_name: "Category",
      cat_desc: "Ensuring medicine for all the children.",
    },
    {
      id: 11,
      cat_name: "Category",
      cat_desc: "Ensuring medicine for all the children.",
    },
    {
      id: 12,
      cat_name: "Category",
      cat_desc: "Ensuring medicine for all the children.",
    },
  ];
  return (
    <div className="grid grid_cols_[1fr] xl:grid-cols-[1fr_1fr_1fr]  w-[95%] py mx-auto gap-20  justify-items-center">
      {CategoryCardsArray.map(({ id, cat_name, cat_desc }) => (
        <CategoryCard key={id} cat_name={cat_name} cat_desc={cat_desc} />
      ))}
    </div>
  );
};

const CategoryCard = ({ cat_name, cat_desc }) => {
  return (
    <div className=" w-[320px] bg-white rounded-[20px] shadow-bg-shadow-donation p-5 ">
      <img src={donationImag1} alt="" />
      <p className="text-[12px] text-clr-0-0-60 my-4">{cat_name}</p>
      <p className="text-[18px] font-bold">{cat_desc}</p>

      <div className="my-4 mb-10 flex items-center">
        <div class="w-full h-[6px] bg-clr-205-79-50-0.03 rounded-full">
          <div class="w-[50%] h-full text-center text-xs text-white bg-primary rounded-full"></div>
        </div>
        <p className="text-clr-0-0-60 ml-2"> 50%</p>
      </div>

      <div className="flex justify-center ">
        <button className="px-5 py-2 border border-primary rounded-[30px] mx-auto text-primary">
          Donate Now
        </button>
      </div>
    </div>
  );
};

const SeeMore = () => {
  return (
    <div className="flex absolute right-7 xl:right-20 my-20">
      <p className="text-primary font-bold text-[18px] mr-3">See More</p>
      <img src={forwardArrow} alt="" />
    </div>
  );
};
export default Donation;
