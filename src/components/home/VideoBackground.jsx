export const VideoBackground = ({ videoRef1, videoRef2 }) => {
  return (
    <>
      <video
        ref={videoRef1}
        className="absolute inset-0 w-full h-full object-cover opacity-0"
        muted
        playsInline
        preload="auto"
      />
      <video
        ref={videoRef2}
        className="absolute inset-0 w-full h-full object-cover opacity-0"
        muted
        playsInline
        preload="auto"
      />
    </>
  );
};
