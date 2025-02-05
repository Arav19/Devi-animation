import { useState, useEffect, useCallback, useRef } from 'react';

export const useFrameAnimation = (frameCount: number, fps: number = 15) => {
  const [currentFrame, setCurrentFrame] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadedFrames, setLoadedFrames] = useState<number>(0);
  const [isFullyLoaded, setIsFullyLoaded] = useState(false);
  const loadedImagesRef = useRef<{ [key: number]: HTMLImageElement }>({});
  const intervalRef = useRef<number>();
  const mountedRef = useRef(true);
  const frameQueueRef = useRef<number[]>([]);
  const isAnimatingRef = useRef(false);
  const loadingTimeoutRef = useRef<number>();

  // Cleanup on unmount
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
      if (loadingTimeoutRef.current) {
        window.clearTimeout(loadingTimeoutRef.current);
      }
      loadedImagesRef.current = {};
      frameQueueRef.current = [];
      isAnimatingRef.current = false;
    };
  }, []);

  // Preload all frames
  useEffect(() => {
    const preloadImages = async () => {
      // Clear any existing state
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
      if (loadingTimeoutRef.current) {
        window.clearTimeout(loadingTimeoutRef.current);
      }
      loadedImagesRef.current = {};
      frameQueueRef.current = [];
      isAnimatingRef.current = false;
      setLoadedFrames(0);
      setIsFullyLoaded(false);

      const loadImage = (index: number): Promise<void> => {
        return new Promise((resolve, reject) => {
          const frameNumber = (index + 1).toString().padStart(4, '0');
          const src = `/images/frames/pngvid${frameNumber}.png`;
          
          // Check if image is already cached by browser
          const cachedImage = new Image();
          cachedImage.src = src;
          
          if (cachedImage.complete) {
            if (mountedRef.current) {
              loadedImagesRef.current[index + 1] = cachedImage;
              setLoadedFrames(prev => prev + 1);
              frameQueueRef.current.push(index + 1);
            }
            resolve();
            return;
          }

          const img = new Image();
          
          img.onload = () => {
            if (mountedRef.current) {
              loadedImagesRef.current[index + 1] = img;
              setLoadedFrames(prev => prev + 1);
              frameQueueRef.current.push(index + 1);
            }
            resolve();
          };
          
          img.onerror = () => {
            reject(new Error(`Failed to load frame ${frameNumber}`));
          };
          
          img.src = src;
        });
      };

      try {
        // Load all images at once but in chunks
        const chunkSize = 10;
        for (let i = 0; i < frameCount; i += chunkSize) {
          const chunk = Array.from({ length: Math.min(chunkSize, frameCount - i) }, (_, j) => i + j);
          await Promise.all(chunk.map(index => loadImage(index)));
        }

        // Verify all frames are loaded in sequence
        const allFramesLoaded = Array.from({ length: frameCount }, (_, i) => i + 1)
          .every(frameNum => loadedImagesRef.current[frameNum]);

        if (mountedRef.current && allFramesLoaded) {
          setIsLoaded(true);
          // Add a small delay before starting animation to ensure smooth playback
          loadingTimeoutRef.current = window.setTimeout(() => {
            setIsFullyLoaded(true);
            startAnimation();
          }, 500); // Half second delay for buffer
        }
      } catch (error) {
        console.error('Error during preload:', error);
        // Only proceed if we have ALL frames
        if (mountedRef.current && Object.keys(loadedImagesRef.current).length === frameCount) {
          setIsLoaded(true);
          loadingTimeoutRef.current = window.setTimeout(() => {
            setIsFullyLoaded(true);
            startAnimation();
          }, 500);
        }
      }
    };

    const startAnimation = () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }

      isAnimatingRef.current = true;
      
      // Pre-warm the frame cache
      const warmupFrames = Math.min(5, frameCount);
      for (let i = 1; i <= warmupFrames; i++) {
        const img = loadedImagesRef.current[i];
        if (img) {
          const tempImg = new Image();
          tempImg.src = img.src;
        }
      }
      
      intervalRef.current = window.setInterval(() => {
        if (!mountedRef.current || !isAnimatingRef.current) return;

        setCurrentFrame(prev => {
          const nextFrame = prev % frameCount + 1;
          // Only advance if we have the next frame loaded
          return loadedImagesRef.current[nextFrame] ? nextFrame : prev;
        });
      }, 1000 / fps);
    };

    preloadImages();

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
      if (loadingTimeoutRef.current) {
        window.clearTimeout(loadingTimeoutRef.current);
      }
      isAnimatingRef.current = false;
    };
  }, [frameCount, fps]);

  const getFrameUrl = useCallback(() => {
    if (!isFullyLoaded) return '/images/logo.png';
    
    const frameNumber = currentFrame.toString().padStart(4, '0');
    return `/images/frames/pngvid${frameNumber}.png`;
  }, [currentFrame, isFullyLoaded]);

  return {
    frameUrl: getFrameUrl(),
    isLoaded,
    loadedFrames,
    totalFrames: frameCount,
    hasFrames: Object.keys(loadedImagesRef.current).length === frameCount,
    isFullyLoaded
  };
};