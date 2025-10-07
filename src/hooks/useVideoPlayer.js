"use client";

import { useState, useEffect, useRef } from "react";
import { getImageUrl } from "@/lib/cdn-config";

export function useVideoPlayer(MAIN_ANIMATION, houseData) {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const [currentCorner, setCurrentCorner] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeVideo, setActiveVideo] = useState(1);
  const [bgImage, setBgImage] = useState(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only preload the main animation initially for faster first load
    const mainVideo = document.createElement("video");
    mainVideo.src = MAIN_ANIMATION.src;
    mainVideo.preload = "auto";
    mainVideo.muted = true;

    const updateProgress = (progress) => {
      setLoadingProgress(progress);
    };

    // Track loading progress
    mainVideo.addEventListener('progress', () => {
      if (mainVideo.buffered.length > 0) {
        const bufferedEnd = mainVideo.buffered.end(mainVideo.buffered.length - 1);
        const duration = mainVideo.duration;
        if (duration > 0) {
          const progress = (bufferedEnd / duration) * 100;
          updateProgress(Math.min(progress, 100));
        }
      }
    });

    mainVideo.addEventListener('canplaythrough', () => {
      updateProgress(100);
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    });

    // Fallback: hide loader after 5 seconds even if not fully loaded
    const fallbackTimer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearTimeout(fallbackTimer);
      mainVideo.src = "";
    };
  }, [MAIN_ANIMATION]);

  const playOnRef = async (ref, src, loop = false) => {
    if (!ref.current) return;

    // Cancel any pending play
    ref.current.pause();
    ref.current.onended = null;
    ref.current.oncanplaythrough = null;

    // Load new source
    ref.current.src = src;
    ref.current.currentTime = 0;
    ref.current.loop = loop;

    // Wait for video to be ready and play
    try {
      await ref.current.play();
    } catch (error) {
      // Ignore interruption errors
      if (error.name !== 'AbortError' && error.name !== 'NotAllowedError') {
        console.error('Video play error:', error);
        console.error('Failed video URL:', src);
        console.error('CDN Config:', {
          USE_CDN: process.env.NEXT_PUBLIC_USE_CDN,
          CDN_BASE_URL: process.env.NEXT_PUBLIC_CDN_URL
        });
      }
    }
  };

  const getActiveRef = () => (activeVideo === 1 ? videoRef1 : videoRef2);
  const getInactiveRef = () => (activeVideo === 1 ? videoRef2 : videoRef1);

  const playCorner = async (targetCorner) => {
    if (isTransitioning) return;

    const prevIndex = currentCorner
      ? houseData.findIndex((c) => c.id === currentCorner)
      : null;
    const targetIndex = houseData.findIndex((c) => c.id === targetCorner.id);

    setCurrentCorner(targetCorner.id);
    setIsTransitioning(true);

    let transitionSrc = null;

    if (prevIndex !== null) {
      const prevCorner = houseData[prevIndex];
      const directKey = `transitionTo${targetIndex + 1}`;
      if (prevCorner[directKey]) {
        transitionSrc = prevCorner[directKey];
      } else if (
        prevIndex === 0 &&
        targetIndex === 3 &&
        houseData[0].wrapTransition
      ) {
        transitionSrc = houseData[0].wrapTransition;
      } else if (
        prevIndex === 3 &&
        targetIndex === 0 &&
        houseData[3].wrapTransition
      ) {
        transitionSrc = houseData[3].wrapTransition;
      } else if (targetIndex > prevIndex) {
        transitionSrc = targetCorner.introSrc;
      } else if (targetIndex < prevIndex) {
        if (prevIndex === 3 && targetIndex === 2)
          transitionSrc = houseData[3].reverseTransition;
        if (prevIndex === 2 && targetIndex === 1)
          transitionSrc = houseData[2].reverseTransition;
        if (prevIndex === 1 && targetIndex === 0)
          transitionSrc = houseData[1].reverseTransition2;
      }
    } else {
      transitionSrc = targetCorner.introSrc;
    }

    const inactiveRef = getInactiveRef();
    const activeRef = getActiveRef();

    // 👉 Background fallback (хар flash алга болгоно)
    setBgImage(targetCorner.preview);

    // Transition play
    await playOnRef(inactiveRef, transitionSrc, false);

    // Crossfade
    inactiveRef.current.style.opacity = 1;
    activeRef.current.style.opacity = 0;

    // ✅ Preload loopSrc урьдчилж
    const loopVideo = document.createElement("video");
    loopVideo.src = targetCorner.loopSrc;
    loopVideo.preload = "auto";
    loopVideo.muted = true;

    // Transition дуусах үед loop эхлүүлнэ
    inactiveRef.current.onended = async () => {
      if (!inactiveRef.current) return;
      inactiveRef.current.onended = null;

      // Эхлээд loop тоглуулна
      await playOnRef(inactiveRef, targetCorner.loopSrc, true);

      // LoopSrc тоглоход frame гарч эхлэхтэй зэрэгцэж fallback устгана
      if (inactiveRef.current) {
        inactiveRef.current.oncanplaythrough = () => {
          setBgImage(null);
          if (inactiveRef.current) {
            inactiveRef.current.oncanplaythrough = null;
          }
        };
      }

      setActiveVideo((prev) => (prev === 1 ? 2 : 1));
      setIsTransitioning(false);
    };
  };

  const playIntro = async (introSrc, targetCorner, onDone) => {
    const inactiveRef = getInactiveRef();
    const activeRef = getActiveRef();

    setBgImage(targetCorner.preview);

    await playOnRef(inactiveRef, introSrc, false);

    inactiveRef.current.style.opacity = 1;
    activeRef.current.style.opacity = 0;

    inactiveRef.current.onended = async () => {
      if (!inactiveRef.current) return;
      inactiveRef.current.onended = null;
      await playOnRef(inactiveRef, targetCorner.loopSrc, true);

      if (inactiveRef.current) {
        inactiveRef.current.oncanplaythrough = () => {
          setBgImage(null);
          if (inactiveRef.current) {
            inactiveRef.current.oncanplaythrough = null;
          }
        };
      }

      setActiveVideo((prev) => (prev === 1 ? 2 : 1));
      setCurrentCorner(targetCorner.id);

      if (onDone) onDone();
    };
  };

  const playBackToMenu = async (backSrc, onDone) => {
    const inactiveRef = getInactiveRef();
    const activeRef = getActiveRef();

    if (currentCorner && currentCorner !== houseData[0].id) {
      const currentIndex = houseData.findIndex((c) => c.id === currentCorner);
      const exterior1 = houseData[0]; // house бүрийн эхний corner (1-1)

      let transitionSrc = null;

      if (currentIndex === 3 && houseData[3].wrapTransition) {
        transitionSrc = houseData[3].wrapTransition; // 3→1
        setBgImage(exterior1.preview);
      } else if (currentIndex === 2 && houseData[2].transitionTo1) {
        transitionSrc = houseData[2].transitionTo1; // 2→1
        setBgImage(exterior1.preview);
      } else if (currentIndex === 1) {
        transitionSrc = houseData[1].reverseTransition2; // 1→1
        setBgImage(exterior1.preview);
      } else {
        transitionSrc = houseData[currentIndex].introSrc; // default
        setBgImage(exterior1.preview);
      }

      // 1-1 рүү тоглуулах
      await playOnRef(inactiveRef, transitionSrc, false);
      inactiveRef.current.style.opacity = 1;
      activeRef.current.style.opacity = 0;

      inactiveRef.current.onended = async () => {
        if (!inactiveRef.current) return;
        inactiveRef.current.onended = null;

        setBgImage(getImageUrl("/images/Hero_2.webp"));

        // 1-0 backSrc тоглуулах
        await playOnRef(inactiveRef, backSrc, false);

        if (!inactiveRef.current) return;
        inactiveRef.current.onended = async () => {
          if (!inactiveRef.current) return;
          inactiveRef.current.onended = null;

          await playOnRef(inactiveRef, MAIN_ANIMATION.src, true);

          if (inactiveRef.current) {
            inactiveRef.current.oncanplaythrough = () => {
              if (inactiveRef.current) {
                inactiveRef.current.oncanplaythrough = null;
              }
            };
          }

          setActiveVideo((prev) => (prev === 1 ? 2 : 1));
          setCurrentCorner(null);

          if (onDone) onDone();
        };
      };
    } else {
      // 1-0 backSrc рүү шууд тоглуулах
      await playOnRef(inactiveRef, backSrc, false);
      inactiveRef.current.style.opacity = 1;
      activeRef.current.style.opacity = 0;

      setBgImage(getImageUrl("/images/Hero_2.webp"));

      inactiveRef.current.onended = async () => {
        if (!inactiveRef.current) return;
        inactiveRef.current.onended = null;

        // Hero_2-2 loop тоглуулах
        await playOnRef(inactiveRef, MAIN_ANIMATION.src, true);

        if (inactiveRef.current) {
          inactiveRef.current.oncanplaythrough = () => {
            setBgImage(null); // loop тоглож эхлэхэд fallback арилна
            if (inactiveRef.current) {
              inactiveRef.current.oncanplaythrough = null;
            }
          };
        }

        setActiveVideo((prev) => (prev === 1 ? 2 : 1));
        setCurrentCorner(null);

        if (onDone) onDone();
      };
    }
  };

  useEffect(() => {
    const ref = getActiveRef();
    ref.current.style.opacity = 1;
    playOnRef(ref, MAIN_ANIMATION.src, true);
  }, []);

  return {
    videoRef1,
    videoRef2,
    currentCorner,
    isTransitioning,
    playIntro,
    playCorner,
    playBackToMenu,
    bgImage,
    activeVideo,
    isLoading,
    loadingProgress,
  };
}
