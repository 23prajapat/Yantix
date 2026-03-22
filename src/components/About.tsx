import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

type AboutProps = {
    name: string;
};

const leadership = [
    {
        name: "Person 1",
        title: "Co-Founder, Head of Hardware Development",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    },
    {
        name: "Person 2",
        title: "Co-Founder, Head of Software Development",
        image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    },
    {
        name: "Person 3",
        title: "Founding Member",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    },
    {
        name: "Person 4",
        title: "Founding Member",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
    }
];
export default function About({ name }: AboutProps) {

    return name === 'Company' ? (
        <div className="px-6 py-12 text-gray-800">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900">
                AI-Native Intelligence for Next-Generation Wireless Networks and Industry 4.0
            </h2>

            {/* Paragraphs */}
            <p className="mb-4 text-lg md:text-xl leading-relaxed">
                Yantix Private Limited is a deep-technology company focused on developing next-generation AI-native wireless and intelligent connectivity systems.
                We design and build advanced solutions across:

                • 5G and emerging 6G technologies
                • AI-driven network optimization
                • RF and wireless systems engineering
                • Edge intelligence and digital twins
                • Smart infrastructure and Industry 4.0 platforms

                Our mission is to transform communication networks and industry systems into autonomous, intelligent ecosystems capable of adapting, optimizing, and evolving in real time.

                By integrating artificial intelligence with advanced wireless engineering, Yantix is redefining how next-generation communication and industrial connectivity infrastructure is designed, deployed, and operated.
            </p>
        </div>
    ) : (
        <div className="px-6 py-12 text-gray-800">
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
                {leadership.map((item, index) => (
                    <SwiperSlide key={index}

                    >
                        <div className="relative overflow-hidden group">

                            <img
                                src={item.image}
                                className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-black/40"></div>

                            <div className="absolute bottom-8 left-8 text-white text-2xl font-semibold">
                                {item.name}
                                <div className="text-[17px] m-2 ml-0">
                                    {item.title}
                                </div>
                            </div>

                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}