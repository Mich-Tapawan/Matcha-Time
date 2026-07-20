import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { easeOut } from "./motion/variants";

type PageLoadGateProps = {
  children: ReactNode;
  extraAssets?: string[];
  className?: string;
};

function isVideoUrl(url: string): boolean {
  return /\.(mp4|webm|ogg)(\?|$)/i.test(url);
}

function preloadImage(url: string): Promise<void> {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => resolve();
    image.onerror = () => resolve();
    image.src = url;
  });
}

function preloadVideo(url: string): Promise<void> {
  return new Promise((resolve) => {
    const video = document.createElement("video");
    video.preload = "auto";
    video.muted = true;
    video.playsInline = true;

    const finish = () => {
      video.removeAttribute("src");
      video.load();
      resolve();
    };

    video.addEventListener("loadeddata", finish, { once: true });
    video.addEventListener("error", finish, { once: true });
    video.src = url;
    video.load();
  });
}

function preloadAsset(url: string): Promise<void> {
  if (!url || url.startsWith("data:")) return Promise.resolve();
  return isVideoUrl(url) ? preloadVideo(url) : preloadImage(url);
}

function collectAssetUrls(root: HTMLElement): string[] {
  const urls = new Set<string>();

  root.querySelectorAll("img").forEach((img) => {
    const src = img.currentSrc || img.getAttribute("src");
    if (src) urls.add(src);
  });

  root.querySelectorAll("video").forEach((video) => {
    const src = video.currentSrc || video.getAttribute("src");
    if (src) urls.add(src);

    video.querySelectorAll("source").forEach((source) => {
      const sourceSrc = source.getAttribute("src");
      if (sourceSrc) urls.add(sourceSrc);
    });
  });

  return [...urls];
}

function PageLoaderOverlay() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#2F490C] text-[#E5E1C1]"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="flex flex-col items-center space-y-6 px-6 text-center">
        <motion.div
          className="flex h-14 w-14 items-center justify-center rounded-full border border-[#E5E1C1]/35"
          animate={
            reduceMotion
              ? undefined
              : {
                  rotate: 360,
                  transition: {
                    duration: 2.4,
                    ease: "linear",
                    repeat: Infinity,
                  },
                }
          }
        >
          <svg
            className="h-5 w-5 fill-current"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path d="M12 2L2 12l10 10 10-10L12 2z" />
          </svg>
        </motion.div>

        <div className="space-y-2">
          <p className="brand-font text-3xl tracking-[0.08em] md:text-4xl">
            Matcha Time
          </p>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#E5E1C1]/70">
            Preparing your ritual
          </p>
        </div>

        <div className="h-px w-24 overflow-hidden bg-[#E5E1C1]/20">
          <motion.div
            className="h-full w-1/2 bg-[#E5E1C1]"
            animate={
              reduceMotion
                ? undefined
                : {
                    x: ["-100%", "200%"],
                    transition: {
                      duration: 1.4,
                      ease: easeOut,
                      repeat: Infinity,
                    },
                  }
            }
          />
        </div>
      </div>
    </div>
  );
}

export default function PageLoadGate({
  children,
  extraAssets = [],
  className,
}: PageLoadGateProps) {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    let cancelled = false;
    let debounceId = 0;
    let safetyId = 0;
    let checkId = 0;
    let observer: MutationObserver;
    const extra = [...extraAssets];

    const finish = () => {
      if (cancelled) return;
      cancelled = true;
      observer.disconnect();
      window.clearTimeout(debounceId);
      window.clearTimeout(safetyId);
      setIsReady(true);
    };

    const waitForAssets = async (token: number) => {
      const urls = new Set([...extra, ...collectAssetUrls(root)]);
      const fontsReady = document.fonts?.ready ?? Promise.resolve();

      await Promise.all([
        fontsReady,
        ...[...urls].map((url) => preloadAsset(url)),
      ]);

      if (cancelled || token !== checkId) return;

      await new Promise<void>((resolve) => {
        window.setTimeout(resolve, 180);
      });

      if (cancelled || token !== checkId) return;

      const settledUrls = new Set([...extra, ...collectAssetUrls(root)]);
      await Promise.all([...settledUrls].map((url) => preloadAsset(url)));

      if (cancelled || token !== checkId) return;
      finish();
    };

    const scheduleCheck = () => {
      if (cancelled) return;
      window.clearTimeout(debounceId);
      debounceId = window.setTimeout(() => {
        checkId += 1;
        void waitForAssets(checkId);
      }, 160);
    };

    observer = new MutationObserver(scheduleCheck);
    observer.observe(root, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["src", "srcset"],
    });

    scheduleCheck();
    safetyId = window.setTimeout(finish, 12000);

    return () => {
      cancelled = true;
      observer.disconnect();
      window.clearTimeout(debounceId);
      window.clearTimeout(safetyId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- gate resets on page remount
  }, []);

  useEffect(() => {
    if (isReady) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isReady]);

  return (
    <>
      <AnimatePresence>
        {!isReady && (
          <motion.div
            key="page-loader"
            initial={{ opacity: 1 }}
            exit={
              reduceMotion
                ? { opacity: 0, transition: { duration: 0.01 } }
                : { opacity: 0, transition: { duration: 0.45, ease: easeOut } }
            }
          >
            <PageLoaderOverlay />
          </motion.div>
        )}
      </AnimatePresence>

      <div
        ref={containerRef}
        className={className}
        aria-busy={!isReady}
        style={{
          opacity: isReady ? 1 : 0,
          pointerEvents: isReady ? "auto" : "none",
        }}
      >
        {children}
      </div>
    </>
  );
}
