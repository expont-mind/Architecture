"use client";

export const VideoLoader = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
        <p className="text-white text-sm tracking-wider">Loading...</p>
      </div>
    </div>
  );
};
