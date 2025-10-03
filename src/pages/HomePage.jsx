"use client";

import { useState } from "react";
import {
  HouseShowcase,
  VideoBackground,
  Location,
  ContactUs,
} from "@/components/home";
import { useVideoPlayer } from "@/hooks/useVideoPlayer";
import { Header, Footer } from "@/components/navigation";
import {
  MAIN_ANIMATION,
  houseA,
  houseB,
  playground,
  houseAMeta,
  houseBMeta,
  playgroundMeta,
} from "@/components/home";

export const HomePage = () => {
  const [activeHouse, setActiveHouse] = useState(houseA);
  const [mode, setMode] = useState("menu");

  const {
    videoRef1,
    videoRef2,
    currentCorner,
    isTransitioning,
    playCorner,
    playIntro,
    playBackToMenu,
    bgImage,
    activeVideo,
  } = useVideoPlayer(MAIN_ANIMATION, activeHouse);

  const handleHouseA = async () => {
    setMode("house");
    setActiveHouse(houseA);
    await playIntro(houseA[0].introSrc, houseA[0], () => {
      setMode("corner");
    });
  };

  const handleHouseB = async () => {
    setMode("house");
    setActiveHouse(houseB);
    await playIntro(houseB[0].introSrc, houseB[0], () => {
      setMode("corner");
    });
  };

  const handlePlayground = async () => {
    setMode("house");
    setActiveHouse(playground);
    await playIntro(playground[0].introSrc, playground[0], () => {
      setMode("corner");
    });
  };

  const handleBack = async () => {
    setMode("house");
    let backSrc = "/renders/HouseA_1-0.mp4";
    if (activeHouse === houseB) {
      backSrc = "/renders/HouseB_1-0.mp4";
    } else if (activeHouse === playground) {
      backSrc = "/renders/Playground_1-0.mp4";
    }

    await playBackToMenu(backSrc, () => {
      setMode("menu");
    });
  };

  return (
    <main className="w-full relative overflow-x-hidden">
      <Header />

      <div className="w-full min-h-screen relative" id="house">
        <div
          className="fixed inset-0 -z-10"
          style={{
            backgroundImage: bgImage ? `url(${bgImage})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <VideoBackground
            videoRef1={videoRef1}
            videoRef2={videoRef2}
            activeVideo={activeVideo}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent pointer-events-none"></div>
        </div>

        {mode === "menu" && (
          <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12">
            <div className="flex flex-col items-center gap-8 sm:gap-12 lg:gap-16 w-full max-w-4xl">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-[0.2em] sm:tracking-[0.3em] text-center text-balance">
                MALINOWSKIEGO
              </h1>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-4 lg:gap-6 w-full sm:w-auto">
                <button
                  onClick={handleHouseA}
                  className="px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 lg:py-4 border border-white/30 text-white text-xs sm:text-sm lg:text-base font-light tracking-[0.15em] hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm rounded-lg hover:shadow-lg hover:shadow-white/10 cursor-pointer"
                >
                  LARGE HOUSE
                </button>
                <button
                  onClick={handleHouseB}
                  className="px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 lg:py-4 border border-white/30 text-white text-xs sm:text-sm lg:text-base font-light tracking-[0.15em] hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm rounded-lg hover:shadow-lg hover:shadow-white/10 cursor-pointer"
                >
                  SMALL HOUSE
                </button>
                <button
                  onClick={handlePlayground}
                  className="px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 lg:py-4 border border-white/30 text-white text-xs sm:text-sm lg:text-base font-light tracking-[0.15em] hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm rounded-lg hover:shadow-lg hover:shadow-white/10 cursor-pointer"
                >
                  PLAYGROUND
                </button>
              </div>
            </div>
          </div>
        )}

        {mode === "corner" && (
          <HouseShowcase
            houseData={activeHouse}
            currentCorner={currentCorner}
            isTransitioning={isTransitioning}
            playCorner={playCorner}
            onBack={handleBack}
            houseMeta={
              activeHouse === houseA
                ? houseAMeta
                : activeHouse === houseB
                ? houseBMeta
                : playgroundMeta
            }
          />
        )}
      </div>

      <Location />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default HomePage;
