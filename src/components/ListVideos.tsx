import videos from "@/data/videos.json";

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
          <div className="w-full flex justify-center items-center">
            <Carousel
              opts={{
                align: "center",
              }}
              className="w-full max-w-[200px] xs:max-w-[350px] sm:max-w-[500px] lg:max-w-[800px]"
            >
              <CarouselContent>
                {videos.map(({ urlMiniature, urlVideo }) => {
                  return (
                    <CarouselItem
                      key={urlVideo}
                      className="xs:basis-1/2 lg:basis-1/3"
                    >
                      <div key={urlVideo}>
                        <a href={urlVideo} target="_blank" rel="noreferrer">
                          <div
                            className="relative"
                            style={{ paddingBottom: "56.25%" }}
                          >
                            <div className="absolute inset-0 flex items-center justify-center group">
                              <img
                                src={urlMiniature}
                                alt="jpg"
                                className="w-full rounded-lg transition-opacity duration-300 ease-in-out opacity-50 group-hover:opacity-100"
                              />
                              <div className="absolute inset-0 flex items-center justify-center text-sm transition-colors duration-300 ease-in-out text-white group-hover:text-red-500">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="28"
                                  height="28"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M12 20.5C13.8097 20.5 15.5451 20.3212 17.1534 19.9934C19.1623 19.5839 20.1668 19.3791 21.0834 18.2006C22 17.0221 22 15.6693 22 12.9635V11.0365C22 8.33073 22 6.97787 21.0834 5.79937C20.1668 4.62088 19.1623 4.41613 17.1534 4.00662C15.5451 3.67877 13.8097 3.5 12 3.5C10.1903 3.5 8.45489 3.67877 6.84656 4.00662C4.83766 4.41613 3.83321 4.62088 2.9166 5.79937C2 6.97787 2 8.33073 2 11.0365V12.9635C2 15.6693 2 17.0221 2.9166 18.2006C3.83321 19.3791 4.83766 19.5839 6.84656 19.9934C8.45489 20.3212 10.1903 20.5 12 20.5Z"
                                    stroke="#ffffff"
                                    strokeWidth="2"
                                  />
                                  <path
                                    d="M15.9621 12.3129C15.8137 12.9187 15.0241 13.3538 13.4449 14.2241C11.7272 15.1705 10.8684 15.6438 10.1728 15.4615C9.9372 15.3997 9.7202 15.2911 9.53799 15.1438C9 14.7089 9 13.8059 9 12C9 10.1941 9 9.29112 9.53799 8.85618C9.7202 8.70886 9.9372 8.60029 10.1728 8.53854C10.8684 8.35621 11.7272 8.82945 13.4449 9.77593C15.0241 10.6462 15.8137 11.0813 15.9621 11.6871C16.0126 11.8933 16.0126 12.1067 15.9621 12.3129Z"
                                    stroke="#ffffff"
                                    strokeWidth="2"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
