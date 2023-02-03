import React from "react";
import blog1Image from "../../assets/blog/blogImg1.svg";
import blog2Image from "../../assets/blog/blogImg2.svg";
import forwardArrow from "../../assets/donation/forwardArrow.svg";
import { motion } from "framer-motion";
import {
  downAnimation,
  zoomAnimation,
} from "../animation/animation";
import { useScroll } from "../animation/useScroll";

const Blog = () => {
  return (
    <div className="px-5 xl:px-20  py-40" id="blog">
      <Intro />

      <BlogLists />
    </div>
  );
};

const Intro = () => {
  const [element, controls] = useScroll();

  return (
    <motion.div
      className="xl:p-20 relative mb-20"
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
        Stay Up To <span className="text-primary">Date</span>
      </p>
      <p className="text-center text-[14px] xl:text-[24px] text-clr-0-0-50">
        Mattis et aliquam fermentum sed sagittis eu elit mauris. Nisl
        <br /> eros vel neque vitae lorem molestie.
      </p>
    </motion.div>
  );
};

const BlogLists = () => {
  const blogListsArray = [
    {
      id: 1,
      blog_name: "Category",
      blog_desc: "Empower the Kids of Burma",
    },
    {
      id: 2,
      blog_name: "Category",
      blog_desc: "Empower the Kids of Burma",
    },
    {
      id: 3,
      blog_name: "Category",
      blog_desc: "Empower the Kids of Burma",
    },
    {
      id: 4,
      blog_name: "Category",
      blog_desc: "Empower the Kids of Burma",
    },
    {
      id: 5,
      blog_name: "Category",
      blog_desc: "Empower the Kids of Burma",
    },
    {
      id: 6,
      blog_name: "Category",
      blog_desc: "Empower the Kids of Burma",
    },
  ];

  return (
    <div className="xl:w-[80%] mx-auto">
      <FirstBlog />
      <div className="grid grid_cols_1 xl:grid-cols-[1fr_1fr_1fr]  w-full  mx-auto gap-20  justify-items-center mt-20">
        {blogListsArray.map((i, { id, blog_name, blog_desc }) => (
          <BLogCard key={1} blog_name={blog_name} blog_desc={blog_desc} />
        ))}
      </div>
      <SeeMore />
    </div>
  );
};

const FirstBlog = () => {
  const [element, controls] = useScroll();

  return (
    <motion.div
      className="flex flex-col-reverse xl:flex xl:flex-row justify-between items-center xl:h-[321px] "
      ref={element}
      variants={downAnimation}
      animate={controls}
      transition={{
        delay: 0.02,
        type: "tween",
        duration: 0.8,
      }}
    >
      <div className="h-full flex flex-col justify-between items-start w-full xl:w-[470px]">
        <p className="text-[14px] font-bold text-primary">CATEGORY</p>
        <p className="text-[32px] font-bold">
          Ensuring medicine for all the <br className="hidden xl:block" />
          children.
        </p>
        <p className="text-[14px] text-clr-0-0-53 my-8 xl:my-0">
          Facilisis diam ac augue lorem placerat dignissim feugiat amet orci.
          Urna, ante blandit diam in dui, nulla praesent. Dignissim feugiat amet
          orci. Urna,
        </p>
        <button className="px-5 py-2 border border-primary rounded-[30px]  text-primary">
          ReadMore
        </button>
      </div>
      <img src={blog1Image} alt="" className="mb-3" />
    </motion.div>
  );
};

const BLogCard = () => {
  const [element, controls] = useScroll();

  return (
    <motion.div
      className="relative max-w-[250px] shadow-bg-shadow-blog rounded-[5px]"
      ref={element}
      variants={downAnimation}
      animate={controls}
      transition={{
        delay: 0.08,
        type: "tween",
        duration: 0.8,
      }}
    >
      <img src={blog2Image} alt="" className="rounded-t-[5px]" />
      <div>
        <p className="ml-3 my-3 text-[8px]">CATEGORY</p>
        <p className="ml-3 mb-5 text-[18px] text-primary">
          Empower the Kids of Burmagdsgsdg
        </p>
      </div>
    </motion.div>
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

export default Blog;
