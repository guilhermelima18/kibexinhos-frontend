import { ReactNode } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

type OwlCarouselReactProps = {
  children: ReactNode;
};

const responsive = {
  0: {
    items: 1,
  },
  500: {
    items: 2,
  },
  600: {
    items: 3,
    nav: false,
  },
  1000: {
    items: 5,
    nav: true,
  },
};

export const OwlCarouselReact = ({ children }: OwlCarouselReactProps) => {
  return (
    <OwlCarousel className="owl-theme" margin={5} responsive={responsive}>
      {children}
    </OwlCarousel>
  );
};
