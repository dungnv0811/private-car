import type { CardGridProps } from "@/types";
import { Frame, Download, Globe, Sparkles, LayoutPanelLeft, Palette } from "lucide-react";

import {
  Carousel,
  CarouselPrevious,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import {StrapiImage} from "@/components/strapi-image";

function selectIcon(icon: string) {
  switch (icon) {
    case "Frame":
      return <Frame size={28} className="text-primary" />;
    case "Download":
      return <Download size={28} className="text-primary" />;
    case "Globe":
      return <Globe size={28} className="text-primary" />;
    case "Sparkles":
      return <Sparkles size={28} className="text-primary" />;
    case "LayoutPanelLeft":
      return <LayoutPanelLeft size={28} className="text-primary" />;
    case "Palette":
      return <Palette size={28} className="text-primary" />;
    default:
      return null;
  }
}

function formatTextWithLineBreaks(text) {
  // Split the text by newline characters and filter out any empty strings if they exist
  return text.split('\n').filter(line => line).map((line, index, array) => (
      // Render the line and follow it with a <br /> tag unless it's the last line
      <React.Fragment key={index}>
        {line}
        {index !== array.length - 1 && <br />}
      </React.Fragment>
  ));
}


export function CardCarousel(data: Readonly<CardGridProps>) {
  if (!data) return null;

  const { cardItems } = data;

  return (
    <section className="container flex flex-col items-center gap-6 py-0 sm:gap-7">
      <Carousel opts={{ loop: true, align: "start" }} className="mt-6 w-full px-4 xl:px-0">
        <CarouselPrevious className="-left-6 size-7 xl:-left-12 xl:size-8" />
        <CarouselContent className="pb-4">
          {cardItems.map(({ id, heading, text, icon, image }) => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={id}>
              <div className="h-full p-1">
                <Card className="shadow-lg">
                  <CardContent className="flex flex-col items-start gap-5 p-5">
                    <div>
                      <div className="inline-flex items-center justify-center rounded-md border border-border bg-secondary p-2">
                        {selectIcon(icon)}
                      </div>
                      <span className="mb-2 text-xl font-semibold text-foreground"> {heading}</span>
                      <StrapiImage
                          src={image.url}
                          alt={image.alternativeText}
                          width={800}
                          height={600}
                          priority
                          className="w-full rounded-lg mt-2"
                      />
                      <p className="text-muted-foreground py-2">{formatTextWithLineBreaks(text)}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="-right-6 size-7 xl:-right-12 xl:size-8" />
      </Carousel>
    </section>
  );
}
