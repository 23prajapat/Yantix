import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const highlights = [
  {
    title: "5G for Industries",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232"
  },
  {
    title: "AI Powered Networks",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
  },
  {
    title: "Cloud Infrastructure",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    title: "Private 5G",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  }
];

export default function Highlights() {
  return (
    <section className="w-full py-20 bg-gray-50">

      {/* Title */}
      <div className="px-12 mb-10">
        <h2 className="text-4xl font-bold">Highlights</h2>
      </div>

      {/* Slider */}
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={2.5}
        spaceBetween={30}
        navigation
        autoplay={{ delay: 3000 }}
        loop
        className="px-12"
      >
        {highlights.map((item, index) => (
          <SwiperSlide key={index}>

            <div className="relative overflow-hidden group">

              <img
                src={item.image}
                className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="absolute bottom-8 left-8 text-white text-2xl font-semibold">
                {item.title}
              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}