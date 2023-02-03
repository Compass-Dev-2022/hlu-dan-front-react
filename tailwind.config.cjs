/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    clipPath: {
      clipCurved: "circle(100.5% , 50% 0)",
    },
    colors: {
      primary: "hsl(205, 79%, 50%)",
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
      "clr-205-79-50-0.05": "hsl(205, 79%, 50%, 0.05)",
      "clr-205-79-50-0.03": "hsl(205, 79%, 50%, 0.3)",
      "clr-0-0-21": "hsl(0, 0%, 21%)",
      "clr-0-0-50": "hsl(0, 0%, 50%)",
      "clr-0-0-53": "hsl(0, 0%, 53%)",
      "clr-0-0-60": "hsl(0, 0%, 60%)",
      "clr-0-0-78": "hsl(0, 0%, 78%)",
      "clr-0-0-83": "hsl(0, 0%, 83%)",
      "clr-0-0-92": "hsl(0, 0%, 92%)",
      "clr-212-31-24": "hsl(212, 31%, 24%)",
    },
    extend: {
      backgroundImage: {
        form_vector: "url('/src/assets/home/banner/form-vector.svg')",
        form_vector_mobile:
          "url('/src/assets/home/banner/form-vector-mobile.svg')",
        category_about: "url('/src/assets/about/categoryAboutImage.svg')",
        category_about_mobile:
          "url('/src/assets/about/categoryAboutImageMobile.svg')",
        play_video: "url('/src/assets/about/categoryVideo.svg')",
        contact_image: "url('/src/assets/contact/contact.svg')",
        curved_divider: "url('/src/assets/contact/curvedDivider.svg')",
      },
      boxShadow: {
        "bg-shadow-donation": "3px 3px 30px 0px rgba(0,0,0,0.08)",
        "bg-shadow-blog": "3px 2px 26px 20px rgba(0,0,0,0.08)",
        "bg-shadow-header": "0px 2px 61px 0px rgba(0,0,0,0.16)",
      },
    },
  },

  plugins: [require("tailwind-clip-path")],
};
