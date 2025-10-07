export const VideoBackground = ({ videoRef1, videoRef2, bgImage }) => {
  return (
    <>
      {bgImage && (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}
      <video
        ref={videoRef1}
        className="absolute inset-0 w-full h-full object-cover opacity-0"
        muted
        playsInline
        preload="none"
        poster={bgImage || undefined}
      />
      <video
        ref={videoRef2}
        className="absolute inset-0 w-full h-full object-cover opacity-0"
        muted
        playsInline
        preload="none"
        poster={bgImage || undefined}
      />
    </>
  );
};
