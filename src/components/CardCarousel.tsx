"use client";

import { ReactElement, ReactNode, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

type CardCarouselProps = {
  cards: ReactNode[];
  arrows?: boolean;
  delay?: number;
};

export default function CardCarousel({ cards, arrows = false, delay = 4000 }: CardCarouselProps): ReactElement {
  const autoplay = useRef(Autoplay({ delay: delay }));

  return (
    <Carousel
      className="w-full"
      plugins={[autoplay.current]}
      opts={{
        align: "start",
        loop: true,
      }}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.play}
    >
      <CarouselContent>
        {cards.map((card: ReactNode, index: number) => {
          return <CarouselItem key={index}>{card}</CarouselItem>;
        })}
      </CarouselContent>
      {arrows && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
    </Carousel>
  );
}
