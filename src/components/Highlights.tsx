import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const highlights = [
  {
    title: "AI-Native RAN",
    description: "Embedding intelligence directly into radio scheduling and network control.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200"
  },
  {
    title: "Private 5G Networks",
    description: "Enterprise wireless infrastructure for Industry 4.0 environments.",
    image: "https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Edge Intelligence",
    description: "Real-time analytics and control systems deployed at the network edge.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200"
  },
  {
    title: "Future 6G Platforms",
    description: "Architectures designed for autonomous next-generation networks.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200"
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
        {highlights.map((item, index) => (
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