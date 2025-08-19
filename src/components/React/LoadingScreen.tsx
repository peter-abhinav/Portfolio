// LoadingScreen.tsx
"use client";
import { useState, useEffect } from "react";
import { NumberTicker } from "./NumberTicker";

export default function LoadingScreen({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoaded = () => setTimeout(() => setLoading(false), 1000);
    if (document.readyState === "complete") handleLoaded();
    else window.addEventListener("load", handleLoaded);
    return () => window.removeEventListener("load", handleLoaded);
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-md bg-black/30 transition-opacity duration-500">
          <NumberTicker
            value={100}
            startValue={85}
            className="font-bold text-white animate-pulse"
            style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
          />
        </div>

      )}
      <div className={loading ? "opacity-20" : "opacity-100 transition-opacity duration-500"}>
        {children}
      </div>
    </>
  );
}
