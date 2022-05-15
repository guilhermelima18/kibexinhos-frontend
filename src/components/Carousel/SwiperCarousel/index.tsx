import { Flex, Image } from "@chakra-ui/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export function SwiperCarousel() {
  return (
    <Flex w="100%" maxW="1300px" mt="10" mx="auto" mb={["5", "10"]}>
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        style={{ width: "100%", flex: "1" }}
      >
        <SwiperSlide>
          <Flex w="100%" alignItems="center">
            <Image
              w="100%"
              borderRadius="md"
              src="https://i.imgur.com/mzMVHPD.jpg"
              alt="Banner 01"
            />
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex w="100%" alignItems="center">
            <Image
              w="100%"
              borderRadius="md"
              src="https://i.imgur.com/c7ByDHy.jpg"
              alt="Banner 02"
            />
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex w="100%" alignItems="center">
            <Image
              w="100%"
              borderRadius="md"
              src="https://i.imgur.com/HYhUmEG.jpg"
              alt="Banner 03"
            />
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
