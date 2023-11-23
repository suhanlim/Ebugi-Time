"use client";

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper/modules";
import { api } from "~/trpc/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CollegePanel } from "./collegePanel";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type CategoryType = { id: string; name: string };

function chunkArray<T>(array: T[], size: number) {
  const chunkedArr: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
}

export function CollegePanelSwiper() {
  const categoryData = api.category.getAllCategory.useQuery({}).data;

  const categoryMetrix = categoryData
    ? chunkArray<CategoryType>(categoryData, 4)
    : [];
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
        {categoryMetrix?.map((v, i) => (
          <SwiperSlide key={i}>
            <CollegePanel category={v} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
