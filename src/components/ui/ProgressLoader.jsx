"use client";

export const ProgressLoader = ({ progress = 0 }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-6 max-w-md w-full px-8">
        {/* Logo or Title */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.3em] text-center">
          MALINOWSKIEGO
        </h1>

        {/* Progress Bar */}
        <div className="w-full">
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Percentage */}
          <div className="mt-3 text-center">
            <span className="text-white/60 text-sm font-light tracking-wider">
              {Math.round(progress)}%
            </span>
          </div>
        </div>

        {/* Loading Text */}
        <p className="text-white/40 text-xs tracking-[0.2em] uppercase">
          Loading Experience
        </p>
      </div>
    </div>
  );
};
