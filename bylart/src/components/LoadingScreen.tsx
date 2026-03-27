import { useEffect, useState } from "react";
import { Flower2 } from "lucide-react";

interface LoadingScreenProps {
  duration?: number;
  onComplete?: () => void;
}

export default function LoadingScreen({
  duration = 800,
  onComplete,
}: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 100 / (duration / 50);
      });
    }, 50);

    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) {
        setTimeout(onComplete, 500);
      }
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [duration, onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-gradient-to-br from-emerald-600 via-teal-500 to-emerald-700 flex items-center justify-center transition-opacity duration-500"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {/* Floating Flowers Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 animate-float">
          <Flower2 size={100} className="text-white" />
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <Flower2 size={80} className="text-white" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float">
          <Flower2 size={120} className="text-white" />
        </div>
        <div className="absolute bottom-40 right-1/3 animate-float-delayed">
          <Flower2 size={90} className="text-white" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center space-y-8 px-4">
        {/* Logo with Pulse Animation */}
        <div className="relative">
          <div className="absolute inset-0 bg-white/30 rounded-full blur-3xl animate-pulse"></div>
          <img
            src="/34.png"
            alt="BYLART Logo"
            className="relative w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl animate-float"
          />
        </div>

        {/* Brand Name */}
        <div className="text-center space-y-2">
          <h1
            className="text-4xl md:text-5xl font-bold text-white tracking-wide"
            style={{ fontFamily: "Georgia, serif" }}
          >
            BYLART
          </h1>
          <p className="text-lg md:text-xl text-emerald-100 font-medium">
            Bach Flower Therapy
          </p>
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-3">
          <p className="text-white text-lg font-medium animate-pulse">
            Nurturing Wellness...
          </p>

          {/* Progress Bar */}
          <div className="w-64 md:w-80 h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className="h-full bg-white rounded-full transition-all duration-300 ease-out shadow-lg"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <p className="text-emerald-100 text-sm">{Math.round(progress)}%</p>
        </div>

        {/* Tagline */}
        <p className="text-white/90 text-center text-sm md:text-base max-w-md px-4 animate-fade-in-up">
          Nurturing Balance, Blossoming Wellness
        </p>
      </div>
    </div>
  );
}
