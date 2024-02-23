import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ListVideos({ i18n }: { i18n: any }) {
  return (
    <section className=" w-full h-auto flex items-center justify-center">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="xl:max-w-[1000px] md:max-w-[800px] w-full">
          <div className="relative h-0" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute left-0 top-0 h-full w-full rounded-lg shadow-2xl shadow-white/10"
              src={`https://www.youtube.com/embed/7VohxPOFioo`}
              frameBorder="0"
              data-allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="mt-5 xl:max-w-[1000px] md:max-w-[800px] w-full flex items-center justify-center h-[300px]">
          <CarrouselVideos />
        </div>
      </div>
    </section>
  );
}

function CarrouselVideos() {
  return (
    <div className="w-full flex justify-center items-center">
      <Carousel
        opts={{
          align: "center",
        }}
        className="w-full max-w-[200px] xs:max-w-[350px] sm:max-w-[500px] lg:max-w-[800px]"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="xs:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
