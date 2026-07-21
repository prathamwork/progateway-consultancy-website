import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const BOTTOM_THRESHOLD = 80;

export function PageScrollControl() {
  const [canScroll, setCanScroll] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    let animationFrame: number | null = null;

    const updateScrollState = () => {
      animationFrame = null;

      const documentHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const maximumScroll = documentHeight - viewportHeight;

      const pageCanScroll = maximumScroll > 100;
      const reachedBottom =
        pageCanScroll &&
        window.scrollY >= maximumScroll - BOTTOM_THRESHOLD;

      setCanScroll(pageCanScroll);
      setIsAtBottom(reachedBottom);
    };

    const requestUpdate = () => {
      if (animationFrame !== null) return;

      animationFrame = window.requestAnimationFrame(updateScrollState);
    };

    updateScrollState();

    window.addEventListener("scroll", requestUpdate, {
      passive: true,
    });

    window.addEventListener("resize", requestUpdate);

    const resizeObserver = new ResizeObserver(requestUpdate);
    resizeObserver.observe(document.body);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      resizeObserver.disconnect();

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  const handleScroll = () => {
    if (isAtBottom) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    const documentHeight = document.documentElement.scrollHeight;
    const nextPosition = Math.min(
      window.scrollY + window.innerHeight * 0.85,
      documentHeight,
    );

    window.scrollTo({
      top: nextPosition,
      behavior: "smooth",
    });
  };

  if (!canScroll) return null;

  const label = isAtBottom ? "Back to top" : "Scroll down";

  return (
    <button
      type="button"
      onClick={handleScroll}
      aria-label={label}
      title={label}
      style={{
        bottom: "max(1.25rem, env(safe-area-inset-bottom))",
      }}
      className="fixed right-5 z-[70] inline-flex items-center gap-2 rounded-full border border-border-strong bg-background/90 px-4 py-3 text-sm font-bold text-foreground shadow-lift backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      {isAtBottom ? (
        <>
          <ChevronUp className="size-5 text-primary" aria-hidden />
          <span className="hidden sm:inline">Back to top</span>
        </>
      ) : (
        <>
          <ChevronDown
            className="size-5 text-primary motion-safe:animate-bounce"
            aria-hidden
          />
          <span className="hidden sm:inline">Scroll down</span>
        </>
      )}
    </button>
  );
}