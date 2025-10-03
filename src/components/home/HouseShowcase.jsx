"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export const HouseShowcase = ({
  houseData,
  currentCorner,
  isTransitioning,
  playCorner,
  onBack,
  houseMeta,
}) => {
  return (
    <div className="w-full max-w-7xl mx-auto min-h-screen flex flex-col lg:flex-row items-start lg:items-center justify-end lg:justify-between gap-6 lg:gap-12 px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
      {/* Info Section */}
      <div className="flex flex-col gap-4 sm:gap-6 w-full lg:max-w-xl order-2 lg:order-1">
        <button
          onClick={onBack}
          className="flex items-center gap-2 sm:gap-3 text-white font-medium text-sm sm:text-base lg:text-lg cursor-pointer uppercase tracking-wider hover:text-white/80 transition-colors w-fit"
        >
          <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
          House List
        </button>

        <div className="flex flex-col gap-6 border border-white/20 bg-black/40 rounded-xl p-4 md:p-6">
          {/* Stats */}
          <div className="flex w-full divide-x divide-white/10">
            <div className="flex flex-col items-center justify-center px-3 w-1/3">
              <span className="text-xs md:text-base text-white uppercase">
                Plot (M²)
              </span>
              <span className="text-sm md:text-base font-light text-white">
                {houseMeta.plot}
              </span>
            </div>
            <div className="flex flex-col items-center justify-center px-3 w-1/3">
              <span className="text-xs md:text-base text-white uppercase">
                House (M²)
              </span>
              <span className="text-sm md:text-base font-light text-white">
                {houseMeta.house}
              </span>
            </div>
            <div className="flex flex-col items-center justify-center px-3 w-1/3">
              <span className="text-xs md:text-base text-white uppercase">
                Price
              </span>
              <span className="text-sm md:text-base font-light text-white">
                {houseMeta.price}
              </span>
            </div>
          </div>

          <div className="w-full h-[1px] bg-white/10"></div>

          {/* Rooms */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {houseMeta.rooms.map((room) => (
              <div
                key={room.label}
                className="flex flex-col items-center justify-center bg-white/10 rounded-lg py-3"
              >
                <span className="text-xs text-white/50">{room.label}</span>
                <span className="text-base md:text-lg text-white font-light">
                  {room.size}
                </span>
              </div>
            ))}
          </div>

          <div className="w-full h-[1px] bg-white/10"></div>

          {/* Docs + CTA */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="text-xs text-white/50">Documentation</span>
              <span className="text-sm text-white/70">
                {houseMeta.documentation}
              </span>
            </div>
            <button className="w-full md:max-w-[154px] px-6 py-2 rounded-full bg-white text-black hover:bg-white/80 transition">
              <span className="text-sm font-medium">Book a Call</span>
            </button>
          </div>
        </div>
      </div>

      {/* Corner previews */}
      <div className="w-full md:w-auto flex flex-col items-center order-1 md:order-2">
        {/* Утасанд → зураас байдлаар */}
        <div className="flex md:hidden w-full gap-2">
          {houseData.map((corner) => {
            const isActive = currentCorner === corner.id;
            return (
              <button
                key={corner.id}
                onClick={() => {
                  if (!isTransitioning && !isActive) {
                    playCorner(corner);
                  }
                }}
                disabled={isActive}
                className={`flex-1 h-1 rounded-full transition-all duration-300 ${
                  isActive ? "bg-white" : "bg-white/30"
                }`}
              ></button>
            );
          })}
        </div>

        {/* Desktop дээр → thumbnail хэвээр */}
        <div className="hidden md:flex lg:flex-col gap-4 justify-center">
          {houseData.map((corner) => {
            const isActive = currentCorner === corner.id;
            return (
              <button
                key={corner.id}
                onClick={() => {
                  if (!isTransitioning && !isActive) {
                    playCorner(corner);
                  }
                }}
                disabled={isActive}
                className={`relative w-20 h-20 border border-white/20 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer ${
                  isActive ? "ring-2 ring-white" : ""
                }`}
              >
                <Image
                  src={corner.preview || "/placeholder.svg"}
                  alt={corner.label}
                  fill
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
