import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import manufacturingIndusty from "../assets/Manufacturing Industry.jpg";
import telecomIndustry from "../assets/Telecom Industry.jpg";
import energyIndustry from "../assets/Energy Industry.jpg";
import logisticsIndusty from "../assets/Logistics Industry.jpg";

import "swiper/css";
import "swiper/css/navigation";

const industries = [
  {
    title: "Manufacturing",
    description: "Optimizing production lines and automation with intelligent network systems.",
    image: manufacturingIndusty
  },
  {
    title: "Telecom",
    description: "Enhancing wireless connectivity and communications infrastructure.",
    image: telecomIndustry
  },
  {
    title: "Energy",
    description: "Power systems, smart grids and renewable energy network solutions.",
    image: energyIndustry
  },
  {
    title: "Logistics",
    description: "Real‑time logistics, supply chain automation and transport optimization.",
    image: logisticsIndusty
  }
];

export default function Industries() {
  return (
    <section className="w-full py-20 bg-gray-50">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        navigation
        autoplay={{ delay: 3000 }}
        loop
        className="px-12"
        breakpoints={{
          0: {
            slidesPerView: 1, // mobile
          },
          640: {
            slidesPerView: 2, // small tablets
          },
          1024: {
            slidesPerView: 3, // desktop
          },
        }}
      >
        {industries.map((item, index) => (
          <SwiperSlide key={index}

          >

            <div className="relative overflow-hidden group">

              <img
                src={item.image}
                className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="absolute bottom-8 left-8 text-white text-2xl font-semibold">
                {item.title}
                <div className="text-[17px] m-2 ml-0">
                  {item.description}
                </div>
              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}