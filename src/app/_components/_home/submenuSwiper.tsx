"use client";
import { useRef, useState } from "react";
import { TestSubmenu } from "./testSubmenu";
// import Swiper core and required modules
import { Pagination, Autoplay, A11y } from "swiper/modules";

import { Swiper, type SwiperClass, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import ProgressCircle from "../_common/progressCircle";

const data: number[] = [0, 0, 0, 0, 0, 0, 0, 0];

export function SubmenuSwiper() {
  const [progressCircle, setProgressCircle] = useState(0);
  const [progressContent, setProgressContent] = useState(0);
  const onAutoplayTimeLeft = (
    _: SwiperClass,
    time: number,
    progress: number,
  ) => {
    setProgressCircle(progress);
    setProgressContent(Math.ceil(time / 1000));
  };
  return (
    <div className="w-full bg-sky-50">
      <div className="container carousel  mx-auto flex max-w-screen-lg flex-wrap items-center justify-between ">
        <Swiper
          // install Swiper modules
          modules={[Autoplay, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          // TO DO FIX autoplay={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
        >
          {data.map((i) => (
            <SwiperSlide key={i}>
              <TestSubmenu />
            </SwiperSlide>
          ))}

          <div
            className="autoplay-progress relative bottom-4 z-10 flex h-12 w-12 items-center justify-center "
            slot="container-end"
          >
            <ProgressCircle percent={progressCircle} second={progressContent} />
          </div>
        </Swiper>
      </div>
    </div>
  );
}
