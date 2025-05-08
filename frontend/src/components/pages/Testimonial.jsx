import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";

const testimonialsData = [
  {
    id: 1,
    key: 0,
    image: "/images/users/user1.avif",
    rating: 5,
  },
  {
    id: 2,
    key: 1,
    image: "/images/users/user2.avif",
    rating: 5,
  },
  {
    id: 3,
    key: 2,
    image: "/images/users/user3.avif",
    rating: 4,
  },
];

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <section id="testimonials" className="py-12 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-green-700 text-center">
          {t("testimonials.heading")}
        </h2>
        <p className="mt-2 text-lg text-gray-700 text-center">
          {t("testimonials.subheading")}
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-8"
        >
          {testimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white p-6 m-5 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-center mx-4">
                <img
                  src={testimonial.image}
                  alt={t(`testimonials.list.${testimonial.key}.name`)}
                  loading="lazy"
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-green-500 transition-transform duration-300 hover:scale-110"
                />

                <h3 className="text-xl font-semibold mt-3 text-green-700">
                  {t(`testimonials.list.${testimonial.key}.name`)}
                </h3>

                <div className="flex justify-center mt-2">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <FaStar key={index} className="text-yellow-500 text-lg" />
                  ))}
                </div>

                <p className="text-gray-600 mt-3">
                  {t(`testimonials.list.${testimonial.key}.review`)}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
