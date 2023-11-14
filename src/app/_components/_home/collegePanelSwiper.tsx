"use client";

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { CollegePanel } from "./collegePanel";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data: number[] = [0, 0, 0, 0, 0, 0, 0, 0];

export function CollegePanelSwiper() {
  return (
    <div className="carousel max-w-screen-lg">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        // TO DO FIX autoplay={true}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map((i) => (
          <SwiperSlide key={i}>
            <CollegePanel />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
